class BankAccount {
    balance: number;
  
    constructor(initialBalance: number) {
      this.balance = initialBalance;
    }
  
    deposit(amount: number): void {
      this.balance += amount;
      console.log(`Nạp: ${amount}. Số dư mới: ${this.balance}`);
    }
  
    withdraw(amount: number): void {
      if (amount > this.balance) {
        console.log("Không đủ tiền rút!");
      } else {
        this.balance -= amount;
        console.log(`Rút: ${amount}. Số dư còn lại: ${this.balance}`);
      }
    }
  }
  
  const account = new BankAccount(1000);
  account.deposit(500);
  account.withdraw(300);