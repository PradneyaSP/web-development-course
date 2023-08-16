document.querySelector("ul").lastElementChild.innerHTML = "Pradneya";

//gets a single element with the given id
document.getElementById("#title");

//gets multiple elements with the same class
document.getElementsByClassName("item");

//gets multiple elements with the same tag name
document.getElementsByTagName("a");

//You can use query selector to combine various selectors
//returns a single element
document.querySelector("#list>li>a");

//Use querySelectorAll to get a list of all elements with the same selectors
//You will have to specify the index of the required element
document.querySelectorAll("#list li")[2];

//changing the color of 2nd google link
document.querySelector("#list > li > a")