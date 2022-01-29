$(document).ready(function(){
    //adding moment.js library for our time format
    var currentTime = moment().format("MMMM Do YYYY");
    var displayDate = document.getElementById("currentDay");
    displayDate.innerHTML = currentTime;
    var curentHour = moment().format("HH");

    //give button functionality to clear data from storage 

});

//creating a local storage to save the values entered by user
$(".saveBtn").click(function (event) {
    event.preventDefault();
    var value = $(this).siblings(".time-block").val();
    var time = $(this).parent().attr("id").split("-")[1];
    localStorage.setItem(time, value);
});