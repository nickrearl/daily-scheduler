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

}


dateDisplay()

pageDisplay()