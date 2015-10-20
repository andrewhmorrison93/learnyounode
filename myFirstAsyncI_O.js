//require file system module
var fs = require("fs");

//read file (process.argv[2]) from command line, check to see if there is an error, if not, take the data (here, automatically given as a string because of "utf8" as an argument), split that data with "\n" as a delimeter (so you break the string at every line break) and then count the elements in the array (using .length), subtract one from your count so you have the number of line breaks ("\n"), then console.log the # of line breaks 
fs.readFile(process.argv[2], "utf8", function(error, data) {
	if (error) throw error;
	console.log(data.split("\n").length-1);
});