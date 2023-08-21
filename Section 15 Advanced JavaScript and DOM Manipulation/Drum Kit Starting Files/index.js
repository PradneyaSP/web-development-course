//Playing the sound
function playSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      var kick = new Audio("./sounds/kick-bass.mp3");
      kick.play();
      break;
    default:
      console.log(key);
  }
}

function buttonAnimation(key){
    var currentKey = document.querySelector("." + key);
    currentKey.classList.add("pressed");
    setTimeout(function(){
        currentKey.classList.remove("pressed");
    },100);
}

//Detecting the button press
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    playSound(this.innerHTML);
    buttonAnimation(this.innerHTML)
  });
}

//Detecting a key press
document.addEventListener("keypress", function (event) {
  playSound(event.key);
  buttonAnimation(event.key);
});

/*
Higher Order Function and Passing functions as arguments
function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function calculator(num1, num2, operator) {
  return operator(num1, num2);
}
*/

// var audio = new Audio('./sounds/tom-1.mp3');
// audio.play();

/*
Javasript Objects

var Student1 = {
    name: "Pradneya",
    rollno: 79,
    dept: "cse",
    state: "goa"
}

var Student2 = {
    name: "Varun",
    rollno: 120,
    dept: "cse",
    state: "chandigadh"
}

To solve this we can make a Constructor Function
function Student (name,rollno,dept,state){
    this.name = name;
    this.rollno = rollno;
    this.dept = dept;
    this.state = state;
    this.sayHello = function(){
        console.log("Hello!");
    }
}

var student1 = new Student("Pradneya",79,"cse","Goa");
var student2 = new Student("Varun",120,"cse","Chandigarh");
var student3 = new Student("Piyush",45,"ee","Orissa");
var student4 = new Student("Pratyush",47,"ece","UP");
var student5 = new Student("Anshu",11,"ee","Bihar");


*/
