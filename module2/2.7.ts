{
    //generic constratnt with keyof operator
    type vehicle = {
        bike: string,
        car: string,
        helicopter: string
    }


    type Wonar = keyof vehicle;
    const persone: Wonar = 'helicopter'

    // -------------------------
    const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
        return obj[key]
    }
    const user = {
        name: 'Mr.x',
        age: 26,
        address: 'Jes'
    }

    const car = {
        modelName: 'Maruti 600',
        year: 2000
    }

    const result = getPropertyValue(car, "year")




    //
}