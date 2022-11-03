const todoForm = document.querySelector(".todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector(".todo-list");
const TODOKEY = "toDolist";
let toDos = [];
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
  const newTodoObject = { id: Date.now(), text: newTodo };
  todoInput.value = "";
  toDos.push(newTodoObject);
  savedTodos();
  paintTodo(newTodoObject);
}

// 할일 출력
function paintTodo(newTodoObject) {
  const list = document.createElement("li");
  list.id = newTodoObject.id;
  const span = document.createElement("span");
  const btn = document.createElement("button");
  btn.innerHTML = "❤️";
  span.innerHTML = newTodoObject.text;
  //  버튼에 삭제 이벤트 걸어주기
  btn.addEventListener("click", onListRemoveHandler);
  //  append()는 어떤 요소든 추가가되지만 appendChild()는 객체만 가능!
  list.appendChild(span);
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

// 페이지 로딩시 로컬저장소에서 투두리스트 가져오기
const savedTodo = localStorage.getItem(TODOKEY);
if (savedTodo !== null) {
  const parseTodos = JSON.parse(savedTodo);
  parseTodos.forEach(paintTodo);
  //   로컬저장소에서 이전 저장값들 가져오기
  toDos = parseTodos;
}
// 화살표함수 (argument) => 함수내용

//   충격소식 배열에서 값을 삭제하는 것이 아닌 삭제할 값을 제외하고 새로운 배열을 만들어낸다.
/////////////////filter를 이용할때 fuction의 매개변수 수를 늘릴 수 없는 지 찾아보기//////////////////
function exceptFilter(dellistid) {
  if (toDos.id !== dellistid) {
    return true;
  } else {
    return false;
  }
}
