//arrays intro
var guestList = ["Pratyush", "Piyush", "Pradneya", "Varun", "Anshu", "Pranav"];
var guest = prompt("Enter your name : ");
if (guestList.includes(guest)) {
  alert("Welcome !!");
} else {
  alert("You are not welcome!!");
}

//fizzbuzz
var count = 0;
var output = [];
function fizzbuzz() {
  count++;
  if (count % 15 === 0) output.push("FizzBuzz");
  else if (count % 3 === 0) output.push("Fizz");
  else if (count % 5 === 0) output.push("Buzz");
  else output.push(count);
  console.log(output);
}
