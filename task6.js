//Write a program that simulates a dice using random() method of JS
//Math class. Display the value of dice in your browser.

var roll = prompt("How many times to roll?");
for (var i = 0; i<roll; i++) {

document.write("random dice value: "+Math.ceil(Math.random()*6)+"<br>");

}
 

