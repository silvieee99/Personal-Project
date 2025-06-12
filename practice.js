      let name = "Silvieeee";
      let selectedColors = ["red", "blue"];
      selectedColors[2] = "green"; // Adding a new color to the array
      console.log(selectedColors);
      function greet() {
        console.log("Hello, " + name + "!");
      }
      greet("mary"); // Calling the greet function
      greet("silvia");
      /*document.getElementById("main").style.display = "none"; // Hiding the main element
      alert("Hello"); // Displaying an alert with the name*/
      console.log("Hello" + "silvia"); // Logging a greeting message to the console
      console.log(2 + 2);
      console.log("Hello" + " " + "Silvia");
      let Age = 25;
      let Developer = "Silvia";
      console.log(Developer);
      console.log(Developer + Age);
      let Result = Age + Developer;
      console.log(Result);
      //reassigning a value to the variable
      Age = 18;
      console.log(Age);
      Age = Age + 5;
      Age+=5; 
      console.log(Age);
      console.log(typeof Age);
      let myBestFriends = [
        ["Silvia", "presh", "divine", "jess", "nerr", "jayda"],
        ["sami", "droid", "david", "james", "joshua", "joseph"],
      ];
      console.log(myBestFriends[0][0]); // Accessing the first friend's name
      console.log(myBestFriends); 
      console.log(myBestFriends[1]);
      Developer = "Silvia"; // Reassigning the Developer variable
      console.log(Developer.length); // Logging the Developer variable

      Developer_Length = Developer.length; // Getting the length of the Developer string
      console.log(Developer_Length); // Logging the length of the Developer string
      FirstLetterOfDevelopersName = Developer[0]; // Getting the first letter of the Developer's name
      console.log(FirstLetterOfDevelopersName); // Logging the first letter of the Developer's name
      LastLetterOfDevelopersName = Developer[Developer.length - 1]; // Getting the last letter of the Developer's name
      console.log(LastLetterOfDevelopersName); // Logging the last letter of the Developer's name

      function FriendsAge(PreshsAge, DivinesAge, JesssAge, NerrsAge, JaydasAge){
      let Result = "";
      Result += "TheAgeTotal" +"  "+ PreshsAge + DivinesAge + JesssAge + NerrsAge + JaydasAge + "  "+ "FriendsAgeTotal";
      return Result;

  }
  console.log(FriendsAge(25, 26, 27, 28, 29)); // Calling the FriendsAge function with ages of friends
      console.log(FriendsAge(30, 31, 32, 33, 34)); // Calling the FriendsAge function with different ages of friends
      console.log(FriendsAge(35, 36, 37, 38, 39)); // Calling the FriendsAge function with another set of ages of friends
      console.log(FriendsAge(40, 41, 42, 43, 44)); // Calling the FriendsAge function with yet another set of ages of friends
      console.log(FriendsAge(45, 46, 47, 48, 49)); // Calling the FriendsAge function with a final set of ages of friends
//Arrays usually start with []
var silviaDetails = ["Silvia", 25, "Developer", "Nigeria"];
var Mydetails = silviaDetails[0];
console.log(Mydetails); // Logging the first element of the silviaDetails array
var Mydetails = silviaDetails[3];
console.log(Mydetails); // Logging the first element of the silviaDetails array
silviaDetails[1] = "23"; // Reassigning the first element of the silviaDetails array
console.log(silviaDetails); // Logging the updated silviaDetails array
var silviaDetails = [["Silvia", 25, "Developer", "Nigeria"],["Dogs","Spaghetti", "CowLeg"]]; // Creating a nested array
WhatSilviaLikes = silviaDetails[1][0]; // Accessing the first element of the second array in the nested array
console.log(WhatSilviaLikes); // Logging the first element of the second array in the nested array
silviaDetails.push(["Smart","confident","focused"]);  // Adding a new element to the silviaDetails array
console.log(silviaDetails); // Logging the updated silviaDetails array

var silviaDetails = [["Silvia", 25, "Developer", "Nigeria"],["Dogs","Spaghetti", "CowLeg"],["Smart","confident","focused"]]; // Creating a nested array with three arrays

RemovedSilviaDetails = silviaDetails.pop(); // Removing the last element of the silviaDetails array

console.log(RemovedSilviaDetails); // Logging the removed element from the silviaDetails array
console.log(silviaDetails); // Logging the updated silviaDetails array after removing the last element
RemovedSilviaDetails = silviaDetails.shift();
console.log(RemovedSilviaDetails); // Logging the removed first element from the silviaDetails array
console.log(silviaDetails); // Logging the updated silviaDetails array after removing the first element
silviaDetails.unshift(["Silvia", 25, "Developer", "Nigeria"],["Smart","confident","focused"]); // Adding a new element to the beginning of the silviaDetails array
console.log(silviaDetails); // Logging the updated silviaDetails array after adding a new element to the beginning

