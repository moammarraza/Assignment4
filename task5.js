//Write a program that takes a positive integer from user & display the
//following in your browser.
//a. number
//b. round off value of the number
//c. floor value of the number
//d. ceil value of the number

var num = Number(prompt("Enter a positive integer"));

if (isNaN(num)) {
 alert("Enter a number");
}
else {
 alert("number: "+num + "\n" +"round off value: "+Math.round(num)+ "\n" +"floor value: "+Math.floor(num) +"\n" + "ceil value: "+Math.ceil(num));
 }