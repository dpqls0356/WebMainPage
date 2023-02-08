//로그인
const loginform = document.querySelector(".login-form");
const userinputid = document.querySelector(".login-form .input-id");
const userinputpasswd = document.querySelector(".login-form .input-passwd");
const loginbtn = document.querySelector(".login-form .login-button");
//유저생성
const createAccountingbtn = document.querySelector(
  ".login-form .create-accounting-button"
);
const createAccountingForm = document.querySelector(".create-accunting");
const newUserInputName = createAccountingForm.querySelector(".input-name");
const newUserInputId = createAccountingForm.querySelector(".input-id");
const newUserInputPasswd = createAccountingForm.querySelector(".input-passwd");
const newUserCreateBtn = createAccountingForm.querySelector(".create-btn");
//로그아웃관련
const logoutBtn = document.querySelector(".logout-btn");
//
var userArray = []; // userArray = [{"name":,"ID":,"passwd":}]
var userinfo;
var userid;
var username;
var userpasswd;
const welcomemessage = document.querySelector(".welcomemgs");
const HIDDENCLASS = "hidden";

//로그인 문제 알림창
const passwdDoesntMatchNotice = document.querySelector(
  ".passwd-doesnt-match-notice"
);

const cantFindNotice = document.querySelector(".cant-find-notice");
//저장된 유저정보 가져오기
saveduserArray = localStorage.getItem("user");
if (saveduserArray !== null) {
  userArray = JSON.parse(saveduserArray);
}

// 새로고침 시 로그아웃을 안한 유저가 있는지 확인 - 로그인 상태 유지
var loginedUser = localStorage.getItem("currentUser");
if (loginedUser === null) {
  loginform.classList.remove(HIDDENCLASS);
} else {
  userinfo = userFind();
  userid = userinfo.ID;
  username = userinfo.name;
  userpasswd = userinfo.passwd;
  printLoginresult(userinfo);
}

console.log(userArray);
//로그인 버튼을 누른 경우
loginbtn.addEventListener("click", handleLoginClick);
function handleLoginClick(event) {
  passwdDoesntMatchNotice.classList.add(HIDDENCLASS);
  cantFindNotice.classList.add(HIDDENCLASS);
  event.preventDefault();
  if (userinputid.value === "" || userinputpasswd.value === "") {
    window.location.reload();
  } else {
    userid = userinputid.value;
    userpasswd = userinputpasswd.value;
    //id와 passwd일치 확인하기
    userinfo = userFind();
    printLoginresult(userinfo);
  }
}
function userFind() {
  for (var i = 0; i < userArray.length; i++) {
    if (
      (userArray[i].ID === userid && userArray[i].passwd === userpasswd) ||
      userArray[i].ID === loginedUser
    ) {
      return userArray[i];
    } else if (
      userArray[i].ID === userid &&
      userArray[i].passwd !== userpasswd
    ) {
      return "notuserpasswd";
    }
  }
  return "notuser";
}

function printLoginresult(printuserinfo) {
  if (printuserinfo === "notuserpasswd") {
    passwdDoesntMatchNotice.classList.remove(HIDDENCLASS);
    userinputid.value = "";
    userinputpasswd.value = "";
  } else if (printuserinfo === "notuser") {
    cantFindNotice.classList.remove(HIDDENCLASS);
    userinputid.value = "";
    userinputpasswd.value = "";
  } else {
    printWelcomMessage(printuserinfo);
    // 로그인된 계정 저장하도록함
    loginedUser = printuserinfo.ID;
    saveloginstate();
  }
}
function saveloginstate() {
  localStorage.setItem("currentUser", loginedUser);
}

createAccountingbtn.addEventListener("click", handleCreateClick);
//계정만들기 버튼을 누른 경우
function handleCreateClick(event) {
  event.preventDefault();
  passwdDoesntMatchNotice.classList.add(HIDDENCLASS);
  cantFindNotice.classList.add(HIDDENCLASS);
  loginform.classList.add(HIDDENCLASS);
  createAccountingForm.classList.remove(HIDDENCLASS);
}
//이미 있는 유저인지 확인
//있으면 있다 알리고 다시 만들기 창
//없으면 환영인사
newUserCreateBtn.addEventListener("click", handlerCreateBtn);
function handlerCreateBtn(event) {
  event.preventDefault();
  if (
    newUserInputName.value === "" ||
    newUserInputId.value === "" ||
    newUserInputPasswd.value === ""
  ) {
    document.querySelector(".enter-all-notice").classList.remove(HIDDENCLASS);
    newUserInputId.value = "";
    newUserInputName.value = "";
    newUserInputPasswd.value = "";
  } else {
    const newUserInfo = {
      name: newUserInputName.value,
      ID: newUserInputId.value,
      passwd: newUserInputPasswd.value,
    };
    console.log(userArray);
    if (userArray.length === 0) {
      console.log("null");
      successCreateAccounting(newUserInfo);
    } else {
      const checkobject = userArray.filter(
        (item) => item.ID === newUserInfo.ID
      );
      if (checkobject.length === 0) {
        //추가되었다는 창 보여주기 + 로그인으로 돌아가는 버튼
        successCreateAccounting(newUserInfo);
      } else {
        //중복되는 아이디로 다시 입력하라고 하기
        document
          .querySelector(".duplication-id-notice")
          .classList.remove(HIDDENCLASS);
        newUserInputId.value = "";
        newUserInputName.value = "";
        newUserInputPasswd.value = "";
      }
    }
  }
}
function successCreateAccounting(saveUserInfo) {
  passwdDoesntMatchNotice.classList.add(HIDDENCLASS);
  cantFindNotice.classList.add(HIDDENCLASS);
  createAccountingForm.classList.add(HIDDENCLASS);
  document.querySelector(".success-create").classList.remove(HIDDENCLASS);
  document
    .querySelector(".return-loginform")
    .addEventListener("click", handlerReturnLoginForm);
  userArray.push(saveUserInfo);
  console.log(userArray);
  savedUserInfo();
}
function handlerReturnLoginForm() {
  document.querySelector(".success-create").classList.add(HIDDENCLASS);
  loginform.classList.remove(HIDDENCLASS);
}
//유저명과 환영인사 출력 + 해당 유저의 todolist 불러오기
function printWelcomMessage(hellouser) {
  document.querySelector(".more-info-btn").classList.remove(HIDDENCLASS);
  document.querySelector(".duplication-id-notice").classList.add(HIDDENCLASS);
  loginform.classList.add(HIDDENCLASS);
  welcomemessage.classList.remove(HIDDENCLASS);
  welcomemessage.textContent = `Hello ${hellouser.name}!`;
  loadUsersTodoList();
}

function savedUserInfo() {
  localStorage.setItem("user", JSON.stringify(userArray));
}
logoutBtn.addEventListener("click", handlerLogout);
function handlerLogout() {
  localStorage.removeItem("currentUser");
  window.location.reload();
}
