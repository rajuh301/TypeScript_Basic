{
    // polymorphisom

    class Persone {
        getSleep() {
            console.log(`I am sleeping 8 houre per day`);
        }
    }

    class Student extends Persone {
        getSleep() {
            console.log(`I am sleeping 7 houre per day`);
        }
    }

    class Developer extends Persone {
        getSleep() {
            console.log(`I am sleeping 6 houre per day`);
        }
    }

    const getSleepingHoure = (param: Persone) => {
        param.getSleep()
    }

    const person1 = new Persone();
    const person2 = new Student();
    const person3 = new Developer();

    getSleepingHoure(person1)
    getSleepingHoure(person2)
    getSleepingHoure(person3)

    // pi* r* r

    class Shape {
        getArea(): number {
            return 0
        }
    }

    class Circle extends Shape {
        radius: number;
        constructor(radius: number) {
            super();
            this.radius = radius;
        }
        getArea(): number {
            return Math.PI * this.radius * this.radius
        }
    };

    // height * width
    class Retangle extends Shape {
        height: number;
        width: number
        constructor(height: number, width: number) {
            super();
            this.height = height;
            this.width = width
        }
        getArea(): number {
            return this.height * this.width
        }
    };


    const getShapeArea = (param: Shape) => {
        console.log(param.getArea())
    }

    const shape1 = new Shape()
    const shape2 = new Circle(10)
    const shape3 = new Retangle(20, 20)


getShapeArea(shape1)

    //
}