//Remove all available HTML tags from given string

var str = "<p><strong><em>Only print this</em></strong></p>";

 str = str.replace("<p><strong><em>","");
 str = str.replace("</em></strong></p>","");

alert("Output: \n"+str);