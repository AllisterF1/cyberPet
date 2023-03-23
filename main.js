class Animal {
    constructor(name) {
       this._name = name;
    }
    get name() {
       return this._name.charAt(0).toUpperCase() + this._name.slice(1);
    }
    feed() {
       happinessLevel.value += 20;
       petEmotion.textContent = `${pet.name} loves food!`;
    }
    wash() {
       happinessLevel.value -= 15;
       petEmotion.textContent = `Uh-oh! ${pet.name} hates bath time.`;
    }
    stroke() {
       happinessLevel.value += 5;
       petEmotion.textContent = `${pet.name} likes cuddles.`;
    }
 }
 
 class Dog extends Animal {
    constructor(name) {
       super(name)
    }
    play() {
       happinessLevel.value += 15;
       petEmotion.textContent = `${pet.name} loves going for a walk!`;
    }
 }
 
 class Cat extends Animal {
    constructor(name) {
       super(name)
    }
    play() {
       happinessLevel.value -= 10;
       petEmotion.textContent = ` ${pet.name} would rather take a nap by itself!`;
    }lay
 }
 
 class Fish extends Animal {
    constructor(name) {
       super(name)
    }
    play() {
       happinessLevel.value -= 15;
       petEmotion.textContent = `${pet.name} doesn't like being played with.`;
    }
 }
 class Lizard extends Animal {
   constructor(name) {
      super(name)
   }
   play() {
      happinessLevel.value -= 10;
      petEmotion.textContent = `No way. ${pet.name} would rather bask in the heat alone.`;
   }
}

