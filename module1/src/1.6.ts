// Function

// Normal Function with difault value
function add(num1:number, num2:number = 10) : number {
    return num1 + num2
}

// Arrow function
const addArrow = (num1:number, num2:number) : number => num1+num2;



// function in  object is called method

const poorUser = {
    name: 'mezba',
    balance: 0,
    addBalance(balance:number):string{   // anonymous normal function and here string is the return type
        return `My new balance is : ${this.balance + balance}`;
    }
}


//  callback

const arr : number[] = [1,4,10];

const newArr : number[] = arr.map((elem:number):number=>elem*elem);