{
    //! type guard ----> used typeof

    type AlphaNumeric = string | number;
    const add = (param1: AlphaNumeric, param2: AlphaNumeric): AlphaNumeric => {
        if (typeof param1 === 'number' && typeof param2 === 'number') {
            return param1 + param2;
        } else {
            return param1.toString() + param2.toString();
        }
    }
    const result1 = add(2, 3);
    const result2 = add(2, "3");
    const result3 = add("52", "3");

    // console.log(result1,result2,result3);



    //!  type guard -----------> using in


    type NormalUser = { name: string; }

    type AdminUser = {
        name: string;
        role: string;
    };

    const getUser =(user:NormalUser|AdminUser) => {
       if('role' in user){
        console.log(`My name is ${user.name} and I am an ${user.role}`);
       }else{
        console.log(`My name is ${user.name}`);
       }
    }

    const normalUser:NormalUser = {name:'Mr. Bean'}
    getUser(normalUser);

    const adminUser:AdminUser = {name:"Mr. Director",role:'Admin'}
    getUser(adminUser);

















    // 
}