//Exercise 6
//Use forEach loop and add 2% only for values above 4000; Store values in same array
//Author: Alok Shukla

var exp = [4500, 5000, 6500, 5000, 2800, 3500];

//define the function
//add 2% to for values above 4000
let interest = function(num, index, exp) {
  if (num > 4000) {
    num = (num*1.02)
  } else {
    num = num;
  };
  exp[index] = num;
};

//using forEach
exp.forEach(interest, exp);
console.log(exp);
