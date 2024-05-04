{

    // Type alias

    type Student = {
        name: string;
        age: number;
        contuctNo?: string;
        gender: string;
        address: string
    }


    const student1: {
        name: string;
        age: number;
        gender: string;
        contuctNo: string;
        address: string
    } = {
        name: 'Raju',
        age: 52,
        gender: 'Male',
        contuctNo: '2122122',
        address: 'Ugnda'
    }

    const student2: Student = {
        name: 'Anarul',
        age: 27,
        gender: 'Male',
        address: 'Dhaka'

    }


    type UserName = string;
    type IsAdmin = boolean;

    const user: UserName = 'raju'
    const admin: IsAdmin = true

    type Add = (num1: number, num2: number) => number;

    const add: Add = (num1, num2) => num1 + num2;





}