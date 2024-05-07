{
    //& instanceof guard

    class Animal {
        name: string;
        species: string;

        constructor(name: string, species: string) {
            this.name = name;
            this.species = species;
        }
        makeSound() {
            console.log('I am making sound')
        }
    }

    class Dog extends Animal {
        constructor(name: string, species: string) {
            super(name, species)
        }
        makeBark() {
            console.log('I am barking.')
        }
    }

    class Cat extends Animal {
        constructor(name: string, species: string) {
            super(name, species);
        }
        makeMeaw() {
            console.log('I am meawing.')
        }
    }

    // * making function for using instanceof for type guard.
    //^ here Animal as the parameter of the function works as type

    const getAnimal = (animal: Animal) => {
        if (animal instanceof Dog) {
            animal.makeBark();
        } else if (animal instanceof Cat) {
            animal.makeMeaw();
        } else {
            animal.makeSound();
        }
    }

    const dog = new Dog('Dog vai', 'Dog');
    const cat = new Cat('Cat vai', 'Cat');
    const car = new Animal('Biltos', 'human');

    //~  getAnimal(dog);
    //~  getAnimal(cat);
    //~  getAnimal(car);




    // ! smart way to handle instance0f guard

    const isDog = (animal: Animal): animal is Dog => {
        return animal instanceof Dog;
    }

    const isCat = (animal: Animal): animal is Cat => {
        return animal instanceof Cat
    }



    const getAnimalWise = (animal: Animal) => {
        if (isDog(animal)) {
            animal.makeBark();
        } else if (isCat(animal)) {
            animal.makeMeaw();
        } else {
            animal.makeSound();
        }
    }


    getAnimalWise(dog);
    getAnimalWise(cat);
    getAnimalWise(car);




















    // 
}