//! getter & setter

class BankAccount {
    public readonly userId: number;
    public userName: string;
    private _userBalance: number;
    constructor(userId: number, userName: string, userBalance: number) {
        this.userId = userId;
        this.userName = userName;
        this._userBalance = userBalance
    }

    //* balance k set kore and istead of this nicher ta user korbo
    /* addBalance(balance: number) {
       return this._userBalance = this._userBalance + balance;
    } */

    //* setter use kre krte chai
    set addBalance(amount: number) {
        this._userBalance = this._userBalance + amount;
    }

    //* get korle jeta hobe and instead of this nicher ta user korbo
    /* getBalance() {
        return this._userBalance;
    } */

    //* getter use kore get korte chai
    get getBalance() {
        return this._userBalance;
    }
}
const fijerAccount = new BankAccount(111, "Fijer", 20);

// fijerAccount.addBalance(100); // function call krte hsse
// fijerAccount.addBalance(60);
// console.log(fijerAccount.getBalance()); // function call krte hsse

fijerAccount.addBalance = 100;
fijerAccount.addBalance = 20;
console.log(fijerAccount);
console.log(fijerAccount.getBalance);