//FUNCTIONS
function SilviasCompliment() {
  console.log("Silvia is smart, confident, and focused.");
}
SilviasCompliment(); // Calling the SilviasCompliment function to log a compliment about Silvia

function NumbersAdded (x,y){
  console.log(x + y); // This function takes two parameters and logs their sum
}
NumbersAdded(5, 10); // Calling the NumbersAdded function with two numbers to log their sum

function MultilpliedNumbers(num){
return num * 2; // This function takes a number as a parameter and returns its double
}
console.log (MultilpliedNumbers(8)); // Calling the MultilpliedNumbers function with a number to log its double
function testequals(val){
  if (val === 5) {
    return "Equal to 5"; // This function checks if the value is equal to 5 and returns a message
  } else {
    return "Not equal to 5"; // If not equal to 5, it returns a different message
  }
}
console.log(testequals(5)); // Calling the testequals function with a value of 5 to log the result
function test(hi){
  if (hi === "hi") {
    return "Hello"; // This function checks if the input is "hi" and returns "Hello"
  } else {
    return "Goodbye"; // If not "hi", it returns "Goodbye"
  }
}
console.log(test("hi")); // Calling the test function with "hi" to log the result

function testIfstatement(val) {
  if (val > 10) {
    return "Greater than 10"; // This function checks if the value is greater than 10 and returns a message
  } else if (val < 10) {
    return "Less than 10"; // If less than 10, it returns a different message
  } else {
    return "Equal to 10"; // If equal to 10, it returns another message
  }
}

function testIfChain(num){
if (num < 5)
{return "tiny"}
 else if (num < 10)
{return "small"}
else if (num < 15)
{return "medium"}
else if (num < 20) 
{return "big"}
else{return "huge"}

}

console.log (testIfChain(17))

//GOLF GAME
var names =[ "Hole in one!", "birdie", "par", "bogey", "double-bogey","eagle","Go home!"]
function golfscore(par,strokes){
if (strokes == 1){return names [0]}
else if (strokes <= par-2){return names [5]}
else if (strokes == par-1){return names [1]}
else if (strokes == par){return names [2]}
else if (strokes == 1){return names [0]}
else if (strokes == par+1){return names [2]}
else if (strokes == par+2){return names [0]}
else if (strokes>= par + 3){return names [6]}
else {return "Invalid input"}
}

console.log (golfscore(5,9))

//switch statement
function switchStatement(val) {
  var answer = "";
  switch (val) {
    case 1:
      answer = "This is one";
      break;
    case 2:
      answer = "This is two";
      break;
    case 3:
      answer = "This is three";
      break;
    case 4:
      answer = "This is four";
      break;
    default:
      answer = "This is the default case";
  }
  return answer;
}
console.log(switchStatement(3)); // Calling the switchStatement function with a value of 3 to log the result

//MULTIPLE SWITCH STATEMENTS
function multipleSwitchStatements(val) {
  var answer = "";
  switch (val) {
    case "a":
    case "b":
    case "c":
      answer = "This is Group1";
      break;
    case "d":
    case "e":
    case "f":
      answer = "This is Group2";
      break;
    case "g":
    case "h":
    case "i":
      answer = "This is Group3";
      break;
  }
  return answer;
}

console.log(multipleSwitchStatements("b")); // Calling the multipleSwitchStatements function with "b" to log the result

//AB TESTING FUNCTION
function abtest(a,b){
  if (a < 0 || b < 0) {
    return undefined; // If either a or b is negative, return undefined
  }
  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2)); // Otherwise, return the rounded result of the expression
}
console.log(abtest(-2, 9)); // Calling the abtest function with 4 and 9 to log the result

//OBJECTS- ACCESSING OBJECT PROPERTIES WITH DOT NOTATION
var MyObjectQuality = {
nameS : "silvia",
age : "23",
height : "5ft0",
BestFood : "BeefSauce"
};

var SilviaName = MyObjectQuality.nameS; // Accessing the name property of MyObjectQuality
console.log(SilviaName); // Logging the name property of MyObjectQuality

//ACCESSING OBJECT PROPERTIES WITH BRACKET NOTATION
var TestObject = {
  "a fruit": "apple",
  "A pet": "dog",
  "A car": "Toyota",
  "A country": "Nigeria"
};

var fruit = TestObject["a fruit"]; // Accessing the "a fruit" property of TestObject
console.log(fruit); // Logging the "a fruit" property of TestObject
var pet = TestObject["A pet"]; // Accessing the "A pet" property of TestObject





