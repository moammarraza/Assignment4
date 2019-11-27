//Convert number in words. Example
//Input 23, 123, 1234
//Output Twenty Three, One Hundred and Twenty Three, One Thousand Two Hundred and Thirty Four.

var num = prompt("Enter a Whole Number up to 99999 please!");

var str = [];
var wrd = ["","One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];

	if (num.slice(-5) >=20000 && num.slice(-5) <=99999) {
 	 str.push(wrd[Number(num.charAt(0))+18]+" "+wrd[Number(num.slice(-5).charAt(1))]+" Thousand ");
	  } 

	if (num.slice(-5) >=1000 && num.slice(-5) <=20000) {
	  str.push(wrd[Number(num.charAt(num.length-5)+num.charAt(num.length-4))]+" Thousand ");
	  } 

	if (num.slice(-3) >=100 && num.slice(-3) <=999) {
	  str.push(wrd[num.slice(-3).charAt(0)]+" Hundred ");
	  } 
	if (num.slice(-2) >0 && num.slice(-2) <100 && num > 100) {
	str.push(" and ");
	}
	if (num.slice(-2) > 20) {
	  str.push(wrd[Number(num.slice(-2).charAt(0))+18]+" "+wrd[num.slice(-2).charAt(1)]);
	 }
	if (num.slice(-2) <=20) {
	  str.push(wrd[Number(num.slice(-2))]);
	  } 
	if (num == 0) {
	 str.push("Zero");
	}
	if (isNaN(num)) {
	str.push("Insert a whole number");
 	}
document.write(num+" = "+String(str).replace(/,/g,""));

