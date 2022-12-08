const todolistSaveBtn = document.querySelector(".save-todo");
const userInputTodo = document.querySelector(".input-todo input");
const todolist = document.querySelector(".todo-list");
let toDos = [];

//새로고침시 저장된 투두 보이도록 함
const savedTodos = localStorage.getItem("todos");
if (savedTodos !== null) {
  console.log("access");
  loadTodolist(savedTodos);
} else {
  alert("can't find todo!");
}
function loadTodolist(savedTodos) {
  const parseTodos = JSON.parse(savedTodos);
  parseTodos.forEach(paintTodo);
  toDos = parseTodos;
}

//투두 입력 버튼 이벤트
todolistSaveBtn.addEventListener("click", handlerTodolistSaveBtn);
function handlerTodolistSaveBtn(event) {
  event.preventDefault();
  const newTodo = userInputTodo.value;
  const newTodoObject = { todo: newTodo, id: Date.now() };
  userInputTodo.value = "";
  paintTodo(newTodoObject);
  //data 저장
  toDos.push(newTodoObject);
  saveTodolist(toDos);
}

//추가한 투두 보이도록하기
function paintTodo(todoElement) {
  const todoElementLi = document.createElement("li");
  const todoElementDiv = document.createElement("div");
  const todoElementBtn = document.createElement("button");
  todoElementDiv.innerHTML = `${todoElement.todo}`;
  todoElementBtn.innerHTML = "❤️";
  todoElementLi.id = todoElement.id;
  todoElementBtn.classList.add("delete-btn");
  //여기서 삭제에 대한 리스너를 추가해줘야함
  todoElementBtn.addEventListener("click", deleteTodo);
  todoElementLi.appendChild(todoElementDiv);
  todoElementLi.appendChild(todoElementBtn);
  todolist.appendChild(todoElementLi);
}

//투두 삭제
function deleteTodo(event) {
  const deleteLi = event.target.parentElement;
  const deleteTodoId = event.target.parentElement.id;
  deleteLi.remove();
  // toDos = returnReviseTodos(deleteTodoId);
  toDos = toDos.filter((item) => item.id !== parseInt(deleteTodoId));
  console.log(toDos);
  saveTodolist(toDos);
}

// function returnReviseTodos(id) {
//   var returnArray = [];
//   for (var i = 0; i < toDos.length; i++) {
//     if (parseInt(id) !== toDos[i].id) {
//       returnArray.push(toDos[i]);
//     }
//   }
//   return returnArray;
// }

//Todo localStorage에 저장
function saveTodolist(saveToDos) {
  localStorage.setItem("todos", JSON.stringify(saveToDos));
}
