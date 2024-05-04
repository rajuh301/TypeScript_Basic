{
    //Spread operator
    //Rest operator
    //Destructuring 


    //Learn Spread operator

    const bros1: string[] = [
        'Anarul',
        'Amirul',
        'Khalidur'
    ];

    const bros2: string[] = [
        'Raju',
        'Rahad',
        'Imran'
    ]

    bros1.push(...bros2)




    const mentors1 = {
        react: 'Rahad',
        express: 'Imran',
        firebase: 'Anarul'
    }

    const mentors2 = {
        prisma: 'Firoz',
        next: 'Tanmoy',
        clud: 'Nahid'
    }

    const mentorList = {
        ...mentors1,
        ...mentors2
    }



    // Learn rest opeartor

    const greetFriends = (...friends: string[]) => {
        friends.forEach((friend: string) => console.log(`Hi${friend}`))

    }

    greetFriends('Abul', 'Kabul', 'Babul', 'Sabul')


}