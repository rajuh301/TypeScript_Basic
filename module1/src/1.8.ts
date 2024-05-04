{


    //destructuring 

    const user = {
        id: 1234,
        name: {
            fristName: 'Raju',
            middleName: 'Hassan',
            lastName: 'Moral'
        },
        contuctNo: '01732550760',
        address: 'Jashore'

    }

    const { name: { fristName: serName }, contuctNo: phone } = user;



    //Array destructuring
    const myFriends = ['Imaran', 'Rahad', 'Khalidur', 'Mintu', 'Amirul', 'Sagor']
    const [,, bestFriend, ...rest] = myFriends;


}