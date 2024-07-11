import Todo from "./todo-constructor";

const content = document.getElementById("content");
// const body = document.querySelector("body")

window.addEventListener("load", () => {
  content.innerText = "hey dom";
});

const createTodo = function (
  title,
  description = "",
  dueDate = "",
  priority = "",
  project = ""
) {
  if (title == undefined) {
    alert("Your task musk have a title");
  } else {
    const todo = new Todo(title, description, dueDate, priority, project);
    localStorage.setItem( todo.title, JSON.stringify(todo))
    // console.log(localStorage); // get the whole storage
    console.dir(JSON.parse(localStorage.getItem(todo.title))); //get one item
  }
};

createTodo("hey", "this is 1");
// createTodo("hey2", "this is 2");
// createTodo("hey3", "this is 3");
