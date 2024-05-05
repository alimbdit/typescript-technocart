{
    // interface - generic

    interface Developer<T, X = null> {
        name: string;
        computer: {
            brand: string;
            model: string;
            releaseYear: number;
        };
        smartWatch: T;
        bike?: X;
    }

    type EmilabWatch = {
        brand: string;
        model: string;
        display: string
    }


    const poorDeveloper: Developer<EmilabWatch> = {
        name: 'mezba',
        computer: {
            brand: 'asus',
            model: 'AS-005UE',
            releaseYear: 2014,
        },
        smartWatch: {
            brand: 'Emilab',
            model: 'AT45PO9',
            display: 'IPS'
        },
    };


    //! using generic for richDeveloper

    interface AppleWatch {
        brand: string;
        model: string;
        heartTracker: boolean;
        sleepTracker: boolean;
    }

    interface Bike {
        brand:string;
        model:string;
        capacity:string
    }

    const richDeveloper: Developer<AppleWatch, Bike> = {
        name: 'arif',
        computer: {
            brand: 'HP',
            model: 'H-2255XU',
            releaseYear: 2019,
        },
        smartWatch: {
            brand: 'Apple',
            model: 'A-W956F',
            heartTracker: true,
            sleepTracker: true,
        },
        bike: {
            brand: 'Yamaha',
            model: 'FZX',
            capacity: '200cc'
        }
    }






    // 
}