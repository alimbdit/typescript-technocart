{



//!  Getter and setter

// & get and set keyword

class BankAccount {
    readonly id: number;
    public name: string;
    private _email: string;
    protected _balance: number;

    constructor(id: number, name: string, email: string, balance: number) {
        this.id = id;
        this.name = name;
        this._email = email;
        this._balance = balance;
    }

    set deposit (amount:number){
        this._balance = this._balance + amount;
    }

    // public addDeposit(amount: number) {
    //     this._balance = this._balance + amount;
    // }
    public changeEmail(mail: string) {
        this._email = mail;
    }

    get balance (){
        return this._balance;
    }

    // public getBalance() {
    //     return this._balance;
    // }

}




const goribManushAccount = new BankAccount(111, 'poor man', 'poor@LockManager.com', 20);

goribManushAccount.changeEmail('gorib@manush@mail.com')

// goribManushAccount.balance=

// const balance1 = goribManushAccount.getBalance();
// goribManushAccount.addDeposit(20);
// const balance2 = goribManushAccount.getBalance();

// console.log(balance1, balance2);

const balance:number = goribManushAccount.balance;
console.log(balance);

goribManushAccount.deposit = 80;

const newBalance:number = goribManushAccount.balance;
console.log(newBalance)













    // 
}