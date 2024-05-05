{
    // interface 


    //^ type alias in object
    type User1 = {
        name: string;
        age: number;
    }

    const user1: User1 = {
        name: 'alim',
        age: 25,
    }

    //^ interface in object

    interface User2 {
        name: string;
        age: number;
    }
    const user2: User2 = {
        name: 'mezba',
        age: 35
    }

    // extends the alias type

    type UserWithRole1 = User1 & { role: string }

    const userWithRole1: UserWithRole1 = {
        name: 'arif',
        age: 22,
        role: 'wp developer'
    }

    // extends with interface
    interface UserWithRole2 extends User2 {
        role: string;
    }
    const userWithRole2: UserWithRole2 = {
        name: 'asad',
        age: 23,
        role: 'manager',
    }

    // can extend using type alias in interface

    interface UserWithRole3 extends User1 {
        role: string
    }


    // 
    // ^ interface can not be user in primitive data, interface only can be used in non-primitive data.
    // 

    const rollNumber: number = 222;

    // 
    // ! js ----> object , array ----> object
    // ^ interface and type alias in array
    // 

    type RollNumber1 = number[];

    const rollNumber1: RollNumber1 = [1, 2, 3, 4];

    // interface
    interface RollNumber2 {
        [index: number]: number;
    }

    const rollNumber2: RollNumber2 = [1, 2, 3, 4, 5];


    // 
    // ^ interface and type alias in function
    // 

    // * type alias in function
    type Add1 = (num1: number, num2: number) => number;


    const add1: Add1 = (num1, num2) => {
        return num1 + num2;
    }


    // * interface in function
    interface Add2 {
        (num1: number, num2: number): number
    }
    const add2: Add2 = (num1, num2) => num1 + num2


    // 
}