class Car {
    brand: string;
    model: string;
    year: number;
  
    constructor(brand: string, model: string, year: number) {
      this.brand = brand;
      this.model = model;
      this.year = year;
    }
  
    showCarInfo(): void {
      console.log(`Car: ${this.brand} ${this.model} (${this.year})`);
    }
  }
  
  const myCar = new Car("Toyota", "Camry", 2024);
  myCar.showCarInfo();