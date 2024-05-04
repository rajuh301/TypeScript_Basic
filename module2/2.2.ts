{
    // interface


    // ----------------Using Type ---------------
    type User1 = {
        name: string;
        age: number
    }

    const user: User1 = {
        name: 'Raju',
        age: 222
    }


    type UserWithRole1 = User1 & { role: string };
    const user3: UserWithRole1 = {
        name: "raju",
        age: 22,
        role: "Manager"
    }
    // -------------------Using interface-------------

    interface User2 {
        name: string;
        age: number
    }
    const user1: User2 = {
        name: 'Raju',
        age: 222
    }


    interface UserWithRole2 extends User2 {
        role: "Manager"
    }


    // -------------- type / interface--------------

    // ---------- type
    type Roll1 = number[];
    const rollNumber1: Roll1 = [1, 2, 3]

    // ---------------------
    type Add1 = (num1: number, num2: number) => number
    const add1: Add1 = (num1, num2) => num1 + num2

    // ---------- interface
    interface Roall2 {
        [index: number]: number;
    }
    const rollNumber2: Roall2 = [1, 2, 3]

    // -----------------------
    interface Add2 {
        (num1: number, num2: number): number
    }
    const add2: Add2 = (num1, num2) => num1 + num2



    //
}