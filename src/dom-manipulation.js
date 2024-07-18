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

    newProjectBtn.addEventListener("click", () => {
      userInputDialog.showModal();
    });
  }
}

export { manipulateDom };
