import giveMeAJoke from "give-me-a-joke";
import generateStupidName from "sillyname";
import superheroes from "superheroes";

giveMeAJoke.getRandomDadJoke((joke) => {
  console.log(joke);
});

let sillyname = generateStupidName();
console.log(sillyname);

let myName = superheroes.random();
console.log(`I am ${myName}`);
