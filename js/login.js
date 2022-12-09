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
//
var userArray = []; // userArray = [{"name":,"ID":,"passwd":}]
var userinfo;
var userid;
var username;
var userpasswd;
const welcomemessage = document.querySelector(".welcomemgs");
const HIDDENCLASS = "hidden";

//user정보확인
// saveduserArray = localStorage.getItem("user");
// if (saveduserArray === null) {
//   document.querySelector(".first-user").classList.remove(HIDDENCLASS);
//   loginform.classList.add(HIDDENCLASS);
//   createAccountingForm.classList.remove(HIDDENCLASS);
// } else {
//   userArray = JSON.parse(saveduserArray);
// }

//저장된 유저정보 가져오기
saveduserArray = localStorage.getItem("user");
if (saveduserArray !== null) {
  userArray = JSON.parse(saveduserArray);
}
//로그인 버튼을 누른 경우
loginbtn.addEventListener("click", handleLoginClick);
function handleLoginClick(event) {
  event.preventDefault();
  userid = userinputid.value;
  userpasswd = userinputpasswd.value;
  //id와 passwd일치 확인하기
  if (userArray === null) {
    document
      .querySelector(".login-form .cant-find-notice")
      .classList.remove(HIDDENCLASS);
    userinputid.value = "";
    userinputpasswd.value = "";
  } else {
    userinfo = userArray.filter((item) => {
      if (item.ID === userid && item.passwd === userpasswd) {
        return item;
      }
    });
    if (userinfo.length != 0) {
      document
        .querySelector(".login-form .cant-find-notice")
        .classList.add(HIDDENCLASS);
      printWelcomMessage(userinfo);
    } else {
      document
        .querySelector(".login-form .cant-find-notice")
        .classList.remove(HIDDENCLASS);
      userinputid.value = "";
      userinputpasswd.value = "";
    }
  }
}
//
createAccountingbtn.addEventListener("click", handleCreateClick);
//계정만들기 버튼을 누른 경우
function handleCreateClick(event) {
  event.preventDefault();
  loginform.classList.add(HIDDENCLASS);
  createAccountingForm.classList.remove(HIDDENCLASS);
}
//이미 있는 유저인지 확인
//있으면 있다 알리고 다시 만들기 창
//없으면 환영인사
newUserCreateBtn.addEventListener("click", handlerCreateBtn);
function handlerCreateBtn(event) {
  event.preventDefault();
  const newUserInfo = {
    name: newUserInputName.value,
    ID: newUserInputId.value,
    passwd: newUserInputPasswd.value,
  };
  if (userArray === null) {
    console.log("null");
    successCreateAccounting(newUserInfo);
  } else {
    const checkobject = userArray.filter((item) => item.ID === newUserInfo.ID);
    if (checkobject.length === 0) {
      console.log("not null");
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
function successCreateAccounting(saveUserInfo) {
  createAccountingForm.classList.add(HIDDENCLASS);
  document.querySelector(".success-create").classList.remove(HIDDENCLASS);
  document
    .querySelector(".return-loginform")
    .addEventListener("click", handlerReturnLoginForm);
  userArray.push(saveUserInfo);
  savedUserInfo();
}
function handlerReturnLoginForm() {
  document.querySelector(".success-create").classList.add(HIDDENCLASS);
  loginform.classList.remove(HIDDENCLASS);
}
//유저명과 환영인사 출력
function printWelcomMessage(hellouser) {
  console.log(hellouser);
  document
    .querySelector(".login-form .cant-find-notice")
    .classList.add(HIDDENCLASS);
  document.querySelector(".duplication-id-notice").classList.add(HIDDENCLASS);
  loginform.classList.add(HIDDENCLASS);
  welcomemessage.classList.remove(HIDDENCLASS);
  welcomemessage.textContent = `Hello ${hellouser[0].name}!`;
}

function savedUserInfo() {
  localStorage.setItem("user", JSON.stringify(userArray));
}
