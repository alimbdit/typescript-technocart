{
    // 

    // nullable type
    const searchName = (value: string | null) => {
        if (value) {
            console.log('Searching');
        }
        else {
            console.log('There is nothing to Search');
        }
    }

    searchName(null);




    // unknown typeof

    const speedInMeterPerSecond = (value: unknown) => {
        if (typeof value === 'number') {
            const result = (value * 1000) / 3600;
            console.log(`${result} ms^-1`)
        }else if(typeof value === 'string'){
            const valueInArray = value.split(' ');
            const result = (parseFloat(valueInArray[0]))*1000/3600
            console.log(`${result} ms^-1`)
        }
        else{
            console.log('wrong input')
        }
    }

    // speedInMeterPerSecond(1000);
    // speedInMeterPerSecond(`1000 Kmh^-1`);
    // speedInMeterPerSecond(null);



    // never type
    // when we can know that the function never return any value then we can use never type as return type. and never can use in throw error function

    const throwError = (msg:string):never => {
        throw new Error(msg)
    }

    throwError('muskill se error ho geya!')








    // 
}