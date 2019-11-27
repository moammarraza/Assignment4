//Write a program to replace the “Hyder” to “Islam” in the word
//“Hyderabad” and display the result in your browser.

var a = "Islam";
var b = "Hyderabad";
alert("City: "+b);
alert("After replacement: "+b.replace(b.slice(0,b.indexOf('a')),a));