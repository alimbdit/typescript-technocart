{
    // Mapped types


    const arrOfNumbers: number[] = [1, 5, 4];

    // const arrOfString:string[] = ['1','5','4'];

    const arrOfString: string[] = arrOfNumbers.map(number => number.toLocaleString());
    console.log(arrOfString);


    type AreaNumber = {
        height:number;
        width:number;
    }

    type Height = AreaNumber['height']  //~ look up type

    // type AreaString = {
    //     height:string;
    //     width:string;
    // }
    // * keyof AreaNumber => 'height' | 'width'

    type AreaString ={
        // [key in keyof AreaNumber] : boolean;
        [key in keyof AreaNumber] : string;  //! here key is used as index for mapping and keyof is used for getting all the key of AreaNumber
    }

    // ^  T => {height:string; Width:number}
    // ^ key => T['height'] | T['width']

    type AreaStringGeneric<T> = {
        [key in keyof T]:T[key];
    }

    const area1:AreaStringGeneric<{height:string;width:number}> = {
        height:'100',
        width:50,
    }
















    // 
}