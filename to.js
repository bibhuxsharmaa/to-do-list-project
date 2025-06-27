let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Show tasks on page load
window.addEventListener("DOMContentLoaded", () => {
    tasks.forEach(task => addTaskToDOM(task));
});

function addTask() {
    const description = document.getElementById("description").value;
    const category = document.getElementById("category").value;
    const dueDate = document.getElementById("dueDate").value;

    if (!description || !dueDate) {
        alert("Please enter the task and due date");
        return;
    }

    const task = {
        description,
        category,
        dueDate
    };

    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));  // save to localStorage
    
    addTaskToDOM(task);

    // Clear inputs
    document.getElementById("description").value = "";
    document.getElementById("dueDate").value = "";
}

function addTaskToDOM(task) {
    const li = document.createElement("li");
    li.textContent = `${task.description} (${task.category}) - Due: ${task.dueDate}`;
    document.getElementById("taskList").appendChild(li);
}

function deleteTasks() {
    localStorage.removeItem("tasks");
    tasks = [];
    document.getElementById("taskList").innerHTML = "";
}

let p =fetch("https://api.escuelajs.co/api/v1/products")
p.then((value1)=>{
    console.log("kin",value1)
    return value1.json()
}).then((value2)=>{
    console.log(value2)
})

// function addTask() {
//       const description = document.getElementById("description").value.trim();
//       const category = document.getElementById("category").value;
//       const dueDate = document.getElementById("dueDate").value;

//       if (!description || !dueDate) {
//         alert("Please enter a task and select a due date.");
//         return;
//       }

//       const taskList = document.getElementById("taskList");

//       const li = document.createElement("li");
//       li.className = "task";
//       li.innerHTML = `
//         <input type="checkbox">
//         <span>${description} - ${category} - ${dueDate}</span>
//       `;

//       taskList.appendChild(li);

//       // Clear inputs
//       document.getElementById("description").value = "";
//       document.getElementById("category").value = "Personal";
//       document.getElementById("dueDate").value = "";
//     }

//     function deleteTasks() {
//       const listItems = document.querySelectorAll("#taskList li");
//       listItems.forEach(item => {
//         const checkbox = item.querySelector("input[type='checkbox']");
//         if (checkbox.checked) {
//           item.remove();
//         }
//       });
//     }
