var input = document.getElementById("input");
var ulContainer = document.getElementsByClassName("ulContainer")[0];
var deleteButton = document.getElementById("deleteButton");

window.addEventListener("load", (event) => {
  if (ulContainer.innerHTML === "") {
    deleteButton.style.visibility = "hidden";
  } else {
    deleteButton.style.visibility = "visible";
  }
});

function AddTask() {
  if (input.value === "") {
    alert("Please Add some task ...!!!");
  } else {
    var liElement = document.createElement("li");
    liElement.innerHTML = `<span class='unfinishedTask'>${input.value}</span><i class="fa-solid fa-trash-can"></i>`;
    ulContainer.appendChild(liElement);
  }
  input.value = "";
  deleteButton.style.visibility = "visible";
  saveData();
}

input.addEventListener("keypress", function (e) {
  if (e.key == "Enter") {
    if (input.value === "") {
      alert("Please Add some task ...!!!");
    } else {
      var liElement = document.createElement("li");
      liElement.innerHTML = `<span class='unfinishedTask'>${input.value}</span><i class="fa-solid fa-trash-can"></i>`;
      ulContainer.appendChild(liElement);
    }
    input.value = "";
    deleteButton.style.visibility = "visible";
    saveData();
  }
});

ulContainer.addEventListener("click", function (e) {
  if (e.target.tagName == "I") {
    e.target.parentElement.remove();
    saveData();
  } else if (e.target.tagName == "SPAN") {
    e.target.classList.toggle("finishedTask");
    saveData();
  }
});

function saveData() {
  localStorage.setItem("data", ulContainer.innerHTML);
}
function showTasks() {
  ulContainer.innerHTML = localStorage.getItem("data");
}
function dellAll() {
  localStorage.removeItem("data");
  showTasks();
  deleteButton.style.visibility = "hidden";
}

showTasks();

setInterval(() => {
  if (ulContainer.innerHTML === "") {
    deleteButton.style.visibility = "hidden";
  } else {
    deleteButton.style.visibility = "visible";
  }
}, 1000);
