// Iteration 1: Names and Input

const hacker1 = "Han Solo";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Chewbacca";
console.log(`The navigator's name is ${hacker2}`);



// Iteration 2: Conditionals


if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
  }
  else if (hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters!`)
  }
  else {
    console.log(`You both have equally long names, ${hacker1.length} characters!`);
  } 


// Iteration 3: Loops


let nameUP = hacker1.toUpperCase();
let nameSP = nameUP.split("").join(" ");


for (let counter =0; counter < nameUP.length; counter +=1) {
  
  const char = nameSP[counter];
  console.log(char);
}


for (let print = hacker2.length-1; print >= 0; print -= 1) {
  const letter = hacker2[print];
  console.log(letter);
}


const alpha = hacker1.localeCompare(hacker2);

if (alpha < 0){
  console.log(`The driver's name goes first`);
}
else if (alpha > 0){
  console.log(`Yo, the navigator goes first, definitely`);
}
else{
  console.log(`What?! You both have the same name?`);
}

// Bonus 1 //


const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis nibh libero. Ut molestie elementum nisi ut iaculis. Praesent sollicitudin risus at mi condimentum consectetur. Vivamus aliquet metus ultrices neque efficitur, et convallis urna posuere. Fusce ornare erat et euismod efficitur. Phasellus ullamcorper turpis vitae augue fringilla euismod eu vitae ligula. Donec volutpat massa et justo eleifend facilisis eget id augue. Sed lectus sapien, imperdiet nec purus vitae, elementum hendrerit ex. Morbi et purus lorem. Quisque scelerisque scelerisque augue, ac ullamcorper est commodo sit amet. Aliquam facilisis ipsum et erat rhoncus eleifend. Sed eleifend tellus id nulla tincidunt porta. Morbi consequat sed arcu vel fringilla. Vestibulum nec convallis nibh. Integer sodales aliquet nunc, pharetra semper mi pellentesque a.

Pellentesque eu tempus turpis. Duis sollicitudin tellus massa, eu gravida felis bibendum volutpat. Proin vel metus orci. Curabitur mattis elit eu finibus interdum. Duis finibus tortor est, et laoreet lacus auctor eleifend. Pellentesque tellus massa, convallis ac congue quis, hendrerit vitae turpis. Nullam dictum elit at nisi tempor sagittis.

Curabitur ac mi vitae felis malesuada pretium. Maecenas eleifend placerat erat eget lacinia. Etiam blandit lectus sit amet lacus tincidunt, id fermentum metus gravida. Curabitur ac porttitor orci, nec pretium lectus. Pellentesque efficitur, arcu ut dictum rhoncus, massa nunc pellentesque dui, nec varius risus quam nec odio. Integer malesuada ligula non sem accumsan, et laoreet felis lacinia. Etiam a enim euismod, varius erat sagittis, lobortis mauris. Donec accumsan metus ac diam consequat, at gravida mauris condimentum. Proin interdum dictum nisl, et pulvinar tellus sollicitudin placerat. Quisque sollicitudin lectus eu ex iaculis, in dapibus mi egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse sed urna vitae risus ullamcorper facilisis. Morbi vitae odio ipsum. Proin sapien arcu, imperdiet vitae porta vitae, scelerisque sed nulla.`


let words = 0;

for (let i = 0; i <= longText.length; i += 1){
  
  if (longText[i] === " "){
    
    words += 1;
  }
}
 console.log(words +1);


/* Does this count? It was the best I managed to find that allowed me to not to count "et" inside other words. But it was info from stack overflow and not chat GPT, if that's better! */

const etCount = longText.match(/ et /g).length;

console.log(etCount)


// Bonus 2 //

let phraseToCheck = "Was it a car or a cat I saw?";
let revPhraseToCheck = "";

let alphabetical = phraseToCheck.replace(/\W/g, '');

for (let i = alphabetical.length-1; i >= 0; i-=1){
  revPhraseToCheck += alphabetical[i]; 
}

let final = alphabetical.toLowerCase();
let revfinal = revPhraseToCheck.toLowerCase();

if (final === revfinal) {
  console.log(`is a palindrome`);
}
else {
  console.log(`is not a palindrome`);
}

