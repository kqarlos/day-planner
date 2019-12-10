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
        console.log($("#" + hour));
        console.log($("#" + hour)[0]);

        console.log($("#" + hour)[0].children);
        console.log($("#" + hour)[0].children[1]);
        console.log($("#" + hour)[0].children[1].children);
        console.log($("#" + hour)[0].children[1].children[0]);
        console.log($("#" + hour)[0].children[1].children[0].value);




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