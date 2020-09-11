var event
var time

$(document).ready(function() {
    
    //display current date in jumbotron
    $("#currentDay").text("Today's Date: " + moment().format("MMM Do YY"))


    //background colors & current time

    var currentHour = moment().format("H");
    console.log(currentHour);
        for(var i = 0; i <= 17; i++) {
            var possTime = i
            //console.log(possTime)
            if (parseInt(currentHour) === possTime) {
                $("#" + possTime).addClass("present")
            }
            else if (parseInt(currentHour) < possTime) {
                $("#" + possTime).addClass("future")
            }
            else {
                $("#" + possTime).addClass("past")
            }
        }
        /////^^^ might have to add parseIn to else if/else

    //on Click save button, save user input from corresponding....class? or parent/child?
    $(".saveBtn").on("click", function() {
        time = $(this).parent().attr("id")
        event = $(this).parent().children("input").val()
        //console.log(event);
        //console.log(time);
        
        
    })



    































})