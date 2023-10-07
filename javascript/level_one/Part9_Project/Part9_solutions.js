// Solution to part 9 java script project

// We are going to check several codnitions and output them  as bools
// At the beginning all of them will be set to false
var nameCondition = false
var ageCondition = false
var heightCondition = false
var petCondition = false

// Now we need to take a user input
var firstName = prompt("What is your first name?")
var lastName = prompt("What is your last name?")
var age = prompt("What is your age?")
var height = prompt("What is your height?")
var pet = prompt("What is your pet name?")

alert("Thank you for information you have provided")

// Now users input will be processed
if (firstName[0] == lastName[0]) {
  nameCondition = true
}

if (age >20 && age<30){
 ageCondition = true
}

if (height >= 170){
  heightCondition = true
}

if (pet[pet.length-1] == 'y') {
 petCondition = true
}
// When all codnitions are true a secrete message is displayed
if(nameCondition && ageCondition && heightCondition && petCondition){
  console.log("Welcome back, 007")
} else{
  console.log("Nothing to see here")
}
 //
 //Jose Johnson
 //26 years old
 //175 cm tall
 //Pet name is "Sammy"
