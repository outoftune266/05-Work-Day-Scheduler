let today = moment().format("dddd[,] MMMM do");
let hours = $("textarea");
let now = moment().hour();
let tasks = [];
let buttons = $(".saveBtn");
let tArea;
let taskTime;
let taskContent;

// Event Listener for save buttons
$(".saveBtn").click(saveTask);

//sets and displays current date
$("#currentDay").text(today);

$("textarea").each(function () {
    tArea = this;
    if (parseInt(tArea.dataset.hour) < now) {
        $(tArea).addClass("past");
    } if (parseInt(tArea.dataset.hour) === now) {
        $(tArea).addClass("present");
    } if (parseInt(tArea.dataset.hour) > now) {
        $(tArea).addClass("future");
    };
});

//retrieves stored tasks from local storage
getTask();
function getTask() {
    var storedTasks = JSON.parse(localStorage.getItem("tasks"));

    if (storedTasks !== null) {
        tasks = storedTasks;
    }
};

//displays saved tasks
displayTasks();
function displayTasks() {
    for (var i = 0; i < tasks.length; i++) {
        let find = tasks[i].taskTime;
        let content = tasks[i].taskContent
        $("textarea").each(function() {
            tArea = this;
            console.log(this.id);
            if (tArea.id === find) {
                tArea.innerHTML = content;
            };
        });
    };
};

// will save task when save button is clicked
function saveTask(event) {
    event.preventDefault();
    taskTime = event.target.dataset.hour;
    console.log(taskTime);
    taskContent = $(event.target.previousElementSibling).val();
    console.log(taskContent);

     addEntry(taskTime, taskContent);
     localStorage.setItem("tasks", JSON.stringify(tasks));
};

function addEntry(taskTime, taskContent) {
    tasks.push({ taskTime, taskContent });
    console.log(tasks)
};


