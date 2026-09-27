class Animal {
    constructor(public name: string) {}
  }
  
  class Dog extends Animal {
    bark(): void {
      console.log(`${this.name}: Gâu gâu!`);
    }
  }
  
  class Cat extends Animal {
    meow(): void {
      console.log(`${this.name}: Meo meo!`);
    }
  }
  
  const dog = new Dog("Cún");
  dog.bark();