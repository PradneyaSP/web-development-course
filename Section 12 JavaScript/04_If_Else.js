var n = prompt("Enter a number : ");
if(n === 100){
    alert("You have entered 100!!");
}else {
    alert("You have entered something less than 100");
}

/*
=== -> equality
!== -> unequality
>= -> greater than or equal to
<= -> less than or equal to
> -> greater than
< -> less than
*/

//Combining Comparators
var name1 = prompt("Enter name 1 : ");
var name2 = prompt("Enter name 2 : ");
var n = Math.random();
n = Math.floor(n * 100);

if(n > 70){
    alert("The Love Score between " + name1 + " and " + name2 + " is " + n + "% !!" + " Your love is pretty strong");
}

if( n<=70 && n>30) {
    alert("The Love Score between " + name1 + " and " + name2 + " is " + n + "% !!" + "Your love strength is decent");
}

if(n < 30) {
    alert("The Love Score between " + name1 + " and " + name2 + " is " + n + "% !!" + "You people pretty much hate each other!");
}