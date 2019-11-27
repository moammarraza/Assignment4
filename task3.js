//Write a program to take password as an input from user. The
//password must qualify these requirements:
//a. It should contain alphabets and numbers
//b. It should not start with a number
//c. It must at least 8 characters long
//d. If the password does not meet the above requirements, prompt
//the user to enter a valid password. For character codes of a-z,
//A-Z & 0-9

var pass = prompt("Enter a password please!");
var x;
if (pass.length < 8 || pass.charCodeAt(0) >= 48 && pass.charCodeAt(0) <= 57 ) {
 x = "Password must be at least 8 characters long and should not start with a number";
 }
else {
 for (var i = 0; i < pass.length; i++) {
  if (pass.charCodeAt(i) >= 48 && pass.charCodeAt(i) <= 57) { 
   for (var j = 0; j < pass.length; j++) {
    if(pass.charCodeAt(j) >= 65 && pass.charCodeAt (j)<=90) {
      for (var k = 0; k < pass.length; k++) {
      if(pass.charCodeAt(k) >= 97 && pass.charCodeAt(k) <=122) { 
       x = "Password is valid";
       }
      }
     }
    }
   }
 else {
  x = "Invalid Password, must contain Capital and small alphabet and a number"
  }
  }
 }
 alert(x);

