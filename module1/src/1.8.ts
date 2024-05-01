{


    // destructuring 

    // object

    const user = {
        id: '3456',
        name: {
            firstName: 'Mezbaul',
            middleName: 'Abedin',
            lastName: 'Persian'
        },
        contactNo: '017000000',
        address: 'Uganda'
    }

    const { contactNo, name: { middleName: midName }, address } = user;  //here midName is the alias of middleName and in destructuring can't use explicit type


    // Array destructuring

    const myFriends = ['chandler', 'joey', 'ross', 'rachel', 'michel', 'monika'];

    // const [a, b, bestFriend, ...rest] = myFriends;
    const [,,bestFriend,...rest]=myFriends //here ,, is used for when not need to use first two element of object




}