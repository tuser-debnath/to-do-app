const addTask = document.getElementById("add-task");
const taskInput = document.getElementById("task");
const allTask = document.getElementById("all-task");
const errorText = document.getElementById("error-text");

addTask.addEventListener("submit", function (e) {
  e.preventDefault();

  const taskText = taskInput.value;
  if (taskText) {
    errorText.innerHTML = "";
    taskInput.value = "";

    // Create Single Task Div
    const singleTaskDiv = document.createElement("div");
    singleTaskDiv.classList.add("single-task");

    // Create Input Feild
    const singleTaskInput = document.createElement("input");
    singleTaskInput.type = "text";
    singleTaskInput.value = taskText;
    singleTaskInput.setAttribute("readonly", "readonly");

    // Create Edit Button
    const editTask = document.createElement("button");
    editTask.classList.add("edit-task");
    editTask.innerText = "Edit";

    // Create Complete Button
    const completeTask = document.createElement("button");
    completeTask.classList.add("complete-task");
    completeTask.innerText = "Complete";

    // Create Delete Button
    const deleteTask = document.createElement("button");
    deleteTask.classList.add("delete-task");
    deleteTask.innerText = "Delete";

    singleTaskDiv.appendChild(singleTaskInput);
    singleTaskDiv.appendChild(editTask);
    singleTaskDiv.appendChild(completeTask);
    singleTaskDiv.appendChild(deleteTask);

    // Add New Task
    allTask.appendChild(singleTaskDiv);
    console.log(allTask);

    // Edit Button Function
    editTask.addEventListener("click", function (e) {
      if (editTask.innerHTML == "Edit") {
        editTask.innerText = "Save";
        singleTaskInput.removeAttribute("readonly");
        singleTaskInput.focus();
      } else {
        editTask.innerText = "Edit";
        singleTaskInput.setAttribute("readonly", "readonly");
      }
    });

    // Complete Button Function
    completeTask.addEventListener("click", function (e) {
      if (completeTask.innerHTML == "Complete") {
        completeTask.innerText = "Completed";
        singleTaskDiv.classList.add("task-completed");
      }
    });

    // Delete Button Function
    deleteTask.addEventListener("click", function (e) {
      if (deleteTask.innerHTML == "Delete") {
        allTask.removeChild(singleTaskDiv);
      }
    });
  } else {
    errorText.innerHTML = "<p>Please write task name</p>";
  }
});
