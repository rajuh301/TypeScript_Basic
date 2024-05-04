{
    //generic type

    type GenericArray<t> = Array<t>


    const roalNumber: number[] = [1, 2, 3];
    const roalNumber2: Array<number> = [1, 2, 3];
    const roalNumber3: GenericArray<number> = [1, 2, 3];

    const mentors: string[] = ['Mr.x', 'Mr.y', 'Mr.z'];
    const mentors2: Array<string> = ['Mr.x', 'Mr.y', 'Mr.z'];
    const mentors3: GenericArray<string> = ['Mr.x', 'Mr.y', 'Mr.z'];

    const boolineArray: boolean[] = [true, false, true];
    const boolineArray2: Array<boolean> = [true, false, true];
    const boolineArray3: GenericArray<boolean> = [true, false, true];


    const user: GenericArray<{ name: string, age: number }> = [
        {
            name: 'Raju',
            age: 27
        },
        {
            name: 'Rahad',
            age: 12
        }
    ]


    //Generic tuple

    type GenericTuple<X, Y> = [X, Y]

    const man: GenericTuple<string, string> = ['Mr.x', 'Mr.y'];


    type GenericTuple2<X, Y> = [X, Y]
    const userWithId: GenericTuple2<number, { name: string, email: string, ages: number, marrid: boolean }> = [12345, {
        name: 'Raju',
        email: 'rahuh301@gmail.com',
        ages: 55,
        marrid: false
    }]



    //

}