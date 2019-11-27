//15. Write a program to ask the user about his age. Calculate and show
//his birth year in your browser

var age = Number(prompt("Enter your age. please!"));

document.write("Your age is "+age+"<br>"+"Your birth year is "+(new Date().getFullYear()-age));