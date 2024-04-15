const inputbox = document.getElementById("input-box")
const listcontainer = document.getElementById("list-container")

function addTask() {
    if (inputbox.value === '') {
        alert("You must write something!")
    }
    else {
        let li = document.createElement("li")
        li.innerHTML = inputbox.value
        listcontainer.appendChild(li)
        let span = document.createElement("span")  //dynamically creating span tag for cross icon
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }
    inputbox.value = ""
     saveData()        //saves the updated tasks
}


listcontainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked")
        saveData()
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove()
        saveData()
    }
}, false)

function saveData(){
    localStorage.setItem("data",listcontainer.innerHTML)
}

function showTask(){
    listcontainer.innerHTML = localStorage.getItem("data")   //it will give all content stored in browser with name of data
}

showTask()






//document.addEventListener('DOMContentLoaded', function() {
//     const taskForm = document.getElementById('task-form');
//     const taskInput = document.getElementById('task-input');
//     const taskList = document.getElementById('task-list');
//     const filterOption = document.getElementById('filter-option');

//     // Add Task
//     taskForm.addEventListener('submit', function(e) {
//         e.preventDefault();
//         addTask(taskInput.value);
//         taskInput.value = '';
//     });

//     function addTask(taskContent) {
//         const taskItem = document.createElement('li');
//         taskItem.className = 'task';
//         taskItem.innerHTML = `
//             <span>${taskContent}</span>
//             <button class="complete-btn">Complete</button>
//             <button class="delete-btn">Delete</button>
//         `;
//         taskList.appendChild(taskItem);
//     }

//     // Mark Task as Completed
//     taskList.addEventListener('click', function(e) {
//         const taskItem = e.target.closest('li');
//         if (e.target.classList.contains('complete-btn')) {
//             taskItem.classList.toggle('completed');
//         } else if (e.target.classList.contains('delete-btn')) {
//             taskItem.remove();
//         }
//     });

//     // Filter Tasks
//     filterOption.addEventListener('change', function() {
//         const filterValue = filterOption.value;
//         const tasks = taskList.querySelectorAll('.task');
//         tasks.forEach(function(task) {
//             switch (filterValue) {
//                 case 'all':
//                     task.style.display = 'block';
//                     break;
//                 case 'completed':
//                     task.classList.contains('completed') ? task.style.display = 'block' : task.style.display = 'none';
//                     break;
//                 case 'incomplete':
//                     task.classList.contains('completed') ? task.style.display = 'none' : task.style.display = 'block';
//                     break;
//             }
//         });
//     });
// });

// // document.addEventListener('DOMContentLoaded', function() {
// //     const taskForm = document.getElementById('task-form');
// //     const taskInput = document.getElementById('task-input');
// //     const taskList = document.getElementById('task-list');

// //     taskForm.addEventListener('submit', function(e) {
// //         e.preventDefault();
// //         addTask(taskInput.value);
// //         taskInput.value = '';
// //     });

// //     function addTask(taskContent) {
// //         const taskItem = document.createElement('li');
// //         taskItem.className = 'task';
// //         taskItem.textContent = taskContent;
// //         taskItem.addEventListener('click', toggleTask);
// //         taskList.appendChild(taskItem);
// //     }

// //     function toggleTask() {
// //         this.classList.toggle('completed');
// //     }
// // });
