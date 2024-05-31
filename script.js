let input = document.querySelector("#input");
let list = document.querySelector("#list");
let addBtn = document.querySelector("#add");
let alert = document.querySelector(".alert");

addBtn.addEventListener("click", () => {
  todoApp();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    todoApp();
  }
});
function todoApp() {
  let value = input.value;

  if (value === "") {
    alert.style.top = "50px";
    alert.style.rotate = "0deg";
  } else {
    let li = document.createElement("li");
    li.textContent = value;
    list.appendChild(li);
    list.style.display = "flex";
    let icon = document.createElement("i");
    icon.classList.add("fa-solid", "fa-xmark");
    li.appendChild(icon);
    let check = document.createElement("input");
    check.type = "checkbox";
    li.appendChild(check);
    icon.addEventListener("click", () => {
      list.removeChild(li);

      if (list.children.length === 0) {
        list.style.display = "none";
      }
    });

    check.addEventListener("change", () => {
      if (check.checked) {
        li.style.textDecoration = "line-through";
      } else {
        li.style.textDecoration = "none";
      }
    });
  }

  input.value = "";

  setTimeout(() => {
    alert.style.top = "-50px";
    alert.style.rotate = "180deg";
  }, 1300);
}