//Exercise 4 
//Use Stack (push, pop) to change date from dd-mm-yy to yy-mm-dd
//Author: Alok Shukla

// define variables
var dt = "05-09-21"; // original date
var split_dt = dt.split('-'); // split date at every -
var split_rev_dt = []; // empty stack to hold the reverse date

for(i=0; i<3; i++)
{
    split_rev_dt.push(split_dt.pop()); // pop and push
}
var rev_dt = split_rev_dt.join('-'); // join the dates back with -

// console output
console.log("Original Date: " + dt);
console.log("Reversed Date: " + rev_dt);