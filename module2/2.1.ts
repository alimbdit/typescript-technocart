{
    // type assertion

    // let anything = 'I am a developer';

    let anything: any;
    anything = 'I am a web developer';
    // here keyword as is used for type assertion

    //! (anything as string).  

    //after using . will recommend automatically the methods of the type

    anything = 222;

    //! (anything as number).





    const kgToGm = (value: string | number | undefined): string | number | undefined => {
        if (typeof value === 'string') {
            const converted = parseFloat(value);
            return `The converted value is : ${converted * 1000}`;
        }
        if (typeof value === 'number') {
            return value * 1000
        }
    }

    const result1 = kgToGm('100');
    const result2 = kgToGm(100);
    // console.log(result1);


    type CustomError = {
        message:string;
    }
    
    try{

    }catch(error){
        console.log((error as CustomError).message)
    }





    // 
}