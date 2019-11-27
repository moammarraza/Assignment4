//11. Write a program to take input of a Number and find a Mean of All Digits
//E.g: 666 = 6 + 6 + 6 = 18 /3 = 6
//    1246 = 1 + 2 + 4 + 5 = 12 / 4 = 3

var num = prompt("Enter a number");
var sum = [];
var add=0;
for (var i = 0; i < num.length; i++) {
 
 add= add+Number(num[i]);
 sum.push("+"+num[i]);

}
document.write(num+" = "+String(sum).replace(/,/g,"").replace("+","")+" = "+add+" / "+num.length+" = "+add/num.length);
