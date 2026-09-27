class Employee {
    constructor(public name: string, public salary: number) {}
  }
  
  class Manager extends Employee {
    manageTeam(): void {
      console.log(`${this.name} đang quản lý đội ngũ.`);
    }
  }
  
  class Developer extends Employee {
    code(): void {
      console.log(`${this.name} đang viết code.`);
    }
  }
  
  const manager = new Manager("An", 2000);
  const dev = new Developer("Bình", 1500);
  manager.manageTeam();
  dev.code();