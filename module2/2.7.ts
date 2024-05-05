{
    // ^ constrain using keyof operator

    type Vehicle = {
        bike: string;
        car: string;
        ship: string;
    }

    type Owner = 'bike' | 'car' | 'ship';

    // * in here we can easily make union of the types of Vehicle by using 'keyof' keyword. Owner2 and Owner work as the same way. and keyof make easy to use.

    type Owner2 = keyof Vehicle;

    // const person1:Owner2 ="" //^ -------> here automatically refer the key of Vehicle


    // const getPropertyValue1 = <X, Y extends 'name' | 'age' | 'address'>(obj: X, key:Y ) => {
    //     return obj[key];
    // }


    // ! in here extend is used for constrain and keyof is used for the union of the property key of object X;
    const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
        return obj[key];
    }


    const user = {
        name: 'mr. arif',
        age: 25,
        address: 'dhk'
    }


    const result1 = getPropertyValue(user, 'name');
    //~ as first argument is user here second argument of the function should be the key of user like 'name' or 'age' or 'address'

    // user['age'] ---------> 25


    const car = {
        model: 'Toyota 100',
        year: 2020
    };

    const result2 = getPropertyValue(car, 'model');
    //~ as first argument is car here second argument of the function should be the key of car like 'model' or 'year'



















    // 
}