//You have a string “The quick brown fox jumps over the lazy dog”.
//Write a program to count the number of occurrences of the word “the”
//in given string.


var count =0;
var str = ("The quick brown fox jumps over the lazy dog").toLowerCase();

while(str.indexOf("the") != -1) {
 str = str.replace("the","");
 count++
}

alert("Text: The quick brown fox jumps over the lazy dog \n There are "+count+" occurance(s) of word 'the'");