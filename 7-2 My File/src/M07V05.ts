//! Access Modifiers

class BankAccount {
    public readonly userId: number; //this property acces has modified by readonly 
    public userName: string;
    private userBalance: number;
    constructor(userId: number, userName: string, userBalance: number) {
        this.userId = userId;
        this.userName = userName;
        this.userBalance = userBalance
    }
    addBalance(balance: number) {
        this.userBalance = this.userBalance + balance;
    }
}

const fijerAccount = new BankAccount(111, "Fijer", 20);

fijerAccount.addBalance(100);
fijerAccount.addBalance(50);

console.log(fijerAccount);


// For this type of child class er jonno jodi main BankAccount properties er dorkar hoy tahole userBalance k private theke protected kore dibo : 

class StudentBankAccount extends BankAccount {
  test() {
    // this.userBalance;
  }
}