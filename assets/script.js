let today = moment().format("dddd[,] MMMM do");
let hours = $("[data-hour]");
let now = moment().hour();
let tasks = [];
let tArea;

// Event Listener for save buttons
//$(".saveBtn").click(saveTask);

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

// getTask();
// function getTask() {
//     var storedTasks = JSON.parse(localStorage.getItem("tasks"));

//     if (storedScores !== null) {
//         tasks = storedTasks;
//     }
// };

//function will save task when save button is clicked
// function saveTask(event) {
//     event.preventDefault();

//     localStorage.setItem();
// };

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


