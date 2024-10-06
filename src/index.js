document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById("create-task-form");
  const taskInput = document.getElementById("new-task-description");
  const taskPriority = document.getElementById("priority");
  const taskList = document.getElementById("tasks");
  const taskDate = document.getElementById("date");
  const taskDuration = document.getElementById("duration");
  const user = document.getElementById("Permision request to");

  // Add event listener for form submission
  taskForm.addEventListener("submit", (event) => {
    event.preventDefault();

    // Capture the task description and priority from the input fields
    const taskDescription = taskInput.value;
    const priority = taskPriority.value;
    const date = taskDate.value;
    const duration = taskDuration.value;
    const name =user.value;

    // Check if task description is empty
    if (taskDescription === "") {
      alert("Please input task description.");
      return;
    }

    // Create a new list item (li) for the task
    const taskItem = document.createElement("li");
    taskItem.textContent = `${taskDescription}, (${name}),(${duration}), (${date}),(${priority})`;

    // Set the color of the task based on priority
    if (priority === "high") {
      taskItem.style.color = "red";
    } else if (priority === "medium") {
      taskItem.style.color = "blue";
    } else {
      taskItem.style.color = "green";
    }

    // Create Edit and Delete buttons
    const editButton = document.createElement("button");
    const deleteButton = document.createElement("button");
    editButton.textContent = "Edit";
    deleteButton.textContent = "X";

    // Append buttons to the task item
    taskItem.appendChild(editButton);
    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);

    // Add delete functionality
    deleteButton.addEventListener("click", () => {
      taskItem.remove();
    });

    // Add edit functionality
    editButton.addEventListener("click", () => {
      taskInput.value = taskDescription;
      taskPriority.value = priority;
      taskDate.value = date;
      taskDuration.value = duration;
      user.value = name;
      taskItem.remove();
    });

    // Reset form
    taskForm.reset();
  });

  // / Function to sort tasks based on their priorities
  

  

  // Event listeners for sorting tasks
  document.getElementById("sort-asc").addEventListener('click', () => {
    sortTasks(true);
  });
  document.getElementById("sort-desc").addEventListener('click', () => {
    sortTasks(false);
  });


    // Re-render sorted tasks
    taskList.innerHTML = "";
    taskItems.forEach(item => taskList.appendChild(item));
}
);