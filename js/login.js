const loginform = document.querySelector(".login-form");
const userinputname = document.querySelector(".login-form .input-name");
const userinputpasswd = document.querySelector(".login-form .input-passwd");
const loginbtn = document.querySelector(".login-form .login-button");
var username;
var userpasswd;
const welcomemessage = document.querySelector(".welcomemgs");
const HIDDENCLASS = "hidden";

//localStorage -> 브라우저에 값을 저장할 수 있는 api
//getItem() removeItem() setItem()

username = localStorage.getItem("username");
if (username === null) {
  loginform.classList.remove(HIDDENCLASS);
  welcomemessage.classList.add(HIDDENCLASS);
} else {
  printWelcomMessage();
}

// functionname() -> 이 코드를 보자마자 함수가 실행돰
//  functionname -> 브라우저가 이벤트 발생시에 함수 실행됨

//form 의 기본동작은 전송 -> submit
//link의 기본동작은 page 이동 ->click

//로그인 버튼을 누른 경우
loginbtn.addEventListener("click", handleLoginClick);
// 브라우저는 이벤트 발생 시 브라우저내에서 이벤트와 관련된 정보를 가져와 함수를 실행시킴 (첫번째 인자값으로 지정)
function handleLoginClick(event) {
  event.preventDefault();
  username = userinputname.value;
  userpasswd = userinputpasswd.value;
  printWelcomMessage();
}

function printWelcomMessage(username) {
  loginform.classList.add(HIDDENCLASS);
  welcomemessage.classList.remove(HIDDENCLASS);
  welcomemessage.textContent = `Hello ${username}!`;
}
