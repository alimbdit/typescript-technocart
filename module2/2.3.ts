{

    //! Generic type

    // type GenericArray = number[];
    type GenericArray<T> = Array<T>;  // here T is used for creating dynamically type and reusable

   const userId:Array<number> = [25,36,45,95];


    // const rollNumber: number[] = [3, 4, 5, 6];
    // const rollNumber: GenericArray = [3, 4, 5, 6];
    const rollNumber: GenericArray<number> = [3, 4, 5, 6];

    // const mentors = ['mr.x', 'mr.y', 'mr.z'];
    // const mentors: Array<string> = ['mr.x', 'mr.y', 'mr.z'];
    const mentors: GenericArray<string> = ['mr.x', 'mr.y', 'mr.z'];

    // const boolArray:GenericArray = [true, false, true];
    // const boolArray: Array<boolean> = [true, false, true];
    const boolArray: GenericArray<boolean> = [true, false, true];


    // ! Generic in Array of objects



    // const user : GenericArray<object> = [
    //     {
    //         name: 'mezba',
    //         age: 25
    //     },
    //     {
    //         name: 'jharkar',
    //         age: "35"
    //     },
    //     {
    //         role:'admin'
    //     }
    // ]


    const user: GenericArray<{ name: string, age: number }> = [
        {
            name: 'mezba',
            age: 25
        },
        {
            name: 'jharkar',
            age: 35
        },

    ]


    const add = (x: number, y: number) => x + y;


    // ! Generic in tuples

    //  normal tuples
    // const manush:[string,string] = ['mr.x', 'mr.y'];

    type GenericTuple<X, Y> = [X, Y];

    const manush: GenericTuple<string, string> = ['mr.x', 'mr.y'];

    const userWithID: GenericTuple<number, { name: string, email: string }> = [123, { name: 'asad', email: 'asad@mail.com' }]




    // type GenericTuple1<X, Y> = [X, Y];

    // const developer: GenericTuple1<number, { name: string, email: string }> = [1234, { name: 'arif', email: 'arif@gamil.com'}]


    // type GenericArray1<T> = Array<T>



    // 
}