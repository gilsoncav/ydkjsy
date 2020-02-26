const numbers = [3,54,4,34,45];

for (let n of numbers) {
    console.log(n);
}

const numbersCopy = [...numbers];

console.log(numbersCopy);

const stringSample = 'Gilson Cavalcanti';
const chars = [...stringSample];

console.log(chars);

let title2Author = new Map();

title2Author.set('O Sofrimento do Jovem Werter', 'Goethe');
title2Author.set('Sprint', 'John Zertsky');
title2Author.set('Sapiens', 'Yuval Noah Harari');

for (let [title, author] of title2Author) {
    console.log(`title: ${title}`);
    console.log(`author: ${author}`);
}