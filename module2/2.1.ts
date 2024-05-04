{
    //

    // type assertion

    let anything: any;

    anything = 'Next lavel web Development';

    (anything as string)

    const kgToGm = (value: string | number): string | number | undefined => {
        if (typeof value === 'string') {
            const convertVelue = parseFloat(value) * 1000
            return `The aconverated value is ${convertVelue}`
        }
        if (typeof value === 'number') {
            return value * 1000
        }
    }
    const result = kgToGm(100) as number
    const result2 = kgToGm('100') as string

    type CustomError = {
        message: string
    }

    try {

    } catch (error) {
        console.log((error as CustomError).message)
    }


    //
}