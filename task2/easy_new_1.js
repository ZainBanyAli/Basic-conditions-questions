// 1- Write a program to declare two numbers. If both numbers are greater than 10,
//print "Both numbers are greater than 10". Otherwise, print "At least one number is not greater than 10".

let num1 = 5;
let num2 = 12;

if (num1 > 10 && num2 > 10) {
  console.log("Both numbers are greater than 10");
} else {
  console.log("At least one number is not greater than 10");
}

// 2- Write a program to declare a username and a password.
//If both the username and password are correct, print "Access granted". Otherwise, print "Access denied".

var username = "zain";
var password = "ZZZ11";

var x = prompt("Enter a username for x:");
var y = prompt("Enter a password for y:");

if ((x == username) & (y == password)) {
  console.log("Access granted");
} else {
  console.log("Access denied");
}

// 3- Write a program to declare a number. If the number is between 10 and 20 (inclusive), print "The number is between 10 and 20".
// Otherwise, print "The number is not between 10 and 20".

var a;
if ((a >= 10) & (a <= 20)) {
  console.log("The number is between 10 and 20");
} else {
  console.log("The number is not between 10 and 20");
}

// 4- Write a program that to declare age and whether they have a driver's license (yes or no).
//If the user is 18 or older and has a driver's license, print "You can drive". Otherwise, print "You cannot drive".

var islicense = true;
var notlicense = false;

var age = parseInt(prompt("Enter a age for Z:"));

if (age > 18) {
  console.log("You can drive");
  console.log(islicense);
} else {
  console.log("You cannot drive");
  console.log(islicense);
}

// 5- Write a program to declare a number.
//If the number is greater than 10 or less than 0, print "Invalid number". Otherwise, print "Valid number".
let I = 15;

if (I > 10 || I < 0) {
  console.log("Invalid number");
} else {
  console.log("Valid number");
}

// 6- Write a programto declare a number.
//If the number is between 5 and 10 (inclusive) or between 20 and 25 (inclusive), print "The number is valid".
//Otherwise, print "The number is not valid".

let N = 15;

if ((N >= 5 && N <= 10) || (N >= 20 && N <= 25)) {
  console.log("The number is valid");
} else {
  console.log("The number is not valid");
}
// 7- to declare a password. If the password is "secret" or "password", print "Access granted".
//Otherwise, print "Access denied".

var pass = prompt("Enter a password for pass:");

if (pass == "secret" || pass == "password") {
  console.log("Access granted");
} else {
  console.log("Access denied");
}

// 8- Write a program to declare a number. If the number is between 0 and 100 (inclusive) and is even,
//print "The number is even and between 0 and 100". Otherwise, print "The number is not even and/or not between 0 and 100".

var R = parseInt(prompt("Enter a number for R:"));

if (R >= 0 && R <= 100 && R % 2 == 0) {
  console.log("The number is even and between 0 and 100");
} else {
  console.log("The number is not even and/or not between 0 and 100");
}
// 9- Write a program to declare two numbers. If either number is negative, print "At least one number is negative".
//Otherwise, print "Both numbers are positive".

let neg = -2;
let pos = +2;

if (pos > 0 || neg < 0) {
  console.log("At least one number is negative");
} else {
  console.log("Both numbers are positive");
}

// 10- Write a program to declare age and whether they are a student (yes or no).
//If the user is under 18 or is a student, print "You qualify for a discount". Otherwise, print "You do not qualify for a discount".

var isstudent = true;
var notstudent = false;

var studentage = parseInt(prompt("Enter a age for studentage:"));

if (age < 18) {
  console.log("You qualify for a discount");
  console.log(isstudent);
} else {
  console.log("You do not qualify for a discount");

  console.log(notstudent);
}
