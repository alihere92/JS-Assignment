let marks = [100, 100, 100, 100, 100]; // An array of marks
let sum = 0;

// Calculate the sum of all marks
for (let i = 0; i < marks.length; i++) {
  sum += marks[i];
}

// Calculate the average of all marks
let average = sum / marks.length;

// Determine the corresponding grade based on the average
let grade;

if (average < 60) {
  grade = "F";
} else if (average < 70) {
  grade = "D";
} else if (average < 80) {
  grade = "C";
} else if (average < 90) {
  grade = "B";
} 
  else {
  grade = "A";
} 

console.log("The average marks is " + average.toFixed(2) + " which corresponds to grade " + grade);
