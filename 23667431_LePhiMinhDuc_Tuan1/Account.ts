class Account {
    public username: string;      
    private password: string;     
    readonly id: number;         
  
    constructor(id: number, username: string, password: string) {
      this.id = id;
      this.username = username;
      this.password = password;
    }
  
    showPublicInfo(): void {
      console.log(`ID: ${this.id}, User: ${this.username}`);
    }
  }
  
  const myAccount = new Account(101, "admin", "123");
  myAccount.showPublicInfo();