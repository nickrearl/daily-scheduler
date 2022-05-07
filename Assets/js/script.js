var timeBlocks = $('#time-block')


var hourCount = 9;

var addTimeBlocks = function(){
    for (i = 0; i < hourCount; i++) {
        var currentHour = moment().set('hour', 9 + i)
        $("<div class='col-12 col-lg border border-primary p-4'>")
        .text(moment(currentHour).format("ha"))
        .appendTo(timeBlocks)
        console.log(currentHour);
    }
}

addTimeBlocks()