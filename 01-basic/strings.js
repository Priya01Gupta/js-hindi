const name = "Priya"
const repoCount = 45

// console.log(name + repoCount + "Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String('prijhb-dvg')

console.log(gameName);
console.log(gameName.__proto__);

console.log(gameName.length);

console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('h'));

const newString =gameName.substring(0, 5)
console.log(newString);

const anotherString =gameName.slice(-9, 5)
console.log(anotherString);

const newStringOne = "    priya    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://priya.com/priya%20gupta"
console.log(url.replace('%20', '-'));

console.log(url.includes('priya'))

console.log(gameName.split('-'));


