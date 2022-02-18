// var month = d.getMonth()+1;
// var day = d.getDate();

// var minutes = d.getMinutes();

// var output = 
// (month < 10 ? '0' : '') + month + '-' +
// (day < 10 ? '0' : '') + day + '-' + 
// d.getFullYear() + " // " + 
// d.getHours() + ":" + 
// d.getMinutes();

// Current Day display
$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));



// Check present/past/future hours with changing color style
var d = new Date();
var hours = d.getHours();
function checkPresent() {

    for (time = 6; time < 23; time ++) {
        var timeblock = $("#" + time);
        console.log($("#" + time))

        if(time == hours) {
            timeblock.addClass("present")
        } else if (time < hours) {
            timeblock.addClass("past")
        } else {
            timeblock.addClass("future")
        }
        $("#" + time).val(localStorage.getItem("" + time));

    }
}
checkPresent();

// save Button will save input to toDo List

function toDoEvent(event) {
    var userInput = $(this).siblings("input").val().trim();
    var hourId = $(this).siblings("input").attr("id");
 
    localStorage.setItem(hourId, userInput);
}

$(".saveBtn").on("click", toDoEvent) 


// trash button function will erase text inputed and local storage data in specific selected hour block
function trashEvent(event) {
    
    var hourId = $(this).siblings("input").attr("id");
    
    localStorage.removeItem(hourId);
    $(this).siblings("input[type='text']").val(" ");

}

$(".trashBtn").on("click", trashEvent) 