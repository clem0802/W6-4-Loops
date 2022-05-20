/*---------------------------*/
var title = "Numbers:";
var line = "";
for (var i = 5; i > 0; i--) {
 line += i;
}
console.log(title)
console.log(line);
// Numbers: 
// 54321


/*---------------------------*/ (exo PURPLE) "Challenges: Loops"
// https://dev.getmimo.com/challenge?track=50&course=1698&chapter=11430&lesson=1
// First, implement the for loop parameters such that the loop iterates from 1 to 10.
// Next, implement the loop body such that the code multiplies product by i and saves the result in product.
var product = 1;
for (var i = 1; i <= 10; i++) {
 product *= i;
}
console.log(product); 
//  (product(1) x 1) x (product(1) x 2) x (product(1) x 3) x (product(1) x 4) x (product(1) x 5) x (product(1) x6) x (product(1) x 7) x (product(1) x 8) x (product(1) x 9) x (product(1) x 10) 
//  = 1x2x3x4x5x6x7x8x9x10
//  = 3628800

/*---------------------------*/
// First, implement a for loop that counts from 5 down to 1.
// Next, implement the for loop body in a similar manner to the previous exercise: 
// product should be multiplied by i at each step and the product saved to product.
// Finally, console.log the resulting product.
var product = 1;
for (var i = 5; i > 1; i--) {
  product *= i;
}
console.log(product);
//  5*4*3*2 = 120
//  120


/*---------------------------*/
/*---------------------------*/
// Complete the for loop conditions using the .length property. 
// Each loop should iterate from 0 to the end of the respective list. 
// The first loop should correspond to the day1attendees and the second to the day2attendees.

var day1Attendees = ["John", "Anna", "Frank", "George"];
var day2Attendees = ["Bill", "Sarah"];

for (var i = 0; i < 4; i++) {
 console.log(day1Attendees[i]);
}
for (var j = 0; j < 2; j++) {
 console.log(day2Attendees[j]);
}
//  John
//  Anna
//  Frank
//  George
//  Bill
//  Sarah

/*---------------------------*/
//  https://dev.getmimo.com/challenge?track=50&course=1698&chapter=11435&lesson=1
var day1Attendees = ["John", "Anna", "Frank", "George"];
var day2Attendees = ["Bill", "Sarah"];

for (var i = 0; i < day1Attendees.length; i++) { //
 console.log(day1Attendees[i]);
}
for (var j = 0; j < day2Attendees.length; j++) { //
 console.log(day2Attendees[j]);
}
//  John
//  Anna
//  Frank
//  George
//  Bill
//  Sarah


/*---------------------------*/
//  https://dev.getmimo.com/challenge?track=50&course=1698&chapter=11436&lesson=1
// A train schedule API separately provides the arrival cities and times and 
// we need to combine this information for display on the transit agency's website. 
// Implement a for loop that iterates through each item in the array and console.log the city 
// followed by a semicolon and its arrival time.

// => First, write a for loop that iterates from 0 to the end of the cities array.
// => Then, at each iteration, console.log each city followed by a colon and its arrival time.
var cities = ["Washington", "New York", "Boston"];
var arrival_times = ["9:14 PM", "12:27 AM", "2:35 AM"];

for (var i = 0; i < cities.length; i++) {
  console.log(cities[i] + ": " + arrival_times[i]);
}
//  Washington: 9:14 PM
//  New York: 12:27 AM
//  Boston: 2.35 AM


/*---------------------------*/
//  https://dev.getmimo.com/challenge?track=50&course=1698&chapter=11433&lesson=1
// We've extracted attendee data from a calendar invitation and we need a clean list of names, 
// without any of their C-Suite positions. Write a for loop that iterates through the list 
// and only console.logs the attendee names.

// First, implement a for loop that iterates all even numbers from 0 to the end of the meetingAttendees list.
// Next, implement the for loop body such that it console.logs each meetingAttendee.
var meetingAttendees = ["Diane Moll", "CEO", "Stanley Winstead", "CFO",
  "Herta Pickett", "CFO", "Lynn Hanby", "COO"];

for (var i = 0; i < meetingAttendees.length; i++) {
  if (i % 2 === 0) {
    console.log(meetingAttendees[i]);
  }
}

// (OR another way to code):

var meetingAttendees = ["Diane Moll", "CEO", "Stanley Winstead", "CFO",
  "Herta Pickett", "CFO", "Lynn Hanby", "COO"];

for (var i = 0; i < meetingAttendees.length; i += 2) {
    console.log(meetingAttendees[i]);
}

// Diane Moll
// Stanley Winstead
// Herta Pickett
// Lynn Hanby

// => I raised the question at 5:07 pm and succeeded at 5:55 pm, so for the 48 minutes spent just for the 3-letter word "var", 48/3 = 16, each single letter had cost me 16 minutes to get the whole thing right, quite expensive though, this "var" keyword...


/*--------------------------------*/
/*--------------------------------*/
//  https://dev.getmimo.com/challenge?track=50&course=1698&chapter=11432&lesson=1
// Complete the nested for loop parameters to iterate through the temperature data 
// and console.log each week's average temperature.

// 1) Make the first loop iterate through temperature_data's elements: each week's temperature data. 
//    Name your iterator variable i.
// 2) Make the second loop will iterate through the data points within each sub-array, 
//    each time adding the data point to the weekly sum. Name your iterator variable j.

var temperature_data = [
    [60.2, 61.2, 63.4, 64.8, 65.1, 63.2, 62.9],
    [62.5, 63.8, 63.4, 64.6, 65.8, 64.9, 65.0],
    [63.4, 64.5, 65.2, 64.8, 65.1, 64.9, 66.2],
    [66.3, 66.8, 66.4, 66.8, 67.8, 67.9, 68.2]
  ];

  for (var i = 0; i < temperature_data.length; i++) { //
    var length = temperature_data[i].length;
    var weeklySum = 0;
    for (var j = 0; j < length; j++) { //
      weeklySum += temperature_data[i][j];
    }
    console.log("Week " + i + " Average Temperature: " + (weeklySum / 7));
  }

// Week 0 Average Temperature: 62.971428571428575
// Week 1 Average Temperature: 64.28571428571429
// Week 2 Average Temperature: 64.87142857142857
// Week 3 Average Temperature: 67.17142857142856

