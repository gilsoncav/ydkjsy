const book1 = {
    topic: 'physics'
}

const book2 = Object.create(book1);

console.log(`book1.topic: ${book1.topic}`);
console.log(`book2.topic: ${book2.topic}`);

// the effect of this assignment is shadowing the topic property of the next object in the
// prototype chain.
book2.topic = 'math';

console.log(`book2.topic: ${book2.topic}`);
