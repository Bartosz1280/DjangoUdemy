// PART 4 ARRAY EXERCISE
// This is  a .js file with commented hints, its optional to use this.

// Create Empty Student Roster Array
// This has been done for you!
var roster = []

// Create the functions for the tasks

// ADD A NEW STUDENT

// Create a function called addNew that takes in a name
// and uses .push to add a new student to the array
addNew = function(roster, name){
  roster.push(name);
  return roster;
}

addNew(roster, "Jimmy")

// REMOVE STUDENT

// Create a function called remove that takes in a name
// Finds its index location, then removes that name from the roster

// HINT: http://stackoverflow.com/questions/5767325/how-to-remove-a-particular-element-from-an-array-in-javascript
//
remove = function(roster, name){
  var ind = roster.indexOf(name);
  roster.splice(ind,1);
  return roster;
}

addNew(roster,"Ben")
console.log("Intial roster "+roster)
remove(roster,"Ben")
console.log("Updated roster "+roster)

// DISPLAY ROSTER

// Create a function called display that prints out the orster to the console.
display = function(roster){
  // Start by asking if they want to use the web app
  var wantToUse = NaN
  while((wantToUse != "Y" && wantToUse != "N")){
     wantToUse = prompt("Do you want to use the web app??? (Y/N)")
  }
  if (wantToUse == "N") {
    alert("See you next time !")
  } else {
  // Now create a while loop that keeps asking for an action (add,remove, display or quit)
    var run = true;
    while(run){
      var input = prompt("What would you like to do?\n a) add \n r) remove \n  d) display  \n q) quit")
      if(input == "a"){
        var nameToAdd = prompt("Provide a name to be added")
        addNew(roster, nameToAdd)
      } else if (input == "r"){
        var nameToRemove = prompt("Provide a name to removed")
        if(roster.indexOf(nameToRemove) === -1 ){
          alert("Sorry but " + nameToRemove + " is not in the roster")
        } else{
          remove(roster,)
        }
      } else if (input == "d"){
          alert("Current roster: " + roster)
      } else if (input == "q"){
          alert("See you next time")
          run = false
      } else{
      }
    }
  }
}

display(roster)
// Use if and else if statements to execute the correct function for each command.
