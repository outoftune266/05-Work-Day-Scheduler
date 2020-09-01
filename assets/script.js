let today = moment().format("dddd[,] MMMM do");
let hours = $("[data-hour]");
let now = moment().hour();
let each;

 console.log($("[data-hour]")[0]);

$("#currentDay").text(today);

for (var i = 0; i < 24; i++) {
    each = $("[data-hour]")[i];
    if ($("[data-hour]")[i].getAttribute("data-hour") < now) {
        each.addClass("past");
    };
    // } if ($([data-hour=i]) = hour) {
    //     $([data-hour=i]).attr("class", present)
    // } else {
    //     $('[data-hour="i"]').attr("class", future)
    // };
};

// $("textarea").each(function(index, value) {
//     console.log(`textarea${index}: ${this.data}`);
// })



// Event Listener for save buttons
//$(".saveBtn").click();
