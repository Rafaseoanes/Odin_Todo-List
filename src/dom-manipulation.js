function manipulateDom(data) {
  // const content = document.getElementById("content");
  const projectList = document.getElementById("projectList");
  const newProjectBtn = document.getElementById("newProjectBtn");
  const userInputDialog = document.getElementById("modal");

  //

  // window.addEventListener("load", () => {
  for (let item of data) {
    // console.dir(data[0])

    const project = document.createElement("li");
    project.innerText = item.title;
    projectList.append(project);
    //   }
    // });

    project.addEventListener("click", () => {
      showTodos(item);
    });

    newProjectBtn.addEventListener("click", () => {
      userInputDialog.showModal();
    });
  }
  // console.log(data[0])
}

function showTodos(item) {
  const todoList = document.getElementById("todoList");
  const projectTitle = document.getElementById("projectTitle");
  const projectDescription = document.getElementById("projectDescription");

  // console.log(item)
  todoList.innerHTML = "";
  item.todos.forEach((element) => {
    const todoItem = document.createElement("li");
    todoItem.classList.add("todoItem");
    todoItem.innerText = element.todoTitle;

    todoList.append(todoItem);
  });
  projectTitle.innerText = item.title;
  projectDescription.innerText = item.description;
}

export { manipulateDom, showTodos };
