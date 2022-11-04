// 해야할일 - 사용자를 입력받고 그게 localStore에 있는지 확인 - 없으면 다시 입력하기 or 새로운 사용자 띄워주기 / 있으면 해당하는 투두 리스트 가져와주기
// 로그인
const loginForm = document.querySelector(".login-form");
const loginName = loginForm.querySelector("input");
const loginBtn = loginForm.querySelector("button");
// 헤더
const helloHeader = document.querySelector(".hello-header");
// 에러창
const addUserBtn = document.querySelector(".add-user");
const retryLoginBtn = document.querySelector(".retry-login");
const loginError = document.querySelector(".login-error");
// 유저추가
const addUserForm = document.querySelector(".add-user-form");
const addUserFormName = addUserForm.querySelector("input");
const addUserFormBtn = addUserForm.querySelector("button");
// 상수
const HIDDEN_CLASS = "hidden";
const USER_KEY = "user";
// 유저배열
let usernamearray = [];

// const toDo = document.querySelector(".todo");

loginBtn.addEventListener("click", onClickLoginBtnHandler);

function onClickLoginBtnHandler(event) {
  event.preventDefault();
  const inputusername = loginName.value;
  // findUser 함수의 리턴값 문제로 제대로 안돌아갔었음 return false ===false 가 제대로 안먹는 듯
  if (findUser(inputusername)) {
    console.log("1");
    // 로그인파트 없애고 인사창 띄우기
    setOwnerAndToDo(inputusername);
    loginForm.classList.add(HIDDEN_CLASS);
    printHelloHeader(inputusername);
    // todo가져오기
  } else {
    console.log("2");
    //사용자 정보가 없어서 재입력 또는 사용자 추가창 띄우기(완료)
    loginForm.classList.add(HIDDEN_CLASS);
    loginError.classList.remove(HIDDEN_CLASS);
    addUserBtn.addEventListener("click", addUser);
    retryLoginBtn.addEventListener("click", retryLogin);
  }
}
function printHelloHeader(username) {
  helloHeader.classList.remove(HIDDEN_CLASS);
  helloHeader.innerHTML = `Hello~ ${username}`;
}

// 유저 찾기
function findUser(inputusername) {
  for (var i = 0; i < usernamearray.length; i++) {
    if (usernamearray[i].name === inputusername) {
      return true;
    }
  }
  return false;
}
// 유저생성 함수
function addUser() {
  console.log("3");
  addUserForm.classList.remove(HIDDEN_CLASS);
  loginError.classList.add(HIDDEN_CLASS);
  addUserFormBtn.addEventListener("click", onClickAddUserBtnHandler);
}
// 유저생성 핸들러
function onClickAddUserBtnHandler(event) {
  const newname = addUserFormName.value;
  event.preventDefault();
  console.log(newname);
  if (findUser(newname)) {
    alert("이미 존재하는 이름");
    addUserFormName = "";
  } else {
    const newUser = { name: newname };
    usernamearray.push(newUser);
    savedUser();
    loginForm.classList.add(HIDDEN_CLASS);
    addUserForm.classList.add(HIDDEN_CLASS);
    loginError.classList.add(HIDDEN_CLASS);
    printHelloHeader(newUser.name);
    setOwnerAndToDo(newname);
  }
}
// 유저생성 - 로컬저장소에 저장
function savedUser() {
  localStorage.setItem(USER_KEY, JSON.stringify(usernamearray));
}
// 재로그인
function retryLogin() {
  loginName.value = "";
  loginForm.classList.remove(HIDDEN_CLASS);
  loginError.classList.add(HIDDEN_CLASS);
}

// 새로고침시 로컬저장소에서 유저정보가져오기
const saveduser = localStorage.getItem(USER_KEY);
if (saveduser !== null) {
  const parseUser = JSON.parse(saveduser);
  usernamearray = parseUser;
}

//
//
//
// 공부코드;
// function onClickLoginBtnHandler(event) {
//   event.preventDefault();
//   const username = loginName.value;
//   localStorage.setItem("username", username);
//   loginForm.classList.add(HIDDEN_CLASS);
//   printHelloHeader(username);
//   toDo.classList.remove(HIDDEN_CLASS);
// }
// const savedUserName = localStorage.getItem("username");
// if (savedUserName === null) {
//   loginForm.classList.remove(HIDDEN_CLASS);
//   loginBtn.addEventListener("click", onClickLoginBtnHandler);
// } else {
//   printHelloHeader(savedUserName);
//   toDo.classList.remove(HIDDEN_CLASS);
// }

// function printHelloHeader(username) {
//   helloHeader.classList.remove(HIDDEN_CLASS);
//   helloHeader.innerHTML = `Hello~ ${username}`;
// }
