
/* 1. THE TALLEST MOUNTAIN

    Logic
            1. Need to compare number value of each item (mtn height) to eachother
            2. Starting with first one, compare to second.  Whichever is greater, equate variable tallest = value of count[];
            3. display value of tallst

    I/O
            inputs = an array of type [numbers]
            output = one type [number] (height of index[boolean tallest = true])
*/

console.log("-------- THE TALLEST MOUNTAIN --------");

let heights = [12451, 14054, 15000, 10401, 8456, 14521];
let tallest = heights[0];

for (count = 0; count < heights.length; count = count + 1) {
    if (heights[count] > tallest) {
            tallest = heights[count];
    }
            console.log(tallest);
}

/* 2. HANGMAN LITE
      Create a variable called word that contains a hangman word, and create a second variable called 
      letter that indicates the letter that the player guessed. Print out "Yeah, the letter x exists y 
      times in my word" if the letter exists (but substitute the actual letter and the number of times). 
      If the letter doesn't exist, print out "Nope, that letter doesn't exist in my word."

    Logic
            1. Look at each letter in a string
            2. For each letter, test to see if it is equal to the input letter
            3. If it finds a match, set value of 'match' to true
            4. When done, use value of 'match' 'char' and 'times' to display results within given string
            5. If no match, return 'failure' string

    I/O
            inputs = an array of type [numbers]
            output = one type [number] (height of index[boolean tallest = true])
*/

console.log("-------- HANGMAN LITE --------");

let word = 'charcuterie';
let char = 'r';
let match = false;
let times = 0;

for(count = 0; count < word.length; count = count + 1){
    if(word[count]===char){
        match = true;
        times = times + 1;
    }
}

if(match){
    console.log("Yeah, the letter '"+char+"' exists "+times+" times in my word.");
} else {
    console.log("Nope, that letter doesn't exist in my word.")
}

/* 3. CHEROKEE HARE
      There's a mythical species of rabbit called the Cherokee Hare that can reproduce at variable
      rates and never seem to die. Fortunately, some engineers figured out to write some code to 
      describe it's future population. Wildlife experts rejoice! Create a variable called startingPopulation 
      that keeps track of the initial population of hares, a variable called birthRate that keeps track of 
      what percentage is born each week, and a variable called numberOfWeeks that represents how long we're 
      trying to simulate. Print out "There will be x Cherokee Hares after y weeks" but replace x with the 
      number of hares and y with the number of weeks.

    Logic
            1. Look at the number of weeks
            2. Depending on how many weeks the forecast horizon is, multiply current pop x the birth rate
            3. When done, display value of starting population within the string

    I/O
            inputs = (3) numbers - starting population, birth rate and weeks
            output = one number - ending population (starting population after the loop)
*/

console.log("-------- CHEROKEE HARE --------");

let startingPopulation = 200;
let birthRate = .1;
let numberOfWeeks = 5;

for (count = 0; count < numberOfWeeks; count = count + 1){
    startingPopulation = startingPopulation + (startingPopulation * birthRate);
}

console.log(startingPopulation);

/* 4. CHANGE MACHINE
      Imagine we have a very versatile change machine. Create a variable called amount stores a quantity 
      of dollars, and write some code that produces an array that indicates the number of 1, 5, 10, and 
      20 bills that the change machine should return. You want the change machine to return the smallest 
      number of bills possible.

      After your code runs you should have a new array of the format [twenties, tens, fives, ones]. For 
      example, if amount = 47, you should print an array after your code runs that looks like [2, 0, 1, 2] 
      (two twenties, 0 tens, 1 five, 2 ones).

    Logic
            1. Divide number by 20
            2. If result is >= 1, assign value to numberOfTwenties (rounded down)
            3. Change value of total dollars to the remaining portion, taking out dollars calculated from previous bills
            4. Repeat for 10s, 5s and 1s
            5. Print array consisting of each

    I/O
            inputs = 1 number ($amount)
            output = array of [twenties, tens, fives, ones]
*/

console.log("-------- CHANGE MACHINE --------");

let dollars = 57;

numberOfTwenties = Math.floor(dollars / 20);
dollars = dollars - (numberOfTwenties * 20);

numberOfTens = Math.floor(dollars / 10);
dollars = dollars - (numberOfTens * 10);

numberOfFives = Math.floor(dollars / 5);
dollars = dollars - (numberOfFives * 5);

numberOfOnes = Math.floor(dollars / 1);
dollars = dollars - (numberOfFives * 1);

//console.log(numberOfTwenties);
//console.log(numberOfTens);
//console.log(numberOfFives);
//console.log(numberOfOnes);

let bills = [numberOfTwenties, numberOfTens, numberOfFives, numberOfOnes];

console.log(bills);

/* 5. FINDING PALINDROMES
      Create a variable called word that stores a word we want to test as a palindrome. Write some code 
      that prints out "true" if word is a palindrome, or "false" if its not.

    Logic
            1. Split word into array
            2. Reverse array
            3. Join reversed array back into a word
            4. Compare two words
            5. If equal, palindrome = true

    I/O
            inputs = string (word)
            output = true / false
*/

console.log("-------- FINDING PALINDROMES --------");

let phraseOne = "two";

let arrayOne = phraseOne.split("");
console.log(arrayOne);
let arrayTwo = arrayOne.reverse();
console.log(arrayTwo);
phraseTwo = arrayTwo.join("");
console.log(phraseTwo);
if(phraseOne === phraseTwo){
    console.log("True");
} else {
    console.log("False");
}




