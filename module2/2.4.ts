{
    // interface - generic


    interface Developer<T, X = null> {
        name: string;
        computer: {
            brand: string;
            model: string;
            relaseYear: number
        };
        smartWatch: T;
        bike?: X;
    }




    const poorDeveloper: Developer<{
        brand: string,
        price: number,
        relase: number
    }> = {
        name: 'Raju',
        computer: {
            brand: 'Asus',
            model: 'R230',
            relaseYear: 2019
        },
        smartWatch: {
            brand: 'Non brand',
            price: 2022,
            relase: 2020
        }
    }

    interface heroHondaBike {
        brand: string,
        cc: number
    }
    const rechDeveloper: Developer<{
        brand: string,
        price: number,
        isHardTrack: boolean,
        isSleepTrack: boolean
    }, heroHondaBike> = {
        name: 'Anarul',
        computer: {
            brand: 'Apple',
            model: 'Air',
            relaseYear: 2023,
        },

        smartWatch: {
            brand: 'Apple',
            price: 75000,
            isHardTrack: true,
            isSleepTrack: true,
        },
        bike: {
            brand: 'Hero',
            cc: 150
        }

    }
    // ---------using type -----------
    type AppleSmartWatch = {
        brand: string,
        price: number,
        isHardTrack: boolean,
        isSleepTrack: boolean,
        isPlayMusic: boolean
    }
    const mediumDeveloper: Developer<AppleSmartWatch> = {
        name: 'Anarul',
        computer: {
            brand: 'Apple',
            model: 'Air',
            relaseYear: 2023,
        },

        smartWatch: {
            brand: 'Apple',
            price: 75000,
            isHardTrack: true,
            isSleepTrack: true,
            isPlayMusic: false
        }

    }


    // -------------- Using interface----------

    interface AppleSmartWatch2 {
        brand: string,
        price: number,
        isHardTrack: boolean,
        isSleepTrack: boolean,
        isPlayMusic: boolean,
        isPlaayGame: boolean,
    }

    interface Yahmah {
        brand: string,
        model: number,
        fiIngin: boolean
    }
    const veryRechDeveloper: Developer<
        AppleSmartWatch2
        , Yahmah> = {
        name: 'Anarul',
        computer: {
            brand: 'Apple',
            model: 'Air',
            relaseYear: 2023,
        },

        smartWatch: {
            brand: 'Apple',
            price: 75000,
            isHardTrack: true,
            isSleepTrack: true,
            isPlayMusic: false,
            isPlaayGame: true,
        },

        bike: {
            brand: 'Yahmah',
            model: 2020,
            fiIngin: true
        }

    }






    //
}