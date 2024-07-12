import Todo from "./todo-constructor";
import "./style.css";
import { manipulateDom } from "./dom-manipulation";

const homeProject = { title: "🏠 Home", description: "Main home project" };
const homeProject2 = { title: "🏠 Home2", description: "Main home project" };
const homeProject3 = { title: "🏠 Home3", description: "Main home project" };
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

const data = [homeProject, homeProject2, homeProject3]
manipulateDom(data);
createTodo("hey", "this is 1");
// createTodo("hey2", "this is 2");
// createTodo("hey3", "this is 3");
