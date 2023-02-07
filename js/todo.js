const todolistSaveBtn = document.querySelector(".save-todo");
const userInputTodo = document.querySelector(".input-todo input");
const todolist = document.querySelector(".todo-list");
let toDos = [];
const DONT = "♡";
const DO = "♥";
const todobox = document.querySelector(".todo");
//로그인시 todolist 가져오기 -> 투두가 하나라도 있는 경우
function loadUsersTodoList() {
  todobox.classList.remove(HIDDENCLASS);
  const savedTodos = localStorage.getItem(userid);
  if (savedTodos !== null) {
    const parseTodos = JSON.parse(savedTodos);
    parseTodos.forEach(paintTodo);
    toDos = parseTodos;
    console.log(toDos);
  }
}
//투두 입력 버튼 이벤트
todolistSaveBtn.addEventListener("click", handlerTodolistSaveBtn);
function handlerTodolistSaveBtn(event) {
  event.preventDefault();
  const newTodo = userInputTodo.value;
  const newTodoObject = { todo: newTodo, id: Date.now(), check: DONT };
  userInputTodo.value = "";
  paintTodo(newTodoObject);
  //data 저장
  toDos.push(newTodoObject);
  saveTodolist(toDos);
}

//추가한 투두 보이도록하기
function paintTodo(todoElement) {
  const todoElementCheckbox = document.createElement("input");
  todoElementCheckbox.type = "checkbox";
  todoElementCheckbox.id = "todo-check";
  todoElementCheckbox.classList.add("hidden");
  //
  const todoElementLabel = document.createElement("label");
  todoElementLabel.for = "todo-check";
  if (todoElement.check == DONT) {
    todoElementLabel.innerHTML = DONT;
  } else if (todoElement.check == DO) {
    todoElementLabel.innerHTML = DO;
  }

  todoElementLabel.addEventListener("click", handlerTodoCheck);
  //
  const todoElementLi = document.createElement("li");
  const todoElementDiv = document.createElement("div");
  const todoElementBtn = document.createElement("button");
  todoElementDiv.innerHTML = `${todoElement.todo}`;
  todoElementBtn.innerHTML = "X";
  todoElementLi.id = todoElement.id;
  todoElementBtn.classList.add("delete-btn");
  //여기서 삭제에 대한 리스너를 추가해줘야함
  todoElementBtn.addEventListener("click", deleteTodo);
  todoElementLi.appendChild(todoElementCheckbox);
  todoElementLi.appendChild(todoElementLabel);
  todoElementLi.appendChild(todoElementDiv);
  todoElementLi.appendChild(todoElementBtn);
  todolist.appendChild(todoElementLi);
}

function handlerTodoCheck(event) {
  const clickTodoID = event.target.parentElement.id;
  const cliickTodoCheckStatue = event.target;
  for (var i = 0; i < toDos.length; i++) {
    if (toDos[i].id == parseInt(clickTodoID)) {
      if (toDos[i].check == DONT) {
        toDos[i].check = DO;
        cliickTodoCheckStatue.innerHTML = DO;
        return;
      } else if (toDos[i].check == DO) {
        toDos[i].check = DONT;
        cliickTodoCheckStatue.innerHTML = DONT;
        return;
      }
    }
  }
  console.log(toDos);
  saveTodolist(toDos);
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

//Todo localStorage에 저장
function saveTodolist(saveToDos) {
  localStorage.setItem(userid, JSON.stringify(saveToDos));
}
