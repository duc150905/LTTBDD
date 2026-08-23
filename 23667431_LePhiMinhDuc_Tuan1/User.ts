class User {
    private name: string;
  
    constructor(name: string) {
      this.name = name;
    }
  
    get getName(): string {
      return this.name;
    }
  
    set setName(newName: string) {
      if (newName.trim().length === 0) {
        console.log("Tên không hợp lệ!");
        return;
      }
      this.name = newName;
    }
  }
  
  const user = new User("Duc");
  console.log(user.getName); // Dùng getter
  user.setName = "Minh Duc"; // Dùng setter
  console.log(user.name);