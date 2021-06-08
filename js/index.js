// Iteration 1: Names and Input

let hacker1 = 'Alice';
console.log (`The driver´s name is ${hacker1}.`); 
let hacker2 = 'Lian';
console.log (`The navigator´s name is ${hacker2}.`); 

// Iteration 2: Conditionals

if ( hacker1.length > hacker2.length) 
  {
  console.log (`The driver has the longest name, it has ${hacker1.length} characters. `);
  }
else if (hacker2.length > hacker1.length)
  {
  console.log (`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
  }
else 
  {
  console.log (`Wow, you both have equally long names, ${hacker1.length} characters!`)
  }

// Iteration 3: Loops

//Iteration 3.1
let driveruppercased = hacker1.toLocaleUpperCase(); //'deposit' = name in uppercase.
let deposit = '';
for (let i = 0; i <driveruppercased.length; i++) //+ space after each letter.
  {
  deposit = deposit + driveruppercased.slice(i,i + 1) + ' ';
  }
console.log (deposit);

//Iteration 3.2
let deposit2 = '';
for (let i = hacker2.length; i > 0; i--) //i = end navigator´s name.
  {
  deposit2 = deposit2 + hacker2.slice(i-1,i); //adding letters from back to start.
  }
console.log (deposit2);

//itearion 3.3
let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // 'alphabet' provides lexicographic order. 
let navigatoruppercased = hacker2.toLocaleUpperCase(); //comparation in uppercase.
let checkword = navigatoruppercased.length - 1; //limit of letter´s comparation.
let counter = 0;
while (counter < navigatoruppercased.length) //cheking from first letter to last one.
  {
    if (driveruppercased.charAt(counter) !== navigatoruppercased.charAt(counter)) //names are different.
    {
      for (let i = 0; i < alphabet.length; i++) //checking from A to Z.
      {
        if (driveruppercased.charAt(counter) === alphabet.charAt(i) ) //driver´s first?
        {
        console.log(`The driver's name goes first.`);
        counter = navigatoruppercased.length; // for exit while loop.
        break;
        }
        if (navigatoruppercased.charAt(counter) === alphabet.charAt(i) ) //navigator´s first?
        {
        console.log(`Yo, the navigator goes first definitely.`);
        counter = navigatoruppercased.length; // for exit while loop.
        break;
        }
      }
    }
    if (driveruppercased.charAt(counter) === navigatoruppercased.charAt(counter)) //letters are equal.
    {
      if (counter === checkword) //limit is reached, names are equal.
      {
        console.log(`What?! You both have the same name?`);
        break;
      }
    }
  counter++;
  }

//Bonus1

//Bounus1.1
let lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;
console.log(lorem);

//bouns1.2
let counterwords = 0;
for (let counter2 = 0; counter2 < lorem.length; counter2++) //checking from 1st letter until last one.
  {
  if (lorem.charAt(counter2) === ' ') //counting 'blank spaces'
    {
    counterwords++;
    } 
  }
counterwords++; //adding last word not counted.
console.log(counterwords);

//bonus1.3
let counterets = 0;
let counter3 = 0;
let counter4 = 0;
for (let counter2 = 0; counter2 < lorem.length; counter2++) //checking from 1st letter until last one.
{
  if (lorem.charAt(counter2) === 'e') //the letter is 'e'?
  {
    counter3 = counter2 + 1;
    if (lorem.charAt(counter3) === 't') //next letter is 't'?
    {
     counter4 = counter3 + 1; 
     if (lorem.charAt(counter4) === ' ') //next letter is 'blank space''?
     {
     counterets++;  
     } 
    }
  } 
}
console.log(counterets);

//Bonus2
let phraseToCheck = `Another one`;
console.log(phraseToCheck);
let phraseclean = '';
for (let counter5 = 0; counter5 < phraseToCheck.length; counter5++) //filter blank space ,?!'
{
 if (phraseToCheck.charAt(counter5) != ' ')
 {
   if (phraseToCheck.charAt(counter5) != ',')
   {
     if (phraseToCheck.charAt(counter5) != '?')
     {
       if (phraseToCheck.charAt(counter5) != '!')
       {
         if (phraseToCheck.charAt(counter5) != `'`)
         {
         phraseclean = phraseclean + phraseToCheck.charAt(counter5);  
         }
       }
     }
    }
  } 
}
let phraseuppercased = phraseclean.toUpperCase(); //all letters uppercase.
let counterphrase = 0;
//length pair or odd?.
switch (phraseuppercased.length % 2) 
  {
  case 0: // pair
  counterphrase = (phraseuppercased.length) / 2; //counting just to the middle of the phrase.
  break;
  case 1: // odd
  counterphrase = ((phraseuppercased.length + 1) / 2); 
  break;
  }
let counter7 = phraseuppercased.length - 1; //counter from the end of the phrase.
let checkpalindrome = 0;
for (let counter6 = 0; counter6 < counterphrase; counter6++) //checking from start to the middle.
  {
    if (phraseuppercased.charAt(counter6) !== phraseuppercased.charAt(counter7 - counter6)) //letters different?
    {
    checkpalindrome = 1;
    }
  }
 //if chekpalindrome = 1 there are letters different. 
switch (checkpalindrome)  
  {
  case 0:
  console.log('It´s a Palindrome.')
  break;
  case 1:
  console.log('It´s not a Palindrome.')
  break;
  }












