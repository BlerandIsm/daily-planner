$(document).ready(function(){
    //adding moment.js library for our time format
    var currentTime = moment().format("MMMM Do YYYY");
    var displayDate = document.getElementById("currentDay");
    displayDate.innerHTML = currentTime;
    var curentHour = moment().format("HH");

    //give button functionality to clear data from storage 


//creating a local storage to save the values entered by user
$(".saveBtn").click(function (event) {
    event.preventDefault();
    var value = $(this).siblings(".time-block").val();
    var time = $(this).parent().attr("id").split("-")[1];
    localStorage.setItem(time, value);
});

//get items from locas storage and display in slot
$("#hour-09 .time-block").val(localStorage.getItem("09"));
$("#hour-10 .time-block").val(localStorage.getItem("10"));
$("#hour-11 .time-block").val(localStorage.getItem("11"));
$("#hour-12 .time-block").val(localStorage.getItem("12"));
$("#hour-13 .time-block").val(localStorage.getItem("13"));
$("#hour-14 .time-block").val(localStorage.getItem("14"));
$("#hour-15 .time-block").val(localStorage.getItem("15"));
$("#hour-16 .time-block").val(localStorage.getItem("16"));
$("#hour-17 .time-block").val(localStorage.getItem("17"));
});