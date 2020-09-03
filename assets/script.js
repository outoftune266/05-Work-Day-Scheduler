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

$("textarea").each(function (index) {
    tArea = this
    if (parseInt(tArea.dataset.hour) < now) {
        $(tArea).addClass("past");
    } if (parseInt(tArea.dataset.hour) === now) {
        $(tArea).addClass("present");
    } if (parseInt(tArea.dataset.hour) > now) {
        $(tArea).addClass("future");
    };
});

getTask();
function getTask() {
    var storedTasks = JSON.parse(localStorage.getItem("tasks"));

    if (storedTasks !== null) {
        tasks = storedTasks;
    }
};

console.log(buttons);

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

// this code is from another project to copy over
// function saveScore(event) {
//     event.preventDefault();
//     playerInitials = initialsBox.value;
//     playerInitials = playerInitials.toUpperCase();

//     addEntry(totalScore, playerInitials);


//     localStorage.setItem("leaderboardEntries", JSON.stringify(leaderboardEntries));
//     generateTable();
//     leaderboardInput.className = "hidden";
// };


