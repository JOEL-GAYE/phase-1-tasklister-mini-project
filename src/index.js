document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById("create-task-form");
  const taskInput = document.getElementById("new-task-description");
  const taskPriority = document.getElementById("priority");
  const taskList = document.getElementById("tasks");

  
  taskForm.addEventListener("submit", (dont) => {
    dont.preventDefault();

    // Capture the task description and priority from the input fields
    const taskDescription = taskInput.value;
    const priority = taskPriority.value;

    
    if (taskDescription === "") {
      alert("Please input any information.");
      return;
    }

    // Create a new list item (li) for the task
    const taskItem = document.createElement("li");
    taskItem.textContent = `${taskDescription} : ${priority}`; // Display only the task description, without the priority
    
   
    if (priority === "High") {
      taskItem.style.color = "red";
    } else if (priority === "Medium") {
      taskItem.style.color = "blue";
    } else {
      taskItem.style.color = "green";
    }
  
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);

    
    deleteButton.addEventListener("click", () => {
      taskItem.remove();
    });

    taskForm.reset();
  });
});

