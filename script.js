let boardTodo = document.querySelector(".board:nth-child(1)");
let boardInProgress = document.querySelector(".board:nth-child(2)");
let boardDone = document.querySelector(".board:nth-child(3)");
let card = document.querySelector(".card");
let modal = document.querySelector(".modal");
let buttonForm = document.querySelector(".form-button");

let openModal = function () {
    modal.style.display = "block";
}

let closeModal = function () {  
    modal.style.display = "none";
}

let tasks = [];

let addTask = function () {
    // create task object
    let task = {
        id: Math.random() * 1000,
        title: document.getElementById("title").value,
        description: document.getElementById("description").value,
        status: "todo"
    };

    // create card element
    let newCard = document.createElement("div");
    newCard.classList.add("card");

    // create title and description elements
    let newCardTitle = document.createElement("h3");
    let newCardDescription = document.createElement("p");

    // set title and description text
    newCardTitle.textContent = task.title;
    newCardTitle.classList.add("todo");
    newCardDescription.textContent = task.description;

    // create in progress button
    let inProgress = document.createElement("button");
    inProgress.textContent = "In Progress";
    inProgress.classList.add("status-in-progress");
    inProgress.addEventListener('click', function () {
        let parent = this.parentElement;
        task.status = "in-progress";
        newCardTitle.classList.add("inprog");
        newCardTitle.classList.remove("todo");
        newCardTitle.classList.remove("done");
        boardInProgress.appendChild(parent);
    });

    // create done button
    let done = document.createElement("button");
    done.textContent = "Done";
    done.classList.add("status-done");
    done.addEventListener('click', function () {
        let parent = this.parentElement;
        task.status = "done";
        newCardTitle.classList.add("done");
        newCardTitle.classList.remove("inprog");
        newCardTitle.classList.remove("todo");
        boardDone.appendChild(parent);
    });

    // create delete buttons
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete");
    deleteBtn.addEventListener('click', function () {
        let parent = this.parentElement;
        parent.remove();
        localStorage.removeItem(task.id);
    });

    // append title and description to card
    newCard.appendChild(newCardTitle);
    newCard.appendChild(newCardDescription);

    // append buttons to card
    newCard.appendChild(inProgress);
    newCard.appendChild(done);
    newCard.appendChild(deleteBtn);

    // append card to board
    boardTodo.appendChild(newCard);

    // save task to local storage
    let setToLocalStorage = JSON.stringify(task);
    localStorage.setItem(task.id, setToLocalStorage);

    // push task to tasks array
    tasks.push(task);
    console.log(tasks);
}

