{
    // instanceof guard


    class Animal {
        name: string;
        species: string;

        constructor(name: string, species: string) {
            this.name = name;
            this.species = species
        }

        makeSound() {
            console.log('I am making sound')
        }
    }


    class Dog extends Animal {
        constructor(name: string, species: string) {
            super(name, species)

        }
        makeBerk() {
            console.log('I am barking')
        }
    }
    class Cat extends Animal {
        constructor(name: string, species: string) {
            super(name, species)

        }
        makeMau() {
            console.log('I am Mauing')
        }
    }

    // For smart way using function 

    const isDog = (animal: Animal): animal is Dog => {
        return animal instanceof Dog
    }
    const isCat = (animal: Animal): animal is Cat => {
        return animal instanceof Cat
    }

    const getAnimal = (animal: Animal) => {
        if (isDog(animal)) {
            animal.makeBerk();
        } else if (isCat(animal)) {
            animal.makeMau()
        } else {
            animal.makeSound()
        }
    }

    const dog = new Dog('Dog is', 'dog')
    const cat = new Cat('Cat is', 'cat')


    getAnimal(cat)



    //
}