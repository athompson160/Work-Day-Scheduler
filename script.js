var currentDate = moment().format('dddd') + " " + moment().format("DD MMM YYYY");
var currentHour = moment().format('h:mm:ss a');
var nineAm = $("#9am");
var tenAm = $("#10am");
var elevenAm = $("#11am");
var twelvePm = $("#12pm");
var onePm = $("#1pm");
var twoPm = $("#2pm");
var threePm = $("#3pm");
var fourPm = $("#4pm");
var fivePm = $("#5pm");
var sixPm = $("#6pm");
var sevenPm = $("#7pm");

var hour = moment().hours();
var userInput;
var hourSpan;