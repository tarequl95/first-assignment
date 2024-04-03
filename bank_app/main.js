class BankAccount{
   #accountNumber=1001;
   #OwnerName= "John Doe";
   #Balance=700;
    createAcc(accNumber,accName){
        if(this.#accountNumber==accNumber){
            console.log("this account number already exist");
        }
        else{
            this.#accountNumber=accNumber;
            this.#OwnerName=accName;
            //console.log("Account Number: "+this.#accountNumber);
            //console.log("Account Name: "+this.#OwnerName);
        }
    }
    deposit(amount){
        this.#Balance+=amount;
        console.log("deposit "+amount+" account is "+this.#accountNumber);
    }
    withdraw(amount){
        if(this.#Balance<amount){
            console.log("insuffincient blanch");
        }
    else if(this.#Balance>amount){
            this.#Balance-=amount;
            console.log(amount+" taka withdraw in your account");
        }
    }
    getBalance(){
        console.log("your balance is:"+this.#Balance);
    }
    displayAccountInfo(){
        console.log("account info:")
        console.log("Acc Name:"+this.#OwnerName);
        console.log("Acc number:"+this.#accountNumber);
        console.log("Acc blanch:"+this.#Balance);
    }
}
let bank1=new BankAccount();
let bank2=new BankAccount();
bank1.deposit(300);
bank1.displayAccountInfo();
console.log();

bank2.createAcc(1003,"tarequl");
bank2.withdraw(800);
bank2.displayAccountInfo();


//console.log(bank1.checkblance());
//console.log();
/*
let bank2=new BankAccount();
bank1.deposit(100);
bank1.withdraw(600);
console.log(bank2.checkblance());
*/