//Function Intro
function getMilk() {
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");
}

//Passing Parameters
function getMilk(money) {
  var bottles = Math.floor(money / 1.5);
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");
  console.log("Buy " + bottles + " bottles of milk");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");
}

getMilk(14);

//returning values
function getMilk(money, costPerBottle) {
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");
  console.log("Buy " + noOfBottles(money,costPerBottle) + " bottles of milk");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");

  return changeOfMoney(money,costPerBottle);
}

function noOfBottles(money, costPerBottle) {
  var bottles = Math.floor(money / costPerBottle);
  return bottles;
}

function changeOfMoney(money,costPerBottle) {
    var change = money % costPerBottle;
    return change;
}

alert("You have " + getMilk(7,1.5) + " dollars change");

//Random Number Generator
var name1 = prompt("Enter name 1 : ");
var name2 = prompt("Enter name 2 : ");
var n = Math.random();
n = Math.floor(n * 100);
alert("The Love Percentage between " + name1 + " and " + name2 + " is " + n + "% !!");