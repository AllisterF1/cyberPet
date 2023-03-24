class Animal {
   constructor(name) {
      super(name)
   }
   play() {
      happinessLevel.value += 10;
      petEmotion.textContent = ` ${pet.name} enjoys grooming itself!`;
   }
}

class Fish extends Animal {
   constructor(name) {
      super(name)
   }

   play() {
      happinessLevel.value -= 15;
      petEmotion.textContent = `${pet.name} hates it when you tap the glass!`;
   }
   stroke() {
      happinessLevel.value -= 5;
      petEmotion.textContent = `You can't stroke ${pet.name}!`;
   }
   wash() {
      happinessLevel.value -= 20;
      petEmotion.textContent = `Uh-oh! don't try and wash ${pet.name}!`;
   }
}

class Lizard extends Animal {
  constructor(name) {
     super(name)
  }
  play() {
     happinessLevel.value += 10;
     petEmotion.textContent = `Oh yeah. ${pet.name} crank up the heat lamp!`;
  }
  stroke() {
   happinessLevel.value += 5;
   petEmotion.textContent = `${pet.name} loves a head scratch!`;
}
wash() {
   happinessLevel.value -= 20;
   petEmotion.textContent = `Uh-oh! don't try and wash ${pet.name}!`;
}
}

