//13. Write a program that determines the minutes since midnight, Jan 1, 1970 and assigns it to a variable
//that hasn't been declaredbeforehand. Use any variable you like to represent the Date object.


document.write("Current Date : "+new Date()+"<br>"+"Elapsed milliseconds since January 1, 1970 : "+new Date().getTime()+"<br>"+"Elapsed minutes since January 1, 1970 : "+new Date().getTime()/(1000*60*60));
