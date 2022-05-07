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

        var timeCard = $("<p class='col-4'>").text(moment(currentHour).format("ha"))

        timeCard.appendTo(hourBlockDiv)

        var taskfield = $("<p class='task-field'>")

        taskfield.appendTo(hourBlockDiv)

        var saveButton = $("<button class='saveBtn col-1' type='button'>Save</i></button>")

        saveButton.appendTo(hourBlockDiv)


        hourBlockDiv.appendTo(timeBlocks)

    }

}


dateDisplay()

pageDisplay()