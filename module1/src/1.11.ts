
{
    //ternary operator || optional chaining || nullish coalescing operator

    const age: number = 20;

    if(age >= 18){
        console.log('Adult');
    }
    else{
        console.log('Not Adult')
    }


    const isAdult = age >=18 ? 'Adult Person' : 'Child person';
    console.log(isAdult)


    // Nullish coalescing operator
    // When by the null and undefine -- desetine making
    
    const isAuthenticatade = null; // It will work for null and undefine value 
    const result = isAuthenticatade ?? 'Gest'
    console.log('The user is',result)

    type UserS = {
        name:string;
        address : {
            city: string;
            road: string;
            presentAddress: string;
            permernentAddress?:string
        }
    }


    const users: UserS = {
        name: 'Raju Hassan',
        address:{
            city:'Dhaka',
            road:'Jashore',
            presentAddress:'Keshabpur'
        }
    }

    const PromentAddress = users?.address?.permernentAddress ?? 'No Address Aboleable'
    console.log(PromentAddress)






    //
}