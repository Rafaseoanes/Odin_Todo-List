function manipulateDom() {
  const content = document.getElementById("content");


  window.addEventListener("load", () => {
    content.innerText = "hey dom from manipulate dom";
  });
}

export { manipulateDom };
