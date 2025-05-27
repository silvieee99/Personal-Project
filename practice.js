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



