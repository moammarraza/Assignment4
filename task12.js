//12. Write a program that shows the message “First fifteen days of the
//month” if the date is less than the 16th of the month else shows “Last
//days of the month”.first fifteen days of the month

var dat = prompt("dd/mm/yyyy");


var dat1 = new Date(dat.slice(dat.indexOf("/")+1,5)+"/"+dat.slice(0,dat.indexOf("/"))+"/"+dat.slice(-4));

if (dat1.getDate() < 15) {
alert("first fifteen days of the month");
}

else if (dat1.getDate() > 15) {
 alert("Last days of the month");
}
else {
 alert("Enter correct date");
}