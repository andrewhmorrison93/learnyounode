//require file system module
var fs = require("fs");

//read file (process.argv[2]) from command line, convert it to a string, split it into an array with "\n" as a delimiter (so you are breaking the string at every line break), then count the elements of that array (subtract 1 element because there will be 1 more element than line return); this will give you the number of line breaks, so console.log the number of line breaks
console.log(fs.readFileSync(process.argv[2]).toString().split("\n").length-1);