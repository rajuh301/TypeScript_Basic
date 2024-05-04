{
    // oop - inheritence


    class Persone {
        name: string;
        age: number;
        address: string;

        constructor(name: string, age: number, address: string) {
            this.name = name;
            this.age = age;
            this.address = address
        }
        getSleep(numberOfHours: number) {
            console.log(`${this.name} will sleep for ${numberOfHours}`)
        }
    }




    class Student extends Persone {

        constructor(name: string, age: number, address: string) {
            super(name, age, address)
        }

    }

    const student1 = new Student("Mr Student", 21, "Uganda")
    student1.name

    // -------------- Teacher Section -------------

    class Teacher extends Persone {

        designation: string

        constructor(name: string, age: number, address: string, designation: string) {
            super(name, age, address)
            this.designation = designation
        }

        takeClass(numberOfClass: number) {
            console.log(`${this.name} will take ${numberOfClass}`)
        }
    }

    const teacher = new Teacher("Mr Teacher", 40, "Uganda", "Profetcher")
    teacher.age







    //
}