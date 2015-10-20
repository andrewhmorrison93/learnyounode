//get the numbers from the command line and extract only the actual inputs
var numbers = process.argv.slice(2);

//loop over the numbers and add them together using reduce, then assign the total (i.e., the value returend from reduce) to sum
var sum = numbers.reduce(function(a,b) {
	return Number(a)+Number(b);
});
//print out sum
console.log(sum);