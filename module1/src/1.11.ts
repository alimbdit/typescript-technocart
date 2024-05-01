{
    // ternary operator

    const age: number = 15;

    // if (age>=18){
    //     console.log('adult')
    // }
    // else{
    //     console.log('not adult')
    // }

    const isAdult = age >= 18 ? 'adult' : "not adult";
    // console.log({isAdult})



    // nullish coalescing operator 
    // it is use only for null and undefined data
    // null / undefined ---> decision making

    const isAuthenticated:null = null
    // const isAuthenticated = ''

    const result1 = isAuthenticated ?? 'Guest';
    const result2 = isAuthenticated ? isAuthenticated : 'Guest'
    // console.log({ result1 }, { result2 })




    // optional chaining

    type User = {
        name:string;
        email?:string;
        address:{
            city:string;
            road:string;
            presentAddress:string;
            permanentAddress?:string;
        }
    }

    const user:User = {
        name:'Alim',
        address:{
            city:'dhk',
            road:'75A',
            presentAddress:'Mirpur DOHS'
        }
    }

    const userPermanentAddress = user?.address?.permanentAddress ?? 'no permanentAddress';

    console.log({userPermanentAddress})



    // 
}