# Day Planner

  ![Languages](https://img.shields.io/github/languages/count/kqarlos/day-planner)
  ![Top Language](https://img.shields.io/github/languages/top/kqarlos/day-planner)
  ![Code Size](https://img.shields.io/github/languages/code-size/kqarlos/day-planner)
  ![Repo Size](https://img.shields.io/github/repo-size/kqarlos/day-planner)
  ![Total Lines](https://img.shields.io/tokei/lines/github/kqarlos/day-planner)
  ![Last Commit](https://img.shields.io/github/last-commit/kqarlos/day-planner)
  ![Followers](https://img.shields.io/github/followers/kqarlos?style=social)


## Description

Poor time management can result in missed meetings and deadlines or create the appearance of unprofessionalism. A daily planner allows employees to see their day at a glance, schedule time effectively, and improve productivity. The day planner saves information to local memory and loads it every time the site is called.

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
    * [Screenshots](#screenshots)
    * [Snippets](#snippets)
* [Credits](#credits)
* [License](#license)


## Installation

This application is compatible with the most commonly used web browsers.

* [See Live Site](https://kqarlos.github.io/day-planner)

### Screenshots

1. Site 

![Site](assets/images/site-image.png)

1. Local Memory 

![Local Memory](assets/images/local-memory.png)

1. Color-Coding

![Color-coding](assets/images/color-coding.png)


### Snippets

1. Set up of timed elements: This functions set ups elements suchs as the current date displayed. This is done through the Moment.js API. The date format is specified in the _format()_ method so that we get it in the form of _Day, Month DateNumber_. The _currentHour_ is retrieved and used to check against all the elements whose _id_ represents their time. During this comparison we can check wether each element's time is from the past, present or future. The _background-color_ is updated accordingly using JQuery's _.css()_ function.

```javascript

function setUpTimedElements() {
    var now = moment();
    // console.log(now);
    // console.log(moment().format("dddd" + ", " + "MMMM Do"));
    $("#date").text(moment().format("dddd" + ", " + "MMMM Do"))
    // console.log(moment().format("H"));
    var currentHour = parseInt(moment().format("H"));
    //i = id and hour form elements
    for (var i = 9; i < 18; i++) {
        console.log($("#" + i).children(".col-10"));
        if (i < currentHour) {
            $("#" + i).children(".col-10").children().css("background-color", "rgb(208, 208, 225)");
        } else if (i === currentHour) {
            $("#" + i).children(".col-10").children().css("background-color", "rgb(255, 204, 204)");
        } else {
            $("#" + i).children(".col-10").children().css("background-color", "rgb(204, 255, 204)");
        }
    }
}

```

2. Save button event listener: This event is placed into all the buttons of the document. Through event delegation and the use of _$(this)_ we can get the button that was pressed toguether with the id/hour and input. To save the information we first check if there is already a planner sotred. If there is we check if there is an object with the id/hour that we are trying to save. If there is we just update the _task_ key. If there isn't a planner or an object with the hour/id we create one and push it to the planner array. We then update the local storage.

```javascript

$(".btn").on("click", function () {
    //look for id/hour and input of element.     console.log("ID of this: " +id);
    var id = parseInt($(this).parent().parent()[0].id);
    var input = $(this).parent()[0].previousElementSibling.childNodes[1].value;
    //check if planner item is set
    if (localStorage.getItem("planner")) {
        //if planner is set get it and check if we need to create a new task or update an existing one; console.log(planner);   
        planner = JSON.parse(localStorage.getItem("planner"));
        var index = -1;
        for (var i = 0; i < planner.length; i++) {
            //if id is found in planner then we need to update task
            if (planner[i].hour === id) {
                index = i;
            }
        }
        //if index is -1 id was not found and we need to create a new task to push
        //if index is found just update task on planner variable;    console.log("Index: " + index);
        if (index === -1) {
            addTask(id, input);
        } else {
            planner[index].task = input;
        }
    } else {
        addTask(id, input);
    }
    //update planner iten on local storage
    localStorage.setItem("planner", JSON.stringify(planner));
});
    
```

## Credits 

### Author

- Carlos Toledo: [portfolio](https://professional-portfolio2020.herokuapp.com/)
- Github: [kqarlos](https://www.github.com/kqarlos)
- LinkedIn: [carlos-toledo415](https://www.linkedin.com/in/carlos-toledo415/)

### Built With

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [Bootstrap](https://getbootstrap.com/)
* [Javascript](https://www.javascript.com/)
* [Moment.js](https://momentjs.com/docs/)

## License

![GitHub](https://img.shields.io/github/license/kqarlos/day-planner)