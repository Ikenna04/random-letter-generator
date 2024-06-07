// Generating A Random Letter From Your Name

const myName = 'Ikenna';

let randomLetter = myName.charAt(Math.floor(Math.random() * myName.length));

console.log('My Name is ', myName);
console.log('A random letter is ', randomLetter);
