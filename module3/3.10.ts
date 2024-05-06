{
    // access modefire


    class BankAccount {
        readonly id: number;
        public name: string;
        protected _balance: number; // private--- I can use it 

        constructor(id: number, name: string, _balance: number) {
            this.id = id;
            this.name = name;
            this._balance = _balance
        };

        addDeposit(anount: number) {
            this._balance = this._balance + anount
        };

        depostiOut(amount: number) {
            if (this._balance > amount) {
                this._balance = this._balance - amount
            } else {
                console.log('Insuffiction blamce')
            }
        };

        private get_balance() {
            return this._balance
        }

        getHedenMethord() {
            return this.get_balance
        }
    };

    class StudentAccount extends BankAccount {
        test() {
            this.test
        }
    }


    const makePoorAccount = new BankAccount(121, 'Raju', 200)


    makePoorAccount.addDeposit(100)
    makePoorAccount.depostiOut(400)




    const myAccount = makePoorAccount.getHedenMethord()
    console.log(myAccount)



    //
}