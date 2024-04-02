//1-	Create array that accept  number only
let arr = [];
//2-	Create array that accept string and number only and print all items
let arr2;
arr2 = [1, "omnia"];
console.log(arr2);
//3-	Create a variable that accept number and Boolean only 
let x;
//4-	Create function with two parameter try to call it without any parameter “handling”
function one(x, y) {
    if (x !== undefined && y !== undefined)
        console.log(x, y);
    if (x !== undefined)
        console.log(x);
    if (y !== undefined)
        console.log(y);
    console.log("without any parameter");
}
one();
//or
function Two(x = 1, y = 2) {
    console.log(x, y);
}
Two();
class Employee {
    constructor(emp) {
        this.id = emp.id;
        this.name = emp.name;
        this._username = emp.username;
        this.email = emp.email;
        this.address = emp.address;
    }
    get username() {
        return this._username;
    }
}
const emp = {
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
    constructor(emp) {
        super(emp);
    }
    viewAddress() {
        console.log(`Address: ${this.address.street}, ${this.address.suite}, ${this.address.city}, ${this.address.zipcode}`);
    }
}
const manager = new Manager(emp);
manager.viewAddress();
class Account {
    constructor(Acc_no, Balance, Date_of_opening) {
        this.Acc_no = Acc_no;
        this.Balance = Balance;
        this.Date_of_opening = Date_of_opening;
    }
    addCustomer() {
        console.log("add");
    }
    removeCustomer() {
        console.log("remove");
    }
}
class Saving_Account extends Account {
    constructor(Acc_no, Balance, min_balance, Date_of_opening) {
        super(Acc_no, Balance, Date_of_opening);
        this.min_balance = min_balance;
    }
    debitAmount() {
        return 0;
    }
    CreditAmount() {
        return 0;
    }
    getBalance() {
        return this.Balance;
    }
}
class Current_Account extends Account {
    constructor(min_balance, Acc_no, Balance, Interest_rate, Date_of_opening) {
        super(Acc_no, Balance, Date_of_opening);
        this.Interest_rate = Interest_rate;
        this.min_balance = min_balance;
    }
    debitAmount() {
        return 0;
    }
    CreditAmount() {
        return 0;
    }
    getBalance() {
        return this.Balance;
    }
}
