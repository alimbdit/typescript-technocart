{
    // Asynchronous typescript
    // promise  (resolve/reject)


    // * getting data using fetch

    type ToDos = {
        id: number;
        userId: number;
        title: string;
        completed: boolean;
    }

    const getToDo = async ():Promise<ToDos> => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data:ToDos = await response.json();
        return data;
        // console.log(data);
    }

    getToDo();



    // * simulate custom promise to getting data

    const createPromise = (): Promise<string> => {
        return new Promise<string>((resolve, reject) => {
            const data: string = 'something';
            if (data) {
                resolve(data);
            } else {
                reject('failed to load data')
            }
        })
    }


    // * calling create promise function
    const showData = async (): Promise<string> => {
        const data: string = await createPromise();
        // console.log(data)
        return data;
    }

    showData();

    // promise for boolean;
    const createPromiseB = (): Promise<boolean> => {
        return new Promise<boolean>((resolve, reject) => {
            const data: boolean = true;
            if (data) {
                resolve(data)
            } else {
                reject('failed to load data')
            }
        });
    }

    const showDataB = async (): Promise<boolean> => {
        const data: boolean = await createPromiseB();
        return data;
    }

    showDataB();


    // !   promise for object data

    type User = { id: number; name: string }

    const createPromiseObj = (): Promise<User> => {
        return new Promise<User>((resolve, reject) => {
            const obj: User = { id: 2578, name: 'amir' };
            if (obj) {
                resolve(obj)
            } else {
                reject('failed to load data')
            }
        })
    }

    const showDataObj = async (): Promise<User> => {
        const data: User = await createPromiseObj();
        return data;
    }

    showDataObj();








    // 
}