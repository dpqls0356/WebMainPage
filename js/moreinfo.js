const moreInfoBtn = document.querySelector(".more-info-btn");
const mainPart = document.querySelector(".main-part");
const moreInfo = document.querySelector(".more-info");
const moreInfoCloserBtn = document.querySelector(".more-info-close-btn");

// 더보기 창 열기
function handlerMoreInfo(event) {
  event.preventDefault();
  moreInfo.classList.remove("hidden");
  moreInfoBtn.classList.add("hidden");
}
moreInfoBtn.addEventListener("click", handlerMoreInfo);

// 더보기 창 닫기
function closerMoreInfo(event) {
  event.preventDefault();
  moreInfo.classList.add("hidden");
  moreInfoBtn.classList.remove("hidden");
}
moreInfoCloserBtn.addEventListener("click", closerMoreInfo);
