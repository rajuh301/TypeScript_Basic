{
    // map types

    const arrayOfNumbers: number[] = [1, 2, 3, 4, 5, 6];

    const arrayOfString: string[] = arrayOfNumbers.map((number) => number.toString())
    console.log(arrayOfString)


    //


    type AreaNumber = {
        height: number;
        width: number
    }


    type AreaString = {
        [key in keyof AreaNumber]: string
    }

    // look up type
    type LandHeight = AreaNumber['height']



    type AreaString2<T> = {
        [key in keyof T]: T[key]
    }
    const area1: AreaString2<{ height: string, width: number }> = {
        height: "100",
        width: 100
    }





    //

}