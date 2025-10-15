      let MyName = "Silvieeee";
      let selectedColors = ["red", "blue"];
      selectedColors[2] = "green"; // Adding a new color to the array
      console.log(selectedColors);
      function greet() {
        console.log("Hello, " + MyName + "!");
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

function MultipliedNumbers(num){
return num * 2; // This function takes a number as a parameter and returns its double
}
console.log (MultipliedNumbers(8)); // Calling the MultilpliedNumbers function with a number to log its double
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

//ACCESSING OBJECT PROPERTIES WITH VARIABLES

var PlayerInfo = {
  18: "Drogba",
  25: "Messi",
  30: "Ronaldo",
  35: "Zlatan"
};
var playerAge = 25; // Setting a variable for the player's age
var playerName = PlayerInfo[playerAge]; // Accessing the player's name using the age variable
console.log(playerName); // Logging the player's name based on the age variable

//UPDATING OBJECT PROPERTIES USING DOT NOTATION
var MyObjectQuality = {
nameS : "silvia",
age : "23",
height : "5ft0",
BestFood : "BeefSauce"
};

MyObjectQuality.nameS = "chika"; // Updating the name property of MyObjectQuality
console.log(MyObjectQuality.nameS); // Logging the updated name property of MyObjectQuality

var MyDog = {
  name: "Ryan",
  age: 1,
  breed: "Maltese",
  color: "White"
};
MyDog.color = "Brown"; // Updating the color property of MyDog
console.log(MyDog.color); // Logging the updated color property of MyDog

//ADDING NEW PROPERTIES TO AN OBJECT using DOT NOTATION
MyDog.owner = "Silvia"; // Adding a new property 'owner' to MyDog
console.log(MyDog.owner); // Logging the new 'owner' property of MyDog

//ADDING NEW PROPERTIES TO AN OBJECT using BRACKET NOTATION
MyDog["favoriteToy"] = "Ball"; // Adding a new property 'favoriteToy' to MyDog using bracket notation
console.log(MyDog["favoriteToy"]); // Logging the new 'favoriteToy' property of MyDog

//DELETING PROPERTIES FROM AN OBJECT using DOT NOTATION
var MyDog = {
  name: "Ryan",
  age: 1,
  breed: "Maltese",
  color: "Brown",
  owner: "Silvia",
  favoriteToy: "Ball"
};
delete MyDog.age; // Deleting the 'age' property from MyDog
console.log(MyDog); // Logging MyDog after deleting the 'age' property

//USING OBJECTS FOR LOOKUPS
//Converting switch statements to objects for lookups
function phoneticLookup(val) {
  var result = "";
  switch (val) {
    case "alpha":
      result = "Adams";
      break;
    case "bravo":
      result = "Boston";
      break;
    case "charlie":
      result = "Chicago";
      break;
    case "delta":
      result = "Denver";
      break;
    case "echo":
      result = "Easy";
      break;
    case "foxtrot":
      result = "Frank";
      break;
    default:
      result = "Not found"; // Default case if no match is found
  }
  var result = lookup[val];
  return result;
  };
  console.log(phoneticLookupObject("charlie")); 
  
// The objects version of the phoneticLookup function
function phoneticLookupObject(val) {
  var result = "";
  var lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
  };
  var result = lookup[val]; // Accessing the value from the lookup object using the input value
  return result;
}
console.log(phoneticLookupObject("charlie")); // Calling the phoneticLookupObject function with "charlie" to log the result

// MANIPULATING COMPLEX OBJECTS - objects inside of an array

var MyStudentsInfo = [
{"Adrian": "30",
"byann": "22",
"chloe": "18",
"daniel": "17",
"Evan": "22",
"fiona": ["30","tall","smart"],
"xeri": "25",
},
{ "gillian": "35",
  "helen": "120",
  "irene": "40"
}

];
console.log(MyStudentsInfo[0].Adrian); // Accessing Adrian's age from the first object in the array

//ACCESSING NESTED OBJECTS
var CarStorage = {
  "Car": { "inside":{ "glovebox": "maps",
    "passengerSeat": "water bottle",},
    "outside": { "trunk": "spare tire"}
  }
};
var gloveboxContents = CarStorage.Car.inside.glovebox; // Accessing the contents of the glovebox
console.log(gloveboxContents); // Logging the contents of the glovebox
var gloveboxContents = CarStorage.Car.inside["glovebox"]; // Accessing the contents of the glovebox using bracket notation
console.log(gloveboxContents); // Logging the contents of the glovebox using bracket notation

// ACCESSING NESTED ARRAYS

var MyPlants = [
   {"type":"flowers",
    "list": [
       "rose",
       "tulip",
       "daisy"]
    },
    {
    "type":"trees",
    "list": [
       "fir",
       "pine",
       "birch"]
    }]
var secondTree = MyPlants[1].list[1]; // Accessing the second tree in the list of trees
console.log(secondTree); // Logging the second tree in the list of trees

// RECORD COLLECTIONS
var collection = {
  2548: {
    albumTitle: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"]
  },
  2468: {
    albumTitle: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"]
  },
  1245: {
    artist: "Robert Palmer",
    tracks: []
  },
  5439: {
    albumTitle: "ABBA Gold"
  }
};

var collectionCopy = JSON.parse(JSON.stringify(collection));
 console.log(collectionCopy);

function updateRecords( id, prop, value) {
  if (value === "") {
    delete collection[id][prop]; // If value is empty, delete the property
  } else if (prop === "tracks") {
    collection[id][prop] = collection[id][prop] || []; // If tracks property doesn't exist, initialize it as an empty array
    collection[id][prop].push(value); // Add the new track to the tracks array
  }
  else {
    collection[id][prop] = value; // Update the property with the new value
  }
  return collection; // Return the updated records object
}
updateRecords(5439, "artist", "ABBA"); // Updating the artist of album with id 5439
console.log(updateRecords(5439, "artist", "ABBA"))
console.log(collection[5439].artist); // Logging the updated artist of album with id 5439

//WHILE LOOPS

var myArray = [];
var i = 0; // Initializing the counter variable
while (i < 5) { // Looping while i is less than 5
  myArray.push(i); // Adding the current value of i to the myArray
  i++; // Incrementing i by 1
}
console.log(myArray); // Logging the myArray after the loop

//SECOND WHILE LOOP EXAMPLE

var myArray = [];
var i = 0; 
while (i < 5) {
  myArray.push(i);
  i+=2; // Incrementing i by 2
  // This will add even numbers to the myArray
}
console.log(myArray);

//ITERATE WITH FOR LOOPS
var myArray = []
for(i=1;i<6;i++){
myArray.push(i);
}
console.log(myArray)

// Odd Numbers
var ourArray = []
for (var i=1;i<10;i+=2){
  ourArray.push(i);

}
console.log(ourArray)

//COUNT BACKWARDS WITH A FOR LOOP
var theirArray = []
for (var i=10;i>0;i-=2){
theirArray.push(i)
}
console.log(theirArray)

//Count Odd numbers backwards
var theirArray = []
for (var i=9;i>0;i-=2){
theirArray.push(i)
}
console.log(theirArray)

//ITERATE THROUGH AN ARRAY WITH A FOR LOOP
var theyArray = [9,10,11,12];
ourTotal = 0;
for(var i=0;i<theyArray.length;i++){
  ourTotal += theyArray[i]
}
console.log(ourTotal)

//Another For loop to add up numbers
var myArray = [2,3,4,5,6];
myArrayTotal = 0;
for(var i=0;i<myArray.length;i++){
  myArrayTotal += myArray[i]
}
console.log(myArrayTotal);

