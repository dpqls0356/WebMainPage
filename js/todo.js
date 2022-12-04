const todolistSaveBtn = document.querySelector(".save-todo");
const userInputTodo = document.querySelector(".input-todo input");
const todolist = document.querySelector(".todo-list");

//투두 입력 버튼 이벤트
todolistSaveBtn.addEventListener("click", handlerTodolistSaveBtn);
function handlerTodolistSaveBtn(event) {
  event.preventDefault();
  const newTodo = userInputTodo.value;
  userInputTodo.value = "";
  paintTodo(newTodo);
}

//추가한 투두 보이도록하기
function paintTodo(todoElement) {
  const todoElementLi = document.createElement("li");
  const todoElementDiv = document.createElement("div");
  const todoElementBtn = document.createElement("button");
  todoElementDiv.innerHTML = `${todoElement}`;
  todoElementBtn.innerHTML = "❤️";
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
  deleteLi.remove();
}
