import Todo from "./todo-constructor";
import "./style.css";
import { manipulateDom, showTodos } from "./dom-manipulation";
import Project from "./project-constructor";

const Home = { title: "🏠 Home", description: "Main home project", todos: [{todoTitle: "test"}, {todoTitle: "test2"}] };
const Completed = {
  title: "✅ Completed",
  description: "Completed to-dos",
  todos: [{todoTitle: "test"}],
};
const Personal = {
  title: "👤 Personal",
  description: "Personal to-dos",
  todos: [{todoTitle: "test"}, {todoTitle: "test3"}],
};

const data = [];

const userInputDialog = document.getElementById("modal");
const newProjectBtn = document.getElementById("newProjectBtn");
const createBtn = document.getElementById("createBtn");

//form inputs:

const title = document.getElementById("title");
const description = document.getElementById("description");

newProjectBtn.addEventListener("click", () => {
  userInputDialog.showModal();
});

createBtn.addEventListener("click", () => {
  // console.log(title.value )
  // console.log(title.value )

  const project = new Project(title.value, description.value);
  data.push(project);
  console.log(project);
  manipulateDom(data);
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
    localStorage.setItem(todo.title, JSON.stringify(todo));
    // console.log(localStorage); // get the whole storage
    //console.dir(JSON.parse(localStorage.getItem(todo.title))); //get one item
  }
};

const basicData = [Home, Completed, Personal];
manipulateDom(basicData);
showTodos(basicData[0]);
createTodo("hey", "this is 1");
