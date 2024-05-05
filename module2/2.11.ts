{
    //* utility types

    // ^ pick utility

    type Person = {
        name: string;
        age: number;
        email?: string;
        contactNo: string;
    }

    //& for pick type of the name and age property
    type NameAge = Pick<Person, "name" | "age">;


    //& for omitting type of the name and age property
    type ContactInfo = Omit<Person, "name" | "age">;


    //& Require for all the types as required
    type PersonRequired = Required<Person>


    //& partial for all the types as optional
    type PersonPartial = Partial<Person>;


    //& Readonly for all the types as read-only that means can only be read never be changed
    type PersonReadonly = Readonly<Person>;

    const person1: PersonReadonly = {
        name: 'mr. 9',
        age: 150,
        contactNo: '017'
    }

    //! person1['name'] = 'mr. 10';


    //& Record for assign all the properties type as dynamically. initially object will be empty. in Record first parameter always will be string.
    // type MyObj = {
    //     a:string;
    //     b:string;
    // } ;

    type MyObj = Record<string, string>;
    // type EmptyObj = Record<string,unknown>;
    const emptyObj:Record<string, unknown> = {}

    // const obj1:MyObj = {
    //     a:"aa",
    //     b:"bb",
    //     c:'cc',
    //     d:5,
    // }
    const obj1:MyObj = {
        a:"aa",
        b:"bb",
        c:'cc',
        //* d:5,
    }





















    // 
}