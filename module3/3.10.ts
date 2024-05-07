{
    // *------------------
    // !  encapsulation
    // *-------------------
    //& Access modifiers

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

        public addDeposit(amount: number) {
            this._balance = this._balance + amount;
        }
        public changeEmail(mail: string) {
            this._email = mail;
        }

        private getBalance() {
            return this._balance;
        }

        hiddenMethod(){
            return this.getBalance();
        }

    }

    class StudentAccount extends BankAccount {
        test(){
            this.hiddenMethod();   //~ here encapsulation is working
        }  
        //& here after this. email will not get because it is private not and _balance can get as it is protected. so protected can inherit to child class, on other hand private(only can use in the own class) can not be inherited.

        // constructor(id: number, name: string, email: string, balance: number) {
        //     super(id, name, email, balance)
        // }
    }


    const goribManushAccount = new BankAccount(111, 'poor man', 'poor@LockManager.com', 20);

    goribManushAccount.changeEmail('gorib@manush@mail.com')

    // goribManushAccount.balance=

    // const balance1 = goribManushAccount.getBalance();
    goribManushAccount.addDeposit(20);
    // const balance2 = goribManushAccount.getBalance();

    // console.log(balance1, balance2);




























    // 
}