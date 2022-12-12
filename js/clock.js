const clock = document.querySelector(".clock div");
//먼저 시간을 출력해주지않으면 00:00:00이 뜨고 1초후에 시간이 업데이트된다.
getClock();
setInterval(getClock, 1000);

function getClock() {
  const time = new Date();
  const hour = String(time.getHours()).padStart(2, "0");
  const min = String(time.getMinutes()).padStart(2, "0");
  const sec = String(time.getSeconds()).padStart(2, "0");
  clock.innerHTML = `${hour}:${min}:${sec}`;
}
