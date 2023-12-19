class Animal {
    constructor(species, sounds) {
        this.species = species;
        this.sounds = sounds;
    }
    speak() {
        console.log(this.species + " " + this.sounds);
    }
}
Animal.prototype.eat = function () {
    return this.species + " is eating";
}
let cat = new Animal("chat", "miaule");
let dog = new Animal("chien", "aboie");
cat.speak();
console.log(dog.eat());
console.log(dog);
