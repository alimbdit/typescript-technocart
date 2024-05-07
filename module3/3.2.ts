{
    // oop -- inheritance

    class Person {
        name: string;
        age: number;
        address: string;

        constructor(name: string, age: number, address: string) {
            this.name = name;
            this.age = age;
            this.address = address;
        }

        getSleep(numberOfHours: number) {
            console.log(`${this.name} get sleep ${numberOfHours} hours everyday.`)
        }
    }

    class Student extends Person {
        constructor(name: string, age: number, address: string) {
            super(name, age, address);
        };
    }

    const student1 = new Student('mr.9', 18, 'uganda');
    student1.getSleep(10);

    class Teacher extends Person {
        designation: string;

        constructor(name: string, age: number, address: string, designation: string) {
            super(name,age,address)
            this.designation = designation;
        }; 

        takeClass(numberOfClass: number) {
            console.log(`${this.name} takes ${numberOfClass} classes everyday`)
        }
    }


    const teacher1 = new Teacher('mr.y', 40, 'Nigeria', 'professor');
    teacher1.takeClass(5);
    teacher1.getSleep(8);




























    // 
}