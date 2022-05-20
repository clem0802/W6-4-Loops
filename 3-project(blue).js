/*-----------------------------*/
var line = "";
var counter = 1;
console.log("*");

while (counter <= 5) {
 line += "~";
 counter++;
 console.log(line);
}
// *
// ~
// ~~
// ~~~
// ~~~~
// ~~~~~


/*-----------------------------*/
console.log("#");
var line = "";
for (var i=1; i<=5; i++) {
  line += "~";
  console.log(line);
}
// #
// ~
// ~~
// ~~~
// ~~~~
// ~~~~~


/*-----------------------------*/
https://dev.getmimo.com/project?track=50&course=1752&chapter=11632&lesson=6

var line = "";
var counter = 1;

console.log("*")

while (counter <= 10) {
 line += "~";
 counter++;
 console.log(line);
}

// *
// ~
// ~~
// ~~~
// ~~~~
// ~~~~~
// ~~~~~~
// ~~~~~~~
// ~~~~~~~~
// ~~~~~~~~~
// ~~~~~~~~~~ 


/*-----------------------------*/
var line = "";
var counter = 1;
console.log("Binary Pyramid")
while (counter <= 10) {
  line += "01";
  counter++;
  console.log(line);
}
// Binary Pyramid
// 01
// 0101
// 010101
// 01010101
// 0101010101
// 010101010101
// 01010101010101
// 0101010101010101
// 010101010101010101
// 01010101010101010101 


/*-----------------------------*/
for (var i=0; i<3; i++) {
    console.log("Comment: " + i);
  }
  // Comment: 0
  // Comment: 1
  // Comment: 2


/*-----------------------------*/
for (var i=7; i>0; i-=2) {
    console.log("Curves: " + i);
  }
// Curves: 7
// Curves: 5
// Curves: 3
// Curves: 1


/*-----------------------------*/
console.log("#");
var line = "";
for (var i=1; i<=5; i++) {
  line += "~";
  console.log(line);
}
// #
// ~
// ~~
// ~~~
// ~~~~
// ~~~~~


/*-----------------------------*/
var at = ["@@@@@@@", "XXX", "@@@@@", "XXX",
  "@@@", "XXX", "@", "XXX"];

for (var i = 0; i < at.length; i += 2) {
  console.log(at[i]);
}
// @@@@@@@
// @@@@@
// @@@
// @


/*-----------------------------*/
for (var i=7; i>0; i-=2) {
  console.log(i);
}
// 7
// 5
// 3
// 1 

/*-----------------------------*/
var line = ""; // increment example
for (var i=1; i<=5; i++) {
  line += "@";
  console.log(line);
}
// @ 
// @@ 
// @@@ 
// @@@@ 
// @@@@@ 

/*-----------------------------*/
var line = "@@@@@@@"; // TESTING
for (var i=7; i>0; i--) {
  console.log(line[i]);
}
// @ 
// @ 
// @ 
// @ 
// @ 
// @ 

/*-----------------------------*/
var line = "@@@@@@@"; // TESTING
for (var i=7; i>0; i--) {
  console.log(i * line.length);
}
// 49
// 42
// 35
// 28
// 21
// 14
// 7



/*-----------------------------*/ (from Thomas Sattlecker)
https://dev.getmimo.com/project?track=50&course=1752&chapter=11632&lesson=8 (bonus question)
function printChars(char, times) {
  let chars = "";
  for (let i = 0; i < times; i++) {
    chars += char;
  }
  return chars;
}

let lineNumbers = 10;
while (lineNumbers >= 0) {
  console.log(printChars("~", lineNumbers));
  lineNumbers--;
}

~~~~~~~~~~
~~~~~~~~~
~~~~~~~~
~~~~~~~
~~~~~~
~~~~~
~~~~
~~~
~~
~

