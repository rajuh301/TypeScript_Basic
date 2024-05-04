{
    // function with generics 
    const createArrayWithGeneric = <T>(parms: T): T[] => {
        return [parms]

    }

    const result = createArrayWithGeneric<string>('Bd')
    const result2 = createArrayWithGeneric<number>(222)



    const result3 = createArrayWithGeneric<{
        id: number,
        name: string
    }>({
        id: 2222,
        name: 'MR.X'
    })



    interface user {
        id: number,
        name: string
    }
    const result4 = createArrayWithGeneric<user>({
        id: 2222,
        name: 'MR.X'
    })


    // With tuple 

    const createArrayWithTuple = <T, Q>(parms1: T, parms2: Q): [T, Q] => {
        return [parms1, parms2];
    }

    const result5 = createArrayWithTuple<string, number>('Bd', 102)

    const result6 = createArrayWithTuple<string, {
        name: string,
        area: number
    }
    >("Bangladesh", {
        name: "Asia",
        area: 222222
    })




    const addCoursToStudent = <T>(student: T) => {
        const course = "Next Lavel Delevoper"
        return {
            ...student,
            course

        }
    }

    const student1 = addCoursToStudent({
        name: 'Raju',
        age: 23,
        email: 'raju@gmail.com'
    })

    const student2 = addCoursToStudent({
        name: 'Raju hassan',
        age: 35,
        email: 'rajuh@gmail.com',
        watch:{
            name: 'apple',
            brand:'Apple',
            price: 455
        }
    })

    //
}