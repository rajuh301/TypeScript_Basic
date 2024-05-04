{
    // type guards

    // typeof ----> type guard


    type Alphaneumaric = string | number


    const add = (param1: Alphaneumaric, param2: Alphaneumaric): Alphaneumaric => {

        if (typeof param1 === 'number' && typeof param2 === 'number') {
            return param1 + param2;
        }

        else {
            return param1.toString() + param2.toString()
        }
    }


    const result = add('20', '20')
    console.log(result)




    // in guard

    type NormalUser = {
        name: string
    }

    type AdminUser = {
        name: string;
        role: 'admin'
    }


    const getUser = (user: NormalUser | AdminUser) => {
        if ('role' in user) {
            console.log(`My name is ${user.name} and my role is ${user.role}`)

        } else {
            console.log(`My name is ${user.name}`)
        }
    };

    const normalUser: NormalUser = {
        name: "MR. Normal user"
    }

    const adminUser: AdminUser = {
        name: 'Mr. Admin user',
        role: 'admin'
    }

    getUser(adminUser)



    //
}