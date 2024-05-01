// Reference type ---> object

const user : {
    //company: 'Programming Hero'; //type literal types
    readonly company: string; // here readonly is access modifier
    firstName : string;
    middleName ?: string;
    lastName : string;
    isMarried : boolean;
} = {
    company: 'Programming Hero',
    firstName: 'Mezbaul',
    lastName: 'Abedin',
    isMarried: true
};

// user.company = 'PH';
user.firstName = 'Jhanker';