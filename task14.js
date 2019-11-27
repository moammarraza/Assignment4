//14. Create a Date object for the current date and time. Extract the hours, reset the date object an hour
//ahead and finally display the date object in your browser.
var date = new Date();
date.setHours(date.getHours()+1)
document.write("current date: "+date+"<br>"+"1 hour ago, it was " +new Date());