//NESTING FOR LOOPS
function multiplyAll(arr){
  var product = 1
  for(var i=0;i<arr.length;i++){       //var i = 0 means start counting from the first array
    for(var j=0;j<arr[i].length;j++){
      product *= arr[i][j];

    }
  }


  return product;
}

var product = multiplyAll([[1,2],[3,4],[5,6,7]])
console.log(product);

//ITERATE WITH DO WHILE LOOPS

var myArray = []; //Do While loops runs the code block first before checking the condition
var i = 10;
do{myArray.push(i);i++}while(i<5);

console.log(i,myArray);

//PROFILE LOOKUPS
 var contacts = [
  {"firstName": "Akira",
    "lastName": "Laine",
    "number" : "12345678",
    "likes" : ["Pizza","Coding","BrowniePoints"]
  },
  {"firstName": "Harry",
    "lastName": "Potter",
    "number" : "91011121314",
    "likes" : ["Hogwarts","Magic","Hargrid"]
  },
  {"firstName": "Sherlock",
    "lastName": "Holmes",
    "number" : "1516171819",
    "likes" : ["Violin","IntriguingCases"]
  },
  {"firstName": "Kristian",
    "lastName": "Voss",
    "number" : "unknown",
    "likes" : ["Javascript","Gaming","Foxes"]
  }
 ]

 function profileLookup(namess,prop){
  for(var i = 0; i<contacts.length; i++)
    { if(contacts[i].firstName === namess){
      return contacts[i][prop] || "No such Property";
    }
     
    }
  return "NO such Contact";
 }
var data = profileLookup ("Akira","likes");
console.log(data);

//running for lastName
/*function profileLookup(namess,prop){
  for(var i = 0; i<contacts.length; i++)
    { if(contacts[i].lastName === namess){
      return contacts[i][prop] || "No such Property";
    }
    }
  return "NO such Contact";
 }
var data = profileLookup ("Voss","number");
console.log(data);
*/

//GENERATE RANDOM FRACTIONS
function randomFraction(){
  return Math.random();
}
console.log(randomFraction()); //this generates a random fraction/decimal number

//GENERATE RANDOM WHOLE NUMBERS
var RandomNumbersBetween0And19 = Math.floor(Math.random()*20); //math.floor rounds down to the nearest whole number
function randomWholeNum(){
  return Math.floor(Math.random()*10); //math.random gives a random decimal between 0 and 1(exclusive)
}
console.log(randomWholeNum());

//GENERATING RANDOM WHOLE NUMBERS WITHIN A RANGE
function randomRange(myMin,myMax){
return Math.floor(Math.random()*(myMax - myMin + 1))+ myMin;
}
var myRandomRange = randomRange(6,12);
console.log(myRandomRange);

//PardseInt Function - It takes a string and returns an integer
function convertToInteger(str){
  return parseInt(str)
}
console.log(convertToInteger("56"))

//ParseInt function with a radix - A radix specifies the base of a number in a string
function convertToInteger(str){
  return parseInt(str,2) //2 stands for passing in a binary number
}
console.log(convertToInteger("10011"))

//Use the conditional TERNARY OPERATOR - A ternary operator is a one line if else statement
function checkEqual (a,b){
  return a===b? true:false;
}
console.log(checkEqual (2,6));

//MULTIPLE CONDITIONAL (TERNARY) OPERATOR
function checkSign (num){
  return num>0 ? "Positive" : num<0 ? "Negative" : "nil";
}
console.log( checkSign (-12));

//MUTATE AN ARRAY DECALRED WITH CONST
const s = [5,6,7];
function replaceArray (){
  "use strict"
  s[0]=2;
  s[1]=3;
  s[2]=4;
};
replaceArray ();
console.log(s);

//PREVENT OBJECT MUTATION USING FREEZE OBJ
/*function freezeObj(){
  "use strict"
  const MATH_CONSTANTS = { PI : 3.142};
  Object.freeze(MATH_CONSTANTS);
  try { MATH_CONSTANTS.PI = 99
} catch (ex){
  console.log(ex);
}
return MATH_CONSTANTS.PI;
}
const PI = freezeObj();*/

