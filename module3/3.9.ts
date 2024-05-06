{
    // abstraction  : 1 interface  2.abstract

    //idea 

    interface Vehicle1 {
        StartEngine(): void;
        StopEngine(): void;
        Move(): void
    }

    //Real implemention
    class Car1 implements Vehicle1 {
        StartEngine(): void {
            console.log(`I am starting car engine`)
        };
        StopEngine(): void {
            console.log(`I am Stoping the care engine`)
        };
        Move(): void {
            console.log(`I am moveing the care`)
        }
        test() {
            console.log(`I am just testing`)
        }
    }


    const toyota = new Car1();
    toyota.StartEngine();
    toyota.StopEngine();
    toyota.test();



    // abstract class

    abstract class Car2 {
        abstract StartEngine(): void

        abstract StopEngine(): void

        abstract Move(): void

        test() {
            console.log(`I am just testing`)
        }
    }


    class ToyotaCar extends Car2 {
        StartEngine(): void {
            console.log('I am starting the car engine')
        }
        StopEngine(): void {
            console.log('I am stoping the care engine')
        }
        Move(): void {
            console.log('I am moveing the care')
        }
    }

    // const hondaCar = new Car2()
    // hondaCar.






    //
}