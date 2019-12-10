var planner = [];

//set up planner
function setUp() {

    if (localStorage.getItem("planner")) {
        planner = JSON.parse(localStorage.getItem("planner"));
        for (var i = 0; i < planner.length; i++) {
            var hour = planner[i].hour;
            var task = planner[i].task;
            $("#" + hour)[0].children[1].children[0].value = task;
        }
        // console.log($("#" + hour)[0].children[1].children[0].value);
    }

    var now = moment();
    // console.log(now);
    // console.log(moment().format("dddd" + ", " + "MMMM Do"));
    $("#date").text(moment().format("dddd" + ", " + "MMMM Do"))

    // console.log(moment().format("H"));
    var currentHour = parseInt(moment().format("H"))
    console.log(currentHour);
    for (var i = 9; i < 18; i++) {
        console.log($("#" + i).children(".col-10"));
        if (i < currentHour) {
            console.log("past");
            $("#" + i).children(".col-10").children().css("background-color", "rgb(208, 208, 225)");
        } else if (i === currentHour) {
            console.log("present");
            $("#" + i).children(".col-10").children().css("background-color", "rgb(255, 204, 204)");
        } else {
            console.log("future");
            $("#" + i).children(".col-10").children().css("background-color", "rgb(204, 255, 204)");
        }
    }



}


//Get current date and update it to the date element
function updateDate() {
    //$("#date");
}

//Save task upon clicking save button
$(".btn").on("click", function () {
    //look for hour index 
    var id = parseInt($(this).parent().parent()[0].id);
    var input = $(this).parent()[0].previousElementSibling.childNodes[1].value;

    if (localStorage.getItem("planner")) {
        planner = JSON.parse(localStorage.getItem("planner"));
        var index = -1;
        // console.log(planner);
        // console.log("Planner length: " + planner.length);
        // console.log("Panner hour at 0: " +  planner[0].hour);
        // console.log("ID of this: " +id);
        for (var i = 0; i < planner.length; i++) {

            if (planner[i].hour === id) {
                index = i;
                console.log("Index: " + index);
            }
        }
        // console.log("Index: " + index);
        if (index === -1) {
            var task = {
                hour: id,
                task: input
            }
            planner.push(task);
        }
        else {
            planner[index].task = input;
        }

    } else {
        var task = {
            hour: id,
            task: input
        }
        planner.push(task);
    }
    localStorage.setItem("planner", JSON.stringify(planner));
});

setUp();