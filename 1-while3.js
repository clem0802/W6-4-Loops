/*---------------------------*/ 
var moreComments = true;
while (moreComments === true) {
 moreComments = false; //
 console.log("New comment:");
 console.log("Maria: That website looks great!");
}
// New comment:
// Maria: That website looks great!


/*---------------------------*/ 
var moreComments = true;
while (moreComments === true) {
 console.log("New comment:");
 console.log("Maria: That website looks great!");
 moreComments = false; //
}
// New comment:
// Maria: That website looks great!
// false


/*---------------------------*/ 
var isOn = true;
while (isOn === true) {
 console.log("Before: " + isOn);
 isOn = false;
 console.log("After: " + isOn);
}
// Before: true
// After: false


/*---------------------------*/
var counter = 1;
while (counter <= 3) {
 console.log("Before: " + counter);
 counter++;
 console.log("After: " + counter);
}
// Before: 1
// After: 2
// Before: 2
// After: 3
// Before: 3
// After: 4


/*---------------------------*/
var number = 1;
while (number < 5) {
 number++;
console.log(number);
} 
// 2  3  4  5
/*---------------------------*/
var number = 1;
while (number < 5) {
 number++;
} 
console.log(number);
// 5
/*---------------------------*/
var speed = 0;
while (speed < 100) {
 speed += 10;
}
console.log(speed);
// 100