//Write a program to validate email address with following evaluation
//a. This string must contain @
//b. Ths string must contact chars
//c. The @ must have at least 1 char in front
//d. The string must contain .(dot) after @ and at least 1 char.

var email = prompt("Enter Email address");

if ((email.charCodeAt(0) >=65  && email.charCodeAt(0) <=90) || (email.charCodeAt(0) >=97  && email.charCodeAt(0) <=122)&&((email.slice(0,email.length-3)).indexOf("@")) >0 && ((email.slice(-5).slice(0,3)).indexOf("."))>0) {
alert("Email is correct");
}
else {
alert("incorrect\n Email must contain '@' and '.' at rigth position");
}