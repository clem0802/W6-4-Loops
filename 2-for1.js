// 我也不知道
// using FOR loops, can rewrite the same program 
// making it easier for other programmers to understand
for () {
    // console.log(i);
}

/*---------------------------*/ (WHILE)
var counterA = 0;
while (counterA < 6) {
 console.log(counterA);
 counterA++; // 0 1 2 3 4 5
}

var counterB = 0;
while (counterB < 4) {
 console.log(counterB);
 counterB++; // 0 1 2 3
}


/*---------------------------*/ (FOR) upward
for (var i = 0; i < 6; i++) {
    console.log(i); // 0 1 2 3 4 5
}

for (var i = 0; i < 4; i++) {
    console.log(i); // 0 1 2 3
}


/*---------------------------*/ (FOR) upward
for (var i = 0; i < 4; i++) {
    console.log("May Jesus come");
   }
   console.log("Then we all go to Jesus' Kingdom, no more pain and sorrow");
// May Jesus come
// May Jesus come
// May Jesus come
// May Jesus come
// Then we all go to Jesus' Kingdom, no more pain and sorrow


/*---------------------------*/ (FOR) upward
for (var i = 1; i < 5; i++) {
    console.log("Round " + i);
   }
// Round 1
// Round 2
// Round 3
// Round 4


/*---------------------------*/
/*---------------------------*/ (FOR) downward
for (var i = 5; i > 0; i--) {
    console.log(i);
}
// 5
// 4
// 3
// 2
// 1


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


/*---------------------------*/
var lyric = "I wanna to be in your A";
for (var i = 0; i < 6; i++) {
 lyric += "a";
}
lyric += "rms";
console.log(lyric);
// I wanna to be in your Aaaaaaarms


/*---------------------------*/
var slide = 3;
for (var i = 1; i < slide; i++) {
 console.log(i + ") Jesus will come back really soon!!");
}
// 1) Jesus will come back really soon!!
// 2) Jesus will come back really soon!!