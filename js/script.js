/* eslint-disable no-console */
//
// DOM - DOCUMENT OBJECT MODEL
//

// display 'window' object's properties and methods
console.log(window);

// setTimeout
// display functiow with delay in miliseconds
function raiseFakeAlarm() {
    alert('I show it once after 2 seconds.');
}
//
var delayedAlert = setTimeout(raiseFakeAlarm, 2000);

// clearTimeout
// cancel setTimeout function and not execute it
clearTimeout(delayedAlert);

// setInterval and clearInterval
// similar to setTimeout and clearTimeout but function executes
// many times at a given interval
function raiseAlarm() {
    console.log('I show myself every two seconds.');
}
//
var interval = setInterval(raiseAlarm, 2000);
//
function stop() {
    console.log('It took 10 seconds. The following statement interrupts the interval.');
    clearInterval(interval);
}
//
setTimeout(stop, 10000);

//
// DOCUMENT or WINDOW.DOCUMENT methods and properties
//
// object useful in website creation
console.log(document); // or window.document

// onload method
// executes function after loading website
window.onload = function() {
    console.log('The page is fully loaded.');
    // the rest of the script
};

// location object
// current URL to get or set
console.log(location);
//window.location = 'https://kodilla.com';

// getElementById method
// gets element of website with given id
// if more than one returns first only
var navigation = document.getElementById('nav');
console.log(navigation);

// getElementsByClassName method
// get elements of website with given class
// always sets array of elements
var withMenuItemsClass = document.getElementsByClassName('menuItem');
console.log(withMenuItemsClass);
// second example
var menu = document.getElementById('Menu');
var withMenuItemsClassInNav = menu.getElementsByClassName('menuItem');
console.log(withMenuItemsClassInNav);

// getElementsByTagName
// get elements of website with given tag
// always sets array of elements
var itemsByTagName = document.getElementsByTagName('li');
console.log(itemsByTagName);

// nextElementSibling method
// navigate to the same level element
var navigation1 = document.getElementById('nav');
console.log(navigation1.nextElementSibling);

// createElement method
// creates element of given tag
var newElem = document.createElement('p');

// innerHTML method
// insert code inside element that it points to
newElem.innerHTML = 'The text inside the p tag, which is under newElem';
console.log(newElem);

// appendChild method
// add child element at the end of another element
var navigation2 = document.getElementById('nav');
var newElem1 = document.createElement('p');
//
newElem1.innerHTML = 'The text inside the p tag, which is under newElem1';
//
navigation2.appendChild(newElem1);

// className property
// read class of a given element
var menu1 = document.getElementById('Menu');
//
menu1.className += ' navbar-right';
//
console.log(menu1.className);

// style
// read style of a given element
// sets tag's inline style
var navigation3 = document.getElementsByClassName('menuItem');
//
console.log(navigation3[0].style);
//
navigation3[0].style.background = 'red';
navigation3[0].style.padding = '10px';
//
console.log(navigation3[0].style);
