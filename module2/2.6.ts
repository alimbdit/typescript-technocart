{
    //*  Constrains in typescripts with generic
    // ! constrain means forcefully holds parameter type and specify the properties


    const addCourseToStudent = <T extends { id: number; name: string; email: string }>(student: T) => {
        const course = 'Next level web development';
        return {
            ...student,
            course
        }
    }


    const student1 = addCourseToStudent({ id: 111, name: 'Mr.x', email: 'x@mail.com', devType: 'NLWD' })
    const student2 = addCourseToStudent({ id: 222, name: 'Mr.Y', email: 'y@mail.com', hasWatch: 'Apple Watch' })

    const student3 = addCourseToStudent({ id: 333, name: 'mr.z', email: 'z@mail.com', emni: 'emni' })


    // ! here by using extend after T has added and object's property type which must be added during function calling and it is called constrain.  
    const addCourseToStudent1 = <T extends {id:number; name:string; email:string}>(student:T) => {
        const course ='Next level web development';
        return {
            ...student,
            course
        }
    }
















    // 
}