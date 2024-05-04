{
    // constraints

    const addCoursToStudent = <T extends { id: number, name: string, email: string }>(student: T) => {
        const course = "Next Lavel Delevoper"
        return {
            ...student,
            course

        }
    }

    const student3 = addCoursToStudent({id: 522, name:'Mr.z', email: 'z@gmail.com', emni: 'Emni' })

    const student1 = addCoursToStudent({
        id: 56652,
        name: 'Raju',
        age: 23,
        email: 'raju@gmail.com'
    })

    const student2 = addCoursToStudent({
        id: 56655,
        name: 'Raju hassan',
        age: 35,
        email: 'rajuh@gmail.com',
        watch: {
            name: 'apple',
            brand: 'Apple',
            price: 455
        }
    })

    //
}