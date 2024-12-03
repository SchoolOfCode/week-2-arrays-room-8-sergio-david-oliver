// Ticket 2
let songs = [
  "Ice Water",
  "EARFQUAKE",
  "Can I Kick It?",
  "Redbone",
  "Slow Jamz",
];

console.log(Array.isArray(songs)); // Checks if it is array

// Ticket 3
console.log(songs[0]);

//Ticket 4
songs[4] = "Baby Shark";
console.log(songs[4]);

//Ticket 5
let cookiesOrdered = [15, 3, 67, 1, 22, 100];

for (i = 0; i < cookiesOrdered.length; i++) {
  cookiesOrdered[i] = cookiesOrdered[i] * 10;
}

console.log(cookiesOrdered);

// FINAL TICKET

let quiz = [
  "1. What is the capital of France?",
  "2. Which animal is known as the 'King of the Jungle'",
  "3. What is the largest planet in our solar system?",
  "4. Who wrote the play 'Romeo and Juliet'?",
  "5. What is the smallest prime number?",
];
let answers = ["Paris", "Lion", "Jupiter", "William Shakespeare", "2"];
let points = 0;

for (let i = 0; i < quiz.length; i++) {
  let input = prompt(quiz[i]);
  if (input == answers[i]) {
    points++;
    console.log(
      `Correct! You've gained a point! Your point total is: ${points}`
    );
  } else {
    console.log(`Incorrect. Your score remains at ${points}`);
  }
}

console.log(
  `Quiz completed! You answered ${points} out of ${quiz.length} questions correctly.`
);
