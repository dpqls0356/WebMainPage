const loginForm = document.querySelector(".login-form");
const loginName = loginForm.querySelector("input");
const loginBtn = loginForm.querySelector("button");
const helloHeader = document.querySelector(".hello-header");
const HIDDEN_CLASS = "hidden";
const toDo = document.querySelector(".todo");
function onClickLoginBtnHandler(event) {
  event.preventDefault();
  const username = loginName.value;
  localStorage.setItem("username", username);
  loginForm.classList.add(HIDDEN_CLASS);
  printHelloHeader(username);
  toDo.classList.remove(HIDDEN_CLASS);
}
const savedUserName = localStorage.getItem("username");
if (savedUserName === null) {
  loginForm.classList.remove(HIDDEN_CLASS);
  loginBtn.addEventListener("click", onClickLoginBtnHandler);
} else {
  printHelloHeader(savedUserName);
  toDo.classList.remove(HIDDEN_CLASS);
}

function printHelloHeader(username) {
  helloHeader.classList.remove(HIDDEN_CLASS);
  helloHeader.innerHTML = `Hello~ ${username}`;
}
