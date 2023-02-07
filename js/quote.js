const quotes = [
  {
    quote: "하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다.",
    author: "사무엘존슨",
  },
  {
    quote: "행복한 삶을 살기위해 필요한 것은 거의 없다.",
    author: "마르쿠스 아우렐리우스 안토니우스",
  },
  {
    quote:
      "절대 어제를 후회하지 마라.<br>인생은 오늘의 나 안에 있고 내일은 스스로 만드는 것이다.",
    author: " L.론허바드",
  },
  {
    quote:
      "너무 소심하고 까다롭게 자신의 행동을 고민하지 말라.<br>모든 인생은 실험이다.<br>더많이 실험할수록 더나아진다",
    author: "랄프 왈도 에머슨",
  },
  {
    quote: "한번의 실패와 영원한 실패를 혼동하지 마라.",
    author: "F.스콧 핏제랄드",
  },
  {
    quote:
      " 네 믿음은 네 생각이 된다.<br>네 생각은 네 말이 된다.<br>네 말은 네 행동이 된다 네 행동은 네 습관이된다.<br>네 습관은 네 가치가 된다.<br>네 가치는 네 운명이 된다",
    author: "간디",
  },
  {
    quote:
      "절대 포기하지 말라.<br>당신이 되고 싶은 무언가가 있다면, 그에 대해 자부심을 가져라.<br>당신 자신에게 기회를 주어라.<br>스스로가 형편없다고 생각하지 말라.<br>그래봐야 아무 것도 얻을 것이 없다.<br>목표를 높이 세워라, 인생은 그렇게 살아야 한다.",
    author: "마이크 맥라렌",
  },
  {
    quote: "1퍼센트의 가능성, 그것이 나의 길이다.",
    author: "나폴레옹",
  },
  {
    quote:
      "사람이 여행을 하는 것은 도착하기 위해서가 아니라 여행하기 위해서이다.",
    author: "괴테",
  },
  {
    quote:
      "행복의 한 쪽 문이 닫히면 다른 쪽 문이 열린다.<br>그러나 흔히 우리는 닫혀진 문을 오랫동안 보기 때문에 우리를 위해 열려 있는 문을 보지 못한다.",
    author: "헬렌 켈러",
  },
  {
    quote:
      "성공해서 만족하는 것은 아니다.<br>만족하고 있었기 때문에 성공한 것이다.",
    author: "알랭",
  },
];

const quotebox = document.querySelector(".quote div:nth-child(1)");
const personbox = document.querySelector(".quote div:nth-child(2)");

printRandomQuote();
setInterval(printRandomQuote, 10000);

function printRandomQuote() {
  const quotenumber = parseInt(Math.random() * quotes.length);

  quotebox.innerHTML = `" ${quotes[quotenumber].quote} "`;
  personbox.innerHTML = `- ${quotes[quotenumber].author} -`;
}
