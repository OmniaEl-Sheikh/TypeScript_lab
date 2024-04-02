//1-	Create array that accept  number only
let arr:number[]=[];

//2-	Create array that accept string and number only and print all items
let arr2:(string|number)[];
arr2=[1,"omnia"];
console.log(arr2);

//3-	Create a variable that accept number and Boolean only 
let x:number|boolean;

//4-	Create function with two parameter try to call it without any parameter “handling”
function one(x?:number,y?:number):void
{
    if(x!==undefined&&y!==undefined) console.log(x,y);
    if(x!==undefined) console.log(x);
    if(y!==undefined) console.log(y);
    console.log("without any parameter")
}
one();

//or
function Two(x:number=1,y:number=2):void
{
    console.log(x,y);
    
}
Two();

//5-	Create class Employee implement IEmployee using this object as implementation
interface IEmployee {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
      geo: {
        lat: string;
        lng: string;
      };
    };
  }
  
  class Employee implements IEmployee {
    id: number;
    name: string;
    email: string;
    private _username: string;
    public address: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
      geo: {
        lat: string;
        lng: string;
      };
    };
  
  
    constructor(emp: IEmployee) {
      this.id = emp.id;
      this.name = emp.name;
      this._username = emp.username;
      this.email = emp.email;
      this.address = emp.address;
    }
  
    get username(): string {
      return this._username;
    }
  
   
  }
  
  const emp: IEmployee = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496"
      }
    }
  };
  
 
  
  
  // 6-	Create class manager inherit from employee class and Create a function to view employee address
  class Manager extends Employee {
    constructor(emp: IEmployee) {
      super(emp);
    }
  
    viewAddress(): void {
      console.log(`Address: ${this.address.street}, ${this.address.suite}, ${this.address.city}, ${this.address.zipcode}`);
    }
  }

  const manager = new Manager(emp);
  manager.viewAddress();







  // 7-	Implement the following diagram 

interface IAccount {
    Date_of_opening: String;
    addCustomer: () => void;
    removeCustomer: () => void;
  }
  
  abstract class Account implements IAccount {
    Acc_no: number;
    Balance: number;
    Date_of_opening: String;
  
    constructor(Acc_no: number, Balance: number, Date_of_opening: string) {
      this.Acc_no = Acc_no;
      this.Balance = Balance;
      this.Date_of_opening = Date_of_opening;
    }
  
    addCustomer(): void {
      console.log("add");
    }
  
    removeCustomer(): void {
      console.log("remove");
    }
  
    abstract debitAmount(): number;
    abstract CreditAmount(): number;
    abstract getBalance(): number;
  }
  
  class Saving_Account extends Account {
    min_balance: number;
    constructor(Acc_no: number, Balance: number, min_balance: number, Date_of_opening: string) {
      super(Acc_no, Balance, Date_of_opening);
      this.min_balance = min_balance;
    }
  
    debitAmount(): number {
      return 0;
    }
  
    CreditAmount(): number {
      return 0;
    }
  
    getBalance(): number {
      return this.Balance;
    }
  }
  class Current_Account extends Account {
    min_balance: number;
    Interest_rate: number;
  
    constructor(min_balance: number,Acc_no: number, Balance: number, Interest_rate: number, Date_of_opening: string) {
      super(Acc_no, Balance, Date_of_opening);
      this.Interest_rate = Interest_rate;
      this.min_balance=min_balance;
    }
  
    debitAmount(): number {
      return 0;
    }
  
    CreditAmount(): number {
      return 0;
    }
  
    getBalance(): number {
      return this.Balance;
    }
  }