abstract class Shape {
    abstract area(): number;
  }
  
  class Square extends Shape {
    constructor(public side: number) {
      super();
    }
    area(): number {
      return this.side * this.side;
    }
  }
  
  class Circle extends Shape {
    constructor(public radius: number) {
      super();
    }
    area(): number {
      return Math.PI * this.radius * this.radius;
    }
  }
  
  const square = new Square(4);
  const circle = new Circle(3);
  console.log(`Diện tích hình vuông: ${square.area()}`);
  console.log(`Diện tích hình tròn: ${circle.area().toFixed(2)}`);