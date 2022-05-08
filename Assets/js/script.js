var timeBlocks = $('#time-block')
var dayDisplay = $('#currentDay')

var dateDisplay = function(){
    dayDisplay.text(moment().format('MMMM Do YYYY'))
}


var pageDisplay = function(){
    var hourCount = 9;
    for (i = 0; i < hourCount; i++) {
        var currentHour = moment().set('hour', 9 + i)

        var hourBlockDiv = $("<div class='hour-block col-12 col-lg row justify-content-between'>")

        var timeCard = $("<p class='col-1 pt-2'>").text(moment(currentHour).format("ha"))

        timeCard.appendTo(hourBlockDiv)

        var taskField = $("<div class='task-field col-10'>")
        .attr("data-index", i)


        if (parseInt(moment(currentHour).format("H")) === parseInt(moment().format("H"))) {
            taskField.addClass("present")
        }

        else if (parseInt(moment(currentHour).format("H")) > parseInt(moment().format("H"))){
            taskField.addClass("future")
        }

        else {
            taskField.addClass("past")
        }

        taskField.appendTo(hourBlockDiv)

        var saveButton = $("<button class='saveBtn col-1' type='button'>Save</i></button>")

        saveButton.appendTo(hourBlockDiv)

        hourBlockDiv.appendTo(timeBlocks)

    }

    getTasks()
}

var getTasks = function(){
    var firstTask = localStorage.getItem("task1")
    var secondTask = localStorage.getItem("task2")
    var thirdTask = localStorage.getItem("task3")
    var fourthTask = localStorage.getItem("task4")
    var fifthTask = localStorage.getItem("task5")
    var sixthTask = localStorage.getItem("task6")
    var seventhTask = localStorage.getItem("task7")
    var eighthTask = localStorage.getItem("task8")
    var ninthTask = localStorage.getItem("task9")

$('[data-index="0"]')
    .text(firstTask)


$('[data-index="1"]')
    .text(secondTask)


$('[data-index="2"]')
    .text(thirdTask)


$('[data-index="3"]')
    .text(fourthTask)


$('[data-index="4"]')
    .text(fifthTask)


$('[data-index="5"]')
    .text(sixthTask)


$('[data-index="6"]')
    .text(seventhTask)


$('[data-index="7"]')
    .text(eighthTask)


$('[data-index="8"]')
    .text(ninthTask)


}

timeBlocks.on("click", ".task-field", function(){
    $(this).text("")

    var text = $(this)
    .text()
    .trim();

    var textInput = $("<textarea>")
    .addClass("task-input")
    .val(text);

    textInput.appendTo($(this));
    
    textInput.trigger("focus");
})

timeBlocks.on("blur", ".task-input", function(){
    var text = $(".task-input")
    .val()
    .trim()


    $(".task-input").closest($(".task-field")).text(text)

    $(".task-input").remove()

})


timeBlocks.on("click", ".saveBtn", function(){
    var firstTaskField = $('[data-index="0"]')
    .text()
    .trim()

    var secondTaskField = $('[data-index="1"]')
    .text()
    .trim()

    var thirdTaskField = $('[data-index="2"]')
    .text()
    .trim()

    var fourthTaskField = $('[data-index="3"]')
    .text()
    .trim()

    var fifthTaskField = $('[data-index="4"]')
    .text()
    .trim()

    var sixthTaskField = $('[data-index="5"]')
    .text()
    .trim()

    var seventhTaskField = $('[data-index="6"]')
    .text()
    .trim()

    var eighthTaskField = $('[data-index="7"]')
    .text()
    .trim()

    var ninthTaskField = $('[data-index="8"]')
    .text()
    .trim()

    localStorage.setItem("task1", firstTaskField);
    localStorage.setItem("task2", secondTaskField);
    localStorage.setItem("task3", thirdTaskField);
    localStorage.setItem("task4", fourthTaskField);
    localStorage.setItem("task5", fifthTaskField);
    localStorage.setItem("task6", sixthTaskField);
    localStorage.setItem("task7", seventhTaskField);
    localStorage.setItem("task8", eighthTaskField);
    localStorage.setItem("task9", ninthTaskField);

})


dateDisplay()

pageDisplay()
