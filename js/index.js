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
let driveruppercased = hacker1.toLocaleUpperCase();
let deposit = '';
for (let i = 0; i <driveruppercased.length; i++)
{
  deposit = deposit + driveruppercased.slice(i,i + 1) + ' ';
}
console.log (deposit);

//Iteration 3.2
let deposit2 = '';
for (let i = hacker2.length; i > 0; i--)
{
  deposit2 = deposit2 + hacker2.slice(i-1,i);
}
console.log (deposit2);

//itearion 3.3
let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let navigatoruppercased = hacker2.toLocaleUpperCase();
let checkword = navigatoruppercased.length - 1;
let counter = 0;
while (counter < navigatoruppercased.length)
  {
    if (driveruppercased.charAt(counter) !== navigatoruppercased.charAt(counter))
    {
      for (let i = 0; i < alphabet.length; i++)
      {
        if (driveruppercased.charAt(counter) === alphabet.charAt(i) )
        {
        console.log(`The driver's name goes first.`);
        counter = navigatoruppercased.length;
        break;
        }
        if (navigatoruppercased.charAt(counter) === alphabet.charAt(i) )
        {
        console.log(`Yo, the navigator goes first definitely.`);
        counter = navigatoruppercased.length;
        break;
        }
      }
    }
    if (driveruppercased.charAt(counter) === navigatoruppercased.charAt(counter))
    {
      if (counter === checkword)
      {
        console.log(`What?! You both have the same name?`);
        break;
      }
    }
  counter++;
  }



