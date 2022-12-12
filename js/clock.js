const clock = document.querySelector(".clock");

// interval(함수,시간) - 주기적인 시간마다 반복적으로 어떤 일이 일어나는 것
// setTimeout(함수, 시간) - 특정시간 후에 함수가 한번만 실행됨

function getTime() {
  const date = new Date();
  //   get값이 number여서 string으로 변경 후 padStart사용
  const hour = String(date.getHours()).padStart(2, "0");
  const min = String(date.getMinutes()).padStart(2, "0");
  const sec = String(date.getSeconds()).padStart(2, "0");
  clock.innerHTML = `${hour}:${min}:${sec}`;
}
// getTime이 없이 실행시키면 00:00:00이 출력되고 1초후에 시간이 출력된다.
// 그래서 1초전엔 getTime을 통해 시간을 출력해줘야함.
getTime();
setInterval(getTime, 1000);

//padStart(길이,공백에 채울 문자);
// ex. 1.padStart(2,"0") - > 01
