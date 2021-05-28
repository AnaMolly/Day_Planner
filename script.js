var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"))

var textbox8 = $("#textbox8")
var textbox9 = $("#textbox9")
var textbox10 = $("#textbox10")
var textbox11 = $("#textbox11")
var textbox12 = $("#textbox12")
var textbox1 = $("#textbox1")
var textbox2 = $("#textbox2")
var textbox3 = $("#textbox3")
var textbox4 = $("#textbox4")
var textbox5 = $("#textbox5")

var saveButton=$(".savebutton")

timeColours()
function timeColours(currentTime){
 
    var currentTime = today.format("h:mm:ss a")

    if (moment(currentTime, "h:mm:ss a").isBefore(moment('08:00:00', "h:mm:ss a")) ){
        textbox8.css("background-color","rgb(191, 255, 191)")
    } else if (moment(currentTime, "h:mm:ss a").isBetween(moment('08:00:00', "h:mm:ss a"), moment('08:59:59 ', "h:mm:ss a")) ) {
        textbox8.css("background-color","lightpink")
    }
    else if (moment(currentTime, "h:mm:ss a").isAfter(moment('08:59:59 ', "h:mm:ss a")) ) {
        textbox8.css("background-color","lightgray")
    }


    if (moment(currentTime, "h:mm:ss a").isBefore(moment('09:00:00', "h:mm:ss a")) ){
        textbox9.css("background-color","rgb(191, 255, 191)")
    } else if (moment(currentTime, "h:mm:ss a").isBetween(moment('09:00:00', "h:mm:ss a"), moment('09:59:59 ', "h:mm:ss a")) ) {
        textbox9.css("background-color","lightpink")
    }
    else if (moment(currentTime, "h:mm:ss a").isAfter(moment('09:59:59 ', "h:mm:ss a")) ) {
        textbox9.css("background-color","lightgray")
    }


    if (moment(currentTime, "h:mm:ss a").isBefore(moment('10:00:00', "h:mm:ss a")) ){
        textbox10.css("background-color","rgb(191, 255, 191)")
    } else if (moment(currentTime, "h:mm:ss a").isBetween(moment('10:00:00', "h:mm:ss a"), moment('10:59:59 ', "h:mm:ss a")) ) {
        textbox10.css("background-color","lightpink")
    }
    else if (moment(currentTime, "h:mm:ss a").isAfter(moment('10:59:59 ', "h:mm:ss a")) ) {
        textbox10.css("background-color","lightgray")
    }


    if (moment(currentTime, "h:mm:ss a").isBefore(moment('11:00:00', "h:mm:ss a")) ){
        textbox11.css("background-color","rgb(191, 255, 191)")
    } else if (moment(currentTime, "h:mm:ss a").isBetween(moment('11:00:00', "h:mm:ss a"), moment('11:59:59 ', "h:mm:ss a")) ) {
        textbox11.css("background-color","lightpink")
    }
    else if (moment(currentTime, "h:mm:ss a").isAfter(moment('11:59:59 ', "h:mm:ss a")) ) {
        textbox11.css("background-color","lightgray")
    }


    if (moment(currentTime, "h:mm:ss a").isBefore(moment('12:00:00', "h:mm:ss a")) ){
        textbox12.css("background-color","rgb(191, 255, 191)")
    } else if (moment(currentTime, "h:mm:ss a").isBetween(moment('12:00:00', "h:mm:ss a"), moment('12:59:59 ', "h:mm:ss a")) ) {
        textbox12.css("background-color","lightpink")
    }
    else if (moment(currentTime, "h:mm:ss a").isAfter(moment('12:59:59 ', "h:mm:ss a")) ) {
        textbox12.css("background-color","lightgray")
    }

    if (moment(currentTime, "h:mm:ss a").isBefore(moment('13:00:00', "h:mm:ss a")) ){
        textbox1.css("background-color","rgb(191, 255, 191)")
    } else if (moment(currentTime, "h:mm:ss a").isBetween(moment('13:00:00', "h:mm:ss a"), moment('13:59:59 ', "h:mm:ss a")) ) {
        textbox1.css("background-color","lightpink")
    }
    else if (moment(currentTime, "h:mm:ss a").isAfter(moment('13:59:59 ', "h:mm:ss a")) ) {
        textbox1.css("background-color","lightgray")
    }


    if (moment(currentTime, "h:mm:ss a").isBefore(moment('14:00:00', "h:mm:ss a")) ){
        textbox2.css("background-color","rgb(191, 255, 191)")
    } else if (moment(currentTime, "h:mm:ss a").isBetween(moment('14:00:00', "h:mm:ss a"), moment('14:59:59 ', "h:mm:ss a")) ) {
        textbox2.css("background-color","lightpink")
    }
    else if (moment(currentTime, "h:mm:ss a").isAfter(moment('14:59:59 ', "h:mm:ss a")) ) {
        textbox2.css("background-color","lightgray")
    }

    if (moment(currentTime, "h:mm:ss a").isBefore(moment('15:00:00', "h:mm:ss a")) ){
        textbox3.css("background-color","rgb(191, 255, 191)")
    } else if (moment(currentTime, "h:mm:ss a").isBetween(moment('15:00:00', "h:mm:ss a"), moment('15:59:59 ', "h:mm:ss a")) ) {
        textbox3.css("background-color","lightpink")
    }
    else if (moment(currentTime, "h:mm:ss a").isAfter(moment('15:59:59 ', "h:mm:ss a")) ) {
        textbox3.css("background-color","lightgray")
    }


    if (moment(currentTime, "h:mm:ss a").isBefore(moment('16:00:00', "h:mm:ss a")) ){
        textbox4.css("background-color","rgb(191, 255, 191)")
    } else if (moment(currentTime, "h:mm:ss a").isBetween(moment('16:00:00', "h:mm:ss a"), moment('16:59:59 ', "h:mm:ss a")) ) {
        textbox4.css("background-color","lightpink")
    }
    else if (moment(currentTime, "h:mm:ss a").isAfter(moment('16:59:59 ', "h:mm:ss a")) ) {
        textbox4.css("background-color","lightgray")
    }


    if (moment(currentTime, "h:mm:ss a").isBefore(moment('17:00:00', "h:mm:ss a")) ){
        textbox5.css("background-color","rgb(191, 255, 191)")
    } else if (moment(currentTime, "h:mm:ss a").isBetween(moment('17:00:00', "h:mm:ss a"), moment('17:59:59 ', "h:mm:ss a")) ) {
        textbox5.css("background-color","lightpink")
    }
    else if (moment(currentTime, "h:mm:ss a").isAfter(moment('17:59:59 ', "h:mm:ss a")) ) {
        textbox5.css("background-color","lightgray")
    }

}


saveButton.on("click", saveInput)