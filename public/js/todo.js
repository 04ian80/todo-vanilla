function paint() {
  const main = document.getElementById("main");
  const h1 = document.createElement("h1");
  const content = document.createElement("div");
  const addButton = document.createElement("button");

  h1.innerText = "Today's Todos";
  content.id = "content";
  addButton.id = "button_add";
  addButton.innerText = "Add Todos";

  main.appendChild(h1);
  main.appendChild(content);
  content.appendChild(addButton);
}
// console.log("main");

paint();