//USE ARROW FUNCTIONS TO WRITE CONCISE ANONYMOUS FUNCTIONS - its anonymous bc it doesn't have a fucntion name
var magic = function (){
return newDate();
}
//You can also write it this way; take out function
var magic =  ()=>{
return newDate();
}
//you can make it shorter this way; delete the curly brackets and return
var magic =  ()=> newDate(); //it's better to use const to declare the variable in thuis case

//WHITE ARROW FUNCTIONS WITH PARAMETERS
var myConcat = function(arr1,arr2){
  return arr1.concat(arr2);

}
console.log(myConcat([2,3,4],[5,4,6]))

//Converting it to make it Arrow functions to make it shorter
var myConcat = (arr1,arr2)=> arr1.concat(arr2);

console.log(myConcat([2,3,4],[5,4,6]))

//WRITE HIGHER ARROW FUNCTIONS
//When a function takes another function as an argument, that's a good time to use arrow functions
//This code takes the square of only positive integers in the array
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]
const squareList = (arr) => {
 const squaredIntegers = arr.filter(num => Number.isInteger(num)&& num > 0).map(x=> x*x);
 return squaredIntegers;

};
const squaredIntegers = squareList (realNumberArray);
console.log (squaredIntegers);

//converting the arrow functions above to regular function
const realnumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]
function squarelist(arr){
 const squaredintegers = arr.filter(function (num){
  return Number.isInteger(num)&& num > 0}).map(function (x){
    return x*x
  } );
 return squaredintegers;

};
const squaredintegers = squarelist (realnumberArray);
console.log (squaredintegers);

//WRITE HIGHER ORDER ARROW FUNCTIONS (IIFE)-IMMEDIATELY INVOKED FUNCTION EXPRESSIONS
const increment = (function (){
  return function increment(number,value = 1){
    return number + value;
  };
})();

console.log (increment(5,2));
console.log (increment(5));

//REwriting the above function without IIFE
function inCrement(number, value = 1) {
  return number + value;
}

console.log(inCrement(5, 2)); // ➜ 7
console.log(inCrement(5));    // ➜ 6



//USE THE REST OPERATOR WITH FUNCTION PARAMETERS
//an expression without the rest operator.
const sum = (function(){
  return function sum(x,y,z){
    const args = [x,y,z];
    return args.reduce((a,b)=>a+b,0);
  };
})();
console.log(sum(1,2,3));

//REWRITING THE ABOVE CODE USING THE REST OPERATOR
const suM = (function(){
  return function suM(...argS){
    /*const argS = [x,y,z];*/   //comment this out because x,y,z is being replaced with the three dots
    return argS.reduce((a,b)=>a+b,0);
  };
})();
console.log(suM(1,2,3));

//REWRITING THE ABOVE CODE WITHOUT IIFE AND ALSO TAKING OUT THE ARROW FUNCTION
 function sUm(x,y,z){
    const arGs = [x,y,z];
    return arGs.reduce(function(a,b){
      return a+b},0);
  };
console.log(sUm(1,2,3));

//USE THE SPREAD OPERATOR TO EVALUATE ARRAYS IN PLACE
// Example 1: Spread in function call
const nums = [1, 2, 3];
console.log(...nums); // Output: 1 2 3

// Example 2: Spread in array literals
const moreNums = [...nums, 4, 5]; 
console.log(moreNums); // Output: [1, 2, 3, 4, 5]

// Example 3: Spread in object literals
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };
console.log(obj2); // Output: { a: 1, b: 2, c: 3 }

//USE DESCTRUCTURING ASSIGNMENT TO ASSIGN VARIABLES FROM OBJECTS
var voxel = {x:4, y:5, z:6};
var x = voxel.x;
var y = voxel.y;
var z = voxel.z;
const{x:a,y:b,z:c}=voxel;



