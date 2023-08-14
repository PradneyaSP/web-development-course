//Using Alert
alert("Hello World!");

//using prompt and variables    
var naam = prompt("What is your name : ");
alert("Your name is : " + naam);

//DataTypes
typeof(123);
typeof("Pradneya");
typeof(true);

//Combining Strings
var myName = "Pradneya";
var surname = "Prabhudesai";
myName = myName + " " + surname;

//SLicing the string
var str = "iesabci  aioeywbc yeoanciuo";
var firstLetter = str.slice(0,1);
var remainingStr = str.slice(1,str.length);

//Changing Casing in Text
var name1 = prompt("Enter your name : ");
name1 = name1.slice(0,1).toUpperCase() + name1.slice(1,name1.length).toLowerCase();
alert("Hello, " + name1 + "!");

