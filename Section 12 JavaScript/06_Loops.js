//while loop
var count = 0;
var output = [];
function fizzbuzz() {
  while (count < 100) {
    count++;
    if (count % 15 === 0) output.push("FizzBuzz");
    else if (count % 3 === 0) output.push("Fizz");
    else if (count % 5 === 0) output.push("Buzz");
    else output.push(count);
    console.log(output);
  }
}

//99 bottles of beer
function beer(num){
    var beer_bottles = num;
    while(beer_bottles > 0) {
      console.log(beer_bottles + " bottles of beer on the wall, " + beer_bottles + " bottles of beer." + "\nTake one down, pass it around, " + (beer_bottles-1) + " bottles on the wall.");
      beer_bottles--;
    }
  }
