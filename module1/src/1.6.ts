{
    // Learning function

// Normal function 
//Arrow function

function add(num1: number, num2: number): number {
    return num1 + num2
}

add(1, 2)

const addArrow = (num1: number, num2: number): number => num1 + num2


// Object ---> function ---> Method 

const poorUser = {
    name: 'Raju Hassan',
    blance: 0,
    addBlance(blance: number): string {
        return `My new blance is ${this.blance + blance}`;
    }
}


// Map from array

const arr: number[] = [1, 2, 3, 4, 5];

const newArry: number[] = arr.map((ele: number): number => ele * ele)
}