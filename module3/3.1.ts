{
    //

    //type assertion

    class Animal {
        constructor(public name: string, public species: string, public sound: string) { }
        makeSound() {
            console.log(`The ${this.name} says ${this.sound}`)
        }
    }

    const dog = new Animal("German Shepard Bhai", "dog", "Ghow Ghow");
    const cat = new Animal("Persian Bhai", "cat", "mou mou");


    dog.makeSound()
    cat.makeSound()


    //
}