// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   userInput=input.question ("Let's play some scrabble! Enter a word:");
  
  return (userInput)
};
// console.log (oldScrabbleScorer(initialPrompt()));

let simpleScore= function(word){
  word= word.trim()
  score=word.length
return score
}

let vowelBonusScore= function(word){
 word= word.toUpperCase()
  score=0;
  let vowels=['A','E','I','O','U']
  for (let i = 0; i < word.length; i++){
     if (vowels.includes(word[i])){
        score=score+3
    }else{
      score=score+1
      }
    }
  return score
}

let scrabbleScore= function(word){
  word= word.toUpperCase()
 let letterPoints = 0;
 
	for (let i = 0; i < word.length; i++) {
 
			letterPoints += newPointStructure[word[i]];
		  }
 	return letterPoints;
 }


const scoringAlgorithms = [
   {
  name: 'Simple Score',
  description: 'Each letter is worth 1 point.',
  scoringFunction: simpleScore
  },
  {
  name: 'Bonus Vowels',
  description: "Vowels are 3 pts, consonants are 1 pt.",
  scoringFunction: vowelBonusScore
  },
  {
  name: 'Scrabble',
  description: 'The traditional scoring algorithm.',
  scoringFunction: scrabbleScore  
  }
];

function scorerPrompt() {
  userInput=input.question ("Let's play some scrabble! Enter a word:");
  console.log();
  userAlgorithm = input.question(`Which scoring algorithm would you like to use?\n \n 0 - Simple: One point per character\n 1 - Vowel Bonus: Vowels are worth 3 points \n 2 - Scrabble: Uses scrabble point system \n Enter 0, 1, or 2:`);

  if (userAlgorithm==0){
    console.log (`Score for '${userInput}': ${simpleScore(userInput)}`)
  }else if ( userAlgorithm==1){
    console.log (`Score for '${userInput}':${vowelBonusScore(userInput)}`)
  }else if  (userAlgorithm==2){
    console.log (`Score for '${userInput}':${scrabbleScore(userInput)}`)
  }
}

function transform(old) {
  let updatedPoints={}
  for (score in old){
    let points= old[score]
    for(let i=0;i<points.length;i++)
    updatedPoints[points[i]]=Number(score);
  }
return updatedPoints
};

let newPointStructure=transform(oldPointStructure);

function runProgram() {
   scorerPrompt();
   
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

