var timeBlocks = $('#time-block')
var dayDisplay = $('#currentDay')

var dateDisplay = function(){
    dayDisplay.text(moment().format('MMMM Do YYYY'))
}


var pageDisplay = function(){
    var hourCount = 9;
    for (i = 0; i < hourCount; i++) {
        var currentHour = moment().set('hour', 15 + i)

        var hourBlockDiv = $("<div class='hour-block col-12 col-lg row justify-content-between'>")

        var timeCard = $("<p class='col-1 pt-2'>").text(moment(currentHour).format("ha"))

        timeCard.appendTo(hourBlockDiv)

        var taskfield = $("<div class='task-field col-10'>")

        console.log(i)
        console.log(parseInt(moment(currentHour).format("H")));
        console.log(parseInt(moment().format("H")))

        if (parseInt(moment(currentHour).format("H")) === parseInt(moment().format("H"))) {
            taskfield.addClass("present")
        }

        else if (parseInt(moment(currentHour).format("H")) > parseInt(moment().format("H"))){
            taskfield.addClass("future")
        }

        else {
            taskfield.addClass("past")
        }

        taskfield.appendTo(hourBlockDiv)

        var saveButton = $("<button class='saveBtn col-1' type='button'>Save</i></button>")

        saveButton.appendTo(hourBlockDiv)



        hourBlockDiv.appendTo(timeBlocks)

    }



}


dateDisplay()

pageDisplay()