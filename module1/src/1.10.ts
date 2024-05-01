{
    // 
    // union and intersection for type declaration

    // union ---> | for union custom type declaration
    // string template literal

    // type FrontendDeveloper = 'fakibazDeveloper' | 'juniorDeveloper';
    // type FullStackDeveloper = 'frontendDeveloper' | 'expertDeveloper';

    // type developer = FrontendDeveloper | FullStackDeveloper;

    // const newDeveloper: FrontendDeveloper = 'juniorDeveloper';

    // type User = {
    //     name: string;
    //     email?: string;
    //     gender: 'male' | 'female';
    //     bloodGroup: 'O+' | 'A+' | 'AB+'
    // }

    // const user: User = {
    //     name: 'Mezba',
    //     gender: 'male',
    //     bloodGroup: 'A+',
    // }



    // for intersection need to use &

    type FrontendDeveloper = {
        skills: string[];
        designation1: 'frontendDeveloper';
    }

    type BackendDeveloper = {
        skills: string[];
        designation2: 'backendDeveloper';
    }

    type FullStackDeveloper = FrontendDeveloper & BackendDeveloper;

    // const developer:FrontendDeveloper&BackendDeveloper ={
    //     skills:['HTML', 'CSS', 'EXPRESS'],
    //     designation1:'frontendDeveloper',
    //     designation2:"backendDeveloper",
    // }


    const developer: FullStackDeveloper = {
        skills: ['HTML', 'CSS', 'EXPRESS'],
        designation1: 'frontendDeveloper',
        designation2: 'backendDeveloper',
    }

    // 
}