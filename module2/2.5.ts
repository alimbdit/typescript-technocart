{

    // * function with generics

    const createArray = (param: string): string[] => {
        return [param];
    }
    const result1 = createArray('bangladesh');


    // ! generic in function
    const createArrayWithGeneric = <T>(param: T): T[] => {
        return [param];
    }

    const result2 = createArrayWithGeneric<string>('bangladesh');

    // ^ type alias
    type UserAliasType = {
        id: number;
        name: string;
    }


    const result3 = createArrayWithGeneric<UserAliasType>({
        id: 5854,
        name: 'Faizal'
    })


    // ^ generic with interface
    interface UserInterface {
        id:number;
        name:string;
    }

    const result4m = createArrayWithGeneric<UserInterface>({
        id: 46465,
        name: 'apna time ayega',
    });




    // ! generic in tuple

    const createGenericWithTuple = <T,Q>(param1:T, param2:Q): [T,Q] => {
        return [param1, param2];
    }

    const resultTuple = createGenericWithTuple<string, {name:string}>('bangladesh', {name:'Asia'});



    //! generic with spread(...)

    const addCourseToStudent = <T>(student:T)=> {
        const course = 'Next level web development';
        return {
            ...student,
            course,
        }
    }

    const student1 = addCourseToStudent<{name:string; email:string; devType:string}>({name:'Mr.x', email:'x@mail.com', devType:'NLWD'});

    interface Student {
        name:string;
        email:string;
        hasWatch:string
    }
    const student2 = addCourseToStudent<Student>({name:'Mr.Y', email:'y@mail.com', hasWatch:'Apple Watch'});





    // 
}