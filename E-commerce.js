/*let cartQuantity = 0;
      document.getElementById("Show Quantity").onclick = function () {
        console.log(`Cart quantity:${cartQuantity}`);
      };

      document.getElementById("Add to Cart").onclick = function () {
        cartQuantity = cartQuantity + 1;
        console.log(`Cart quantity:${cartQuantity}`);
      };

      document.getElementById("+2").onclick = function () {
        cartQuantity = cartQuantity + 2;
        console.log(`Cart quantity:${cartQuantity}`);
      };

      document.getElementById("+3").onclick = function () {
        cartQuantity = cartQuantity + 3;
        console.log(`Cart quantity:${cartQuantity}`);
      };

      document.getElementById("Reset Cart").onclick = function () {
        cartQuantity = 0;
        console.log("Cart button was reset");
        console.log(`Cart quantity:${cartQuantity}`);
      };*/




let cartQuantity = 0;

function showQuantity() {
  console.log(`Cart quantity: ${cartQuantity}`);
}

function addToCart() {
  cartQuantity += 1;
  //cartQuantity = cartQuantity + 1;
  //cartQuantity++
  console.log(`Cart quantity: ${cartQuantity}`);
}

function add2() {
  cartQuantity += 2;
  console.log(`Cart quantity: ${cartQuantity}`);
}

function add3() {
  cartQuantity += 3;
  console.log(`Cart quantity: ${cartQuantity}`);
}

function resetCart() {
  cartQuantity = 0;
  console.log("Cart button was reset");
  console.log(`Cart quantity: ${cartQuantity}`);
}

document.getElementById("Show Quantity").onclick = showQuantity;
document.getElementById("Add to Cart").onclick = addToCart;
document.getElementById("+2").onclick = add2;
document.getElementById("+3").onclick = add3;
document.getElementById("Reset Cart").onclick = resetCart;


//ROCK PAPER SCISSORS GAME

//const randomNumber = Math.random();
function getComputerMove (){
const randomNumber = Math.random();
if( randomNumber >= 0 && randomNumber < 1/3){
console.log("Rock")
}else if( randomNumber >= 1/3 && randomNumber < 2/3){
console.log("Paper")
}else{
console.log("Scissors")
};
};


function rock() {
  const computerMove = getComputerMove();
  console.log("Rock");
}
function paper() {
  const computerMove = getComputerMove();
  console.log("Paper");
}

function scissors() {
  const computerMove = getComputerMove();
  console.log("Scissors");
}
document.getElementById("Rock").onclick = rock;
document.getElementById("Paper").onclick = paper;
document.getElementById("Scissors").onclick = scissors;

