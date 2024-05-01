{

    //  Spread operator
    // Rest Operator


    // learn spread operator
    const friends1:string[] = ['abul', 'mofiz', 'modon'];
    // const friends2:string[] = [...friends1]
    const friends2:string[] = ['tonmoy', 'nahid', 'sujon'];
    friends1.push(...friends2);


    const mentors1 = {
        typescript:'mezba',
        redux:'mir',
        dbms:'hossen'
    }

    const mentors2 = {
        prisma:'nahid',
        next:'kamal',
        cloud:'tonmoy'
    }

    const mentorsList={
        ...mentors1,
        ...mentors2
    }


    // learn rest operator

    const greetFriends = (...friends:string[]) => {
        friends.forEach((friend:String) => console.log(`Hi ${friend}`))
    }
greetFriends('abul','mal','abdul','muhid',)

}