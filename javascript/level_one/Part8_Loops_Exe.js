/// PART 8 - LOOP EXERCISES
// Before we continue on with your project, let's practice some loops!
// You'll have just two problems, but you'll need to use each loop type we
// learned about to solve them!


///////////////////
//// PROBLEM 1 ///
/////////////////

// Use a For Loop to print (console.log()) out the word "hello" 5 times.
//
// Do this with a While Loop and a For Loop

// While Loop
console.log("file bounded")
var i = 0

console.log("While loop")
while(i<5){
  i = i +1;
  console.log("hello");
}
// For Loop
console.log("For loop")

var i = 0
for (var i = 0; i < 5; i++) {
  console.log("hello") 
}


/////////////////
// PROBLEM 2 ///
///////////////

// Use Loops to console.log() (print out) all the odd numbers from 1 to 25
// Do this using two methods, a while loop and a for loop

// METHOD ONE
// While Loop

console.log("+++ PROBLEM 2 WHILE LOOP +++")
var i = 0

while(i<26){
  i = i + 1
  if (i%2 != 0){
    console.log("*Odd number: "+i)
  }
}
// METHOD TWO
// For Loop
console.log("====Way # 1 stepsize manipulation====")
for (var i = 1; i < 26;  i = i +2) {
  console.log("**Odd number: "+i) 
}

console.log("====Modulo method====")
for (var i = 0; i < 26; i++) {
 if (i%2 != 0) {
    console.log("***Odd number: " +i)
 } 
}
