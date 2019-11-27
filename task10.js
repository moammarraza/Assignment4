//10. Write a program that round a number to a given decimal places.

//Input
//16.765, 2
//12.37982, 2
//-9.3079499, 4


//Output
//16.77
//12.38
//-9.3079

var num = prompt("Rounding a decimal number to given decimal places, \n Enter decimal number and decimal place separated by comma");

alert("Output:\n"+Number(num.slice(0,num.indexOf(","))).toFixed(num.slice(num.indexOf(",")+1)));