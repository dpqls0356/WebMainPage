const loginform = document.querySelector(".login-form");
const userinputname = document.querySelector(".login-form .input-name");
const userinputpasswd = document.querySelector(".login-form .input-passwd");
const loginbtn = document.querySelector(".login-form .login-button");
var username;
var userpasswd;
const welcomemessage = document.querySelector(".welcomemgs");
const HIDDENCLASS = "hidden";

//user정보확인
username = localStorage.getItem("username");
if (username === null) {
  loginform.classList.remove(HIDDENCLASS);
  welcomemessage.classList.add(HIDDENCLASS);
  loginbtn.addEventListener("click", handleLoginClick);
} else {
  printWelcomMessage(username);
}

//로그인 버튼을 누른 경우
function handleLoginClick(event) {
  event.preventDefault();
  username = userinputname.value;
  userpasswd = userinputpasswd.value;
  localStorage.setItem("username", username);
  printWelcomMessage(username);
}

//유저명과 환영인사 출력
function printWelcomMessage(username) {
  loginform.classList.add(HIDDENCLASS);
  welcomemessage.classList.remove(HIDDENCLASS);
  welcomemessage.textContent = `Hello ${username}!`;
}
