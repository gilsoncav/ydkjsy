function classroom(teacher) {
    return function study() {
        console.log(`${teacher} says to study ${this.topic}`);
    }
}

const kyleClass = classroom('Kyle');

kyleClass();

const gilson = {
    topic: 'math',
    kyleClass: kyleClass
}

const giovanna = {
    topic: 'laws',
}

gilson.kyleClass();

kyleClass.call(giovanna);