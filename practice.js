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