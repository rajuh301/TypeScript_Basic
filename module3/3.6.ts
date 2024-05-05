{
    // Getter and Setter


    class BankAccount {
        readonly id: number;
        public name: string;
        protected _balance: number; 

        constructor(id: number, name: string, _balance: number) {
            this.id = id;
            this.name = name;
            this._balance = _balance
        };



        // getter
        get balance() {
            return this._balance;
        }

        set addDeposit(amount: number) {
            this._balance = this._balance + amount
        }


        set depositOut(amount: number) {
            if (this._balance > amount) {
                this._balance = this._balance - amount
            } else {
                console.log('Insuffiction blamce')
            }
        }
    };



    const makePoorAccount = new BankAccount(121, 'Raju', 200)




    makePoorAccount.addDeposit = 50
    makePoorAccount.depositOut = 240



    const myAccount = makePoorAccount.balance
    console.log(myAccount)




    //
}