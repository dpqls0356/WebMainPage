const todoForm = document.querySelector(".todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector(".todo-list");
var TODOKEY;

const toDo = document.querySelector(".todo");

// 로그인한 유저의 정보를 담음
let toDos = [];
function setOwnerAndToDo(username) {
  TODOKEY = username;
  const savedTodo = localStorage.getItem(TODOKEY);
  console.log(savedTodo);
  if (savedTodo !== null) {
    const parseTodos = JSON.parse(savedTodo);
    parseTodos.forEach(paintTodo);
    //   로컬저장소에서 이전 저장값들 가져오기
    toDos = parseTodos;
  } else {
  }
  toDo.classList.remove(HIDDEN_CLASS);
}
// 할일 저장
function savedTodos() {
  // 저장시 배열을 단순 텍스트가 아닌 String으로 저장하고싶을 때 - JSON.stringify()해주기
  // 안해줄경우 a,b,c로 배열 저장이 되지만 해줄 경우 "["a","b","c"]"로 저장된다.
  ////////////// 왜 하는가 -> 정리하기!  ///////////////////

  localStorage.setItem(TODOKEY, JSON.stringify(toDos));
  // JSON.stringify([1,2,3,4]) -> "[1,2,3,4]"
  // JSON.parse("[1,2,3,4]") -> [1,2,3,4]로 배열로 출력!
}

// 할일 추가
todoForm.addEventListener("submit", onTodoInputHandler);
function onTodoInputHandler(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  // id가 있는 이유  : 버튼의 번호라고 생각하귀~
  const newTodoObject = { class: "white-heart", id: Date.now(), text: newTodo };
  todoInput.value = "";
  toDos.push(newTodoObject);
  console.log(newTodoObject);
  savedTodos();
  paintTodo(newTodoObject);
}

// 할일 출력
function paintTodo(newTodoObject) {
  const list = document.createElement("li");
  list.id = newTodoObject.id;
  const box = document.createElement("div");
  const checkboxLabel = document.createElement("label");
  const span = document.createElement("span");
  const btn = document.createElement("button");
  //
  box.classList.add("checkbox-span");
  //
  if (newTodoObject.class == "white-heart") {
    checkboxLabel.innerHTML = "🤍";
  } else {
    checkboxLabel.innerHTML = "💛";
  }

  // label이 클릭될때마다 함수 실행
  checkboxLabel.addEventListener("click", onClickCheckBoxHandler);
  //
  btn.innerHTML = "ⅹ";
  //
  span.innerHTML = newTodoObject.text;
  //  버튼에 삭제 이벤트 걸어주기
  btn.addEventListener("click", onListRemoveHandler);
  //  append()는 어떤 요소든 추가가되지만 appendChild()는 객체만 가능!

  box.appendChild(checkboxLabel);
  box.appendChild(span);
  list.appendChild(box);
  list.appendChild(btn);
  todoList.append(list);
}

// 할일 삭제 버튼
function onListRemoveHandler(event) {
  event.preventDefault();
  //   어떤 버튼인지 알기위해서 envet의 타겟(눌린애)을 가져와 parent를 확인한다.
  //   innerText시 타겟부모의 소스코드가 출력된다.
  const dellist = event.target.parentElement;
  //    삭제할 리스트의 아이디값을 가져와 지역저장소에서 삭제하기 parseInt안해주면 id값이 string이라 비교 안되는 현상 발생
  const dellistid = parseInt(dellist.id);
  //   remove() - 요소 삭제
  dellist.remove();
  /////////////흠 왜 toDo.id의 값은 number이고 dellist의 id는 String일까?///////////////
  toDos = toDos.filter((toDo) => toDo.id !== dellistid);
  savedTodos();
}

// 체크박스 색상 변경
// li의 아이디를 가져와  todolist 배열의 id와 대조하여 일치하는 배열의 class명을 바꿔 체크박스 변경
function onClickCheckBoxHandler(event) {
  const checkbox = event.target;
  const checkboxid = event.target.parentElement.parentElement.id;
  for (var i = 0; i < toDos.length; i++) {
    console.log(i);
    if (parseInt(toDos[i].id) === parseInt(checkboxid)) {
      if (toDos[i].class === "white-heart") {
        toDos[i].class = "yellow-heart";
        checkbox.innerHTML = "💛";
      } else {
        toDos[i].class = "white-heart";
        checkbox.innerHTML = "🤍";
      }
    }
  }
  savedTodos(toDos);
}
