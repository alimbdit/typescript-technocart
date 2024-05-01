{
    // type alias

    // type alias in object
    type Student = { //!--> here capital S of Student is for convention
        name: string;
        age: number;
        gender: string;
        contactNo?: string; //!---> here ? is for optional chaining
        address: string;
    }

    const student1: Student = {
        name: 'Mezba',
        age: 50,
        gender: 'male',
        contactNo: '017000000',
        address: 'ctg'
    };

    const student2: Student = {
        name: 'Mir',
        age: 70,
        gender: 'male',
        address: 'dhk'
    }

    const student3: Student = {
        name: 'Monica',
        age: 33,
        gender: 'female',
        address: 'jsr'
    }

    // Alias type for primitive data types
    type IsAdmin = boolean;
    type UserName = string;
    type ContactNo = number;

    const userName: UserName = "Mezbaul Abedin";
    const isAdmin: IsAdmin = true;
    const contactNo: ContactNo = 17000000124;


    // Alias type for function parameter
    type Add = (num1: number, num2: number) => number
    const add: Add = (num1, num2) => num1 + num2


    // 
}