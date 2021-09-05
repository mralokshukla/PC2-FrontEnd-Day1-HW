//Exercise 5 
//Use nested if statements to display the alert based on user spending
//Author: Alok Shukla

let ent = 800; //entertainment spend
let eat = 550; //eating out spend
let trn = 100; //transport spend


if (ent > 500) {
  alert ("Hey! your spending on Entertainment is high!");
} else if (ent > 300) {
    if (eat > 250) {
      alert ("Hey! your spending on Entertainment and Eating Out is high!");
    }
    if (trn > 400) {
        console.log ("Hey! your spending on Entertainment and Transport is high!");
    }
  }
  else {
   console.log("Great! All your spendings are in limit!");
}
