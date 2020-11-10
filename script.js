$(document).ready(function(){
    //display time on top of page
    var todaysDate = moment().format("MMMM Do YYYY");
    $("#currentDay").text(todaysDate);

    //save button event to save input
    $(".saveBtn").on("click", function(){
        var value = $(this).siblings(".textSiblings").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, value);
    });

    //getItem for saved input
    $("#time-9 .textSiblings").val(localStorage.getItem("time-9"));
    $("#time-10 .textSiblings").val(localStorage.getItem("time-10"));
    $("#time-11 .textSiblings").val(localStorage.getItem("time-11"));
    $("#time-12 .textSiblings").val(localStorage.getItem("time-12"));
    $("#time-13 .textSiblings").val(localStorage.getItem("time-13"));
    $("#time-14 .textSiblings").val(localStorage.getItem("time-14"));
    $("#time-15 .textSiblings").val(localStorage.getItem("time-15"));
    $("#time-16 .textSiblings").val(localStorage.getItem("time-16"));
    $("#time-17 .textSiblings").val(localStorage.getItem("time-17"));

    //variables and functions to change color based off of time
    var currentTime = new Date().getHours();

    console.log(currentTime);

    function checkTime(){
        $(".timeblock").each(function(){
            var time = parseInt($(this).attr("id").split("-")[1]);
            console.log(time);
            if(time < currentTime){
                $(this).addClass("past");
            }
            else if(time === currentTime){
                $(this).addClass("present");
            }
            else if(time > currentTime){
                $(this).addClass("future");
            }
        });
    }
checkTime();
});