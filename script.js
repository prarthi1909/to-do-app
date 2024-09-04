function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const tasksContainer = document.getElementById("tasks");
        const taskElement = document.createElement("div");
        taskElement.className = "task";
        taskElement.innerHTML = `
            <span>${taskText}</span>
            <button onclick="removeTask(this)">Remove</button>
        `;
        tasksContainer.appendChild(taskElement);
        taskInput.value = "";
    }
}

function removeTask(button) {
    const taskElement = button.parentNode;
    taskElement.remove();
}