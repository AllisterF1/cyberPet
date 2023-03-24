class Animal {
   constructor(name) {
      super(name)
   }
   feed() {
      petEmotion.style.color = 'forestgreen';
      happinessLevel.value += 20;
      petEmotion.textContent = `${pet.name} loves food!`;
   }
   play() {
      happinessLevel.value += 10;
      petEmotion.style.color = 'forestgreen';
      petEmotion.textContent = ` ${pet.name} enjoys sleeping!`;
   }
   stroke() {
      happinessLevel.value += 5;
      petEmotion.style.color = 'forestgreen';
      petEmotion.textContent = `${pet.name} likes jokes.`;
   }
   wash() {
      happinessLevel.value -= 15;
      petEmotion.style.color = '#C21807';
      petEmotion.textContent = `Oh! ${pet.name} hates any type of exercise.`;
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

