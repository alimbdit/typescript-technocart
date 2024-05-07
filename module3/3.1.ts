{
    // oop -class

    class Animal {
       public name:string;
       public species:string;
       public sound:string;

        constructor(name:string,species:string,sound:string){
            this.name=name;
            this.species=species;
            this.sound=sound;
        }
        makeSound(){
            console.log(`The ${this.name} says ${this.sound}`)
                    }
    }

    const dog = new Animal('German Shaperd', 'dog', 'ghew ghew');
    const cat = new Animal("jangli billi",'cat','meaw meaw');

    // cat.makeSound();
    // dog.makeSound();



    //*  again with simplicity

    class Car {
        constructor(public brand:string, public model:string, public year:number){};
        makeDeliver(){
            console.log(`The model ${this.model} of ${this.brand} is ready to deliver.`)
        }
    }

    const bus = new Car('Volvo','HN5569',  2024);
    const personalCar = new Car('Roles Royals','RR-8954', 2020);

    bus.makeDeliver();
    personalCar.makeDeliver();



















    // 
}