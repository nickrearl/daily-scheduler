var timeBlocks = $('#time-block')
var dayDisplay = $('#currentDay')




var addTimeBlocks = function(){
    var hourCount = 9;
    for (i = 0; i < hourCount; i++) {
        var currentHour = moment().set('hour', 9 + i)
        $("<div class='col-12 col-lg border border-primary p-4'>")
        .text(moment(currentHour).format("ha"))
        .appendTo(timeBlocks)
    }
}

var initializePage = function (){
    dayDisplay.text(moment().format('MMMM Do YYYY, h:mm a'))

    addTimeBlocks()
}

initializePage()