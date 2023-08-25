// document.querySelector("h1") => $("h1")
var h1 = $("h1");

// document.querySelectorAll("button") => $("button")
var button = $("button")

//geting the values of css properties
console.log($("h1").css("color"));
console.log($("h1").css("font-size"));

//chaning the properties(discouraged)
$("h1").css("color" ,"darkcyan");
$("button").css("height","50px");

//Adding a class
h1.addClass("stylish-title");

//Removing a class
// h1.removeClass("stylish-title");

//returns true or false
h1.hasClass("stylish-title");

//manipulate text
h1.text("Bye!!");
button.text("Shine");
//innerHTML
h1.html("<u>Hello</u>");

//Changing the attribute value
button.attr("class" , "button-style");
$("a").attr("href" , "https://www.yahoo.com");

//Adding Event Listner
button.click(function(){
    h1.css("font-family","sans-serif");
});

$(document).keypress(function(event){
    h1.text(event.key);
});

//using on method
var flag = true;
$("h1").on("click", function () {
  if (flag) $("h1").css("color", "red");
  else $("h1").css("color", "purple");
  flag = !flag;
});


//use before to add element before the tag
//use after to add element after the tag
//use prepend to add element just before the innerHTML
//use append to add element just after the innerHTML
//use remove to remove all occurances of the selected query

$(".one").click(function(){
    $("h1").toggle();
});

$(".two").click(function(){
    $("h1").fadeToggle();
});

$(".three").click(function(){
    $("h1").slideToggle();
});

$(".four").click(function(){
    $("h1").animate({opacity: 0.5});
});

$(".five").click(function(){
    $("h1").slideUp()
});