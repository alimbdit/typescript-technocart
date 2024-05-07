{

    //! abstraction : 1.interface 2.abstract


    // &  idea
    interface Vehicle1 {
        startEngine(): void;
        stopEngine(): void;
        move(): void;
    }

    //& real implementation

    class Car implements Vehicle1 {
        startEngine() {
            console.log('I am starting the engine.')
        };
        stopEngine(): void {
            console.log('I am stopping the engine.')
        };
        move(): void {
            console.log('I am moving the engine')
        };
        fueling(): void {
            console.log('I am fueling.')
        }

    }

    // & instance

    const toyotaCar = new Car();
    // toyotaCar.startEngine();
    // toyotaCar.stopEngine();
    // toyotaCar.move();



    // *------------------------------------
    // !   abstract class (leader class)
    // *------------------------------------


    // &  get idea
    abstract class Vehicle2 {
        abstract startEngine(): void;
        abstract stopEngine(): void;
        abstract move(): void;
        test(): void {
            console.log('I am just testing')
        }
    }


    // & implementation
    class Car2 extends Vehicle2 {
        startEngine(): void {
            console.log('I am starting the engine.')
        };

        stopEngine(): void {
            console.log('I am stopping the engine.')
        };

        move(): void {
            console.log('I am moving the car.')
        }
    }


    const hondaCar = new Car2;
    hondaCar.startEngine();
    hondaCar.stopEngine();
    hondaCar.move();











    // 
}