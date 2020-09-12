var event;
var time;

$(document).ready(function() {

    //Display saved entries upon page load
    displayEntries ();
    
    //display current date in jumbotron
    $("#currentDay").text("Today's Date: " + moment().format("MMM Do YY"))

    //background colors & current time

    var currentHour = moment().format("H");
    //console.log(currentHour);
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

    //Click functions for buttons to save input and time.
    $(".saveBtn").on("click", function() {
        time = $(this).parent().attr("id")
        event = $(this).parent().children("input").val()
        localStorage.setItem(time, event);
        localStorage.getItem(time);
        console.log(localStorage.getItem(time))
    })
    //renders local data
    function displayEntries() {
        
            $("#9").val(localStorage.getItem("9am"))
            $("#10").val(localStorage.getItem("10am"))
            $("#11").val(localStorage.getItem("11am"))
            $("#12").val(localStorage.getItem("12pm"))
            $("#13").val(localStorage.getItem("1pm"))
            $("#14").val(localStorage.getItem("2pm"))
            $("#15").val(localStorage.getItem("3pm"))
            $("#16").val(localStorage.getItem("4pm"))
            $("#17").val(localStorage.getItem("5pm"))
        
    }
})