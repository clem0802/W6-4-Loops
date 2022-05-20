// self-assigning is such a powerful programming concept
// because it lets us track data that changes over time
// to build larger programs and websites, we repeat lines of code using a "WHILE" loop
// to stop a loop, we start by creating a variable outside of the loop
var keepGoing = true;
while (keepGoing === true) {
 console.log("and again");
 keepGoing = false; // => this will STOP the loop
}

/*---------------------------*/
// this loop will run and never stop repeating its code block
var isLoading = false;
while (true) {
 console.log("Loading Game");
}


/*---------------------------*/
var keepPlaying = true;
while (keepPlaying === true) {
 console.log("Now Playing: Yummy");
 keepPlaying = false;               
}

/*---------------------------*/
// to control the times a WHILE loop repeats, we start with a variable set to a number
// we call this variable a COUNTER variable
// then we use a comparison in the condition to compare the counter variable to a number
// inside the code block, we make the condition return FALSE - try with counter++
var counter = 1; // when the loop starts
while (counter < 4) {
    console.log(counter);
    counter++; // 1 2 3
}

/*---------------------------*/ 
var counter = 5; // when the loop starts
while (counter < 10) {
    counter++; // 6 7 8 9 10
    console.log(counter);
}

var counter = 5; // when the loop starts
while (counter < 10) {
    console.log(counter);
    counter++; // 5 6 7 8 9
}

/*---------------------------*/                  
var listNumber = 1;
while (listNumber < 11) {
    console.log(listNumber + ". Camera");
    listNumber++; // 1 2 3 4 5 6 7 8 9 10
   }


