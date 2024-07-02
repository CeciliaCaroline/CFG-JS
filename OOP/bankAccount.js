class BankAccount {
    #balance = 0;
  
    deposit(amount) {
      if (amount > 0) {
        this.#balance += amount;
        console.log(`Deposited: $${amount}`);
      }
    }
  
    withdraw(amount) {
      if (amount > 0 && amount <= this.#balance) {
        this.#balance -= amount;
        console.log(`Withdrew: $${amount}`);
      } else {
        console.log('Insufficient funds');
      }
    }
  
    getBalance() {
      return this.#balance;
    }
  }
  
  const account = new BankAccount();
  account.deposit(100);
  account.withdraw(30);
  console.log(account.getBalance()); // 70