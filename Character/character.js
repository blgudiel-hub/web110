"use strict";

alert(`Hello, I am Brian Gudiel. Today I wish to help you create a character for a haunted forest campaign.`);


const charName = prompt(`First choose a name for your character.`, `Wanderer`);

const pet = prompt(`What kind of pet or companion does ${charName} want?`);

const powers = prompt(`What kind of powers do you have?`);

const training = prompt(`How many years have you been training?`);

const years = Number(training);

console.log(training, typeof training);
console.log(years, typeof years);

const powerLevel = years * 10;

const likeFight = confirm(`Does ${charName} like fighting monsters?
Click OK for YES.
Click Cancel for NO.`);

console.log(likeFight, typeof likeFight);

alert(`Gathering magic for ${charName}... almost ready!`);

alert(`====================================

Name: ${charName}
Pet: ${pet}
Superpower: ${powers}
Power Level: ${powerLevel}
Monster Fighter? ${likeFight ? "Yes" : "No"}

While exploring the wilderness ${charName} begins exploring the haunted forest known as Erobos,
with their faithful ${pet} with them. After years of training, they have learned to use ${powers} 
that will help them survive this place.

==========================================`);