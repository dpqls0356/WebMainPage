// const backgroundbox = document.querySelector(".background");
// const backgroundimg = document.createElement("img");
// const prebackgroundimg = document.querySelector(".prebackground img")
// var preindex=1;
// var backgroundimgnumber
// const imgcount = 5;
// setInterval(changeBackgroudImg, 10000);
// function changeBackgroudImg() {
//   while(true){
//     backgroundimgnumber = parseInt(Math.random() * imgcount + 1);
//     if(preindex==backgroundimgnumber)continue;
//     else {
//       preindex=backgroundimgnumber;
//       break;
//     }
//   }
//   backgroundimg.src = `/img/background${backgroundimgnumber}.jpg`;
//   prebackgroundimg.classList.remove("remove-prebackground");
//   void prebackgroundimg.offsetWidth;
//   prebackgroundimg.classList.add("remove-prebackground");
//   backgroundimg.style.animation="showBackground 2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both";
//   backgroundbox.appendChild(backgroundimg);
//   setTimeout(() => {
//     prebackgroundimg.src = `/img/background${backgroundimgnumber}.jpg`;
//   }, 4000);
// }


// background를 미리 하나 깔아놓고 일정시간마다 background를 추가해주기
