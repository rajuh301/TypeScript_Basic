{
    // conditional type

    type a1 = string;
    type b1 = undefined;


    type x = a1 extends null ? true : b1 extends undefined ? undefined : any;



    type Shekh = {
        bike: string,
        car: string,
        ship: string
    }


    //How to find bike / car / ship 
    // use keof
    type CheckVehicle<T> = T extends keyof Shekh ? true : false;

    type HasShip = CheckVehicle<'ship'>


    //
}