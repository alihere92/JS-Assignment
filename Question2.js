let number = prompt("Enter a number:");
number = parseInt(number);

if (number > 0) {
  alert("The number is positive (+)");
} else if (number < 0) {
  alert("The number is negative (-)");
} else {
  alert("The number is zero (0)");
}
