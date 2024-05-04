{
    // utility types




    type persone = {
        name: string;
        age: number;
        email?: string;
        contuctNo: number
    }


    // pick
    type nameAge = Pick<persone, 'name' | 'age'>

    // Omit
    type ContuctInfo = Omit<persone, 'name' | 'age'>

    // Required
    type PersoneRequired = Required<persone>

    // Partial
    type PersonePartial = Partial<persone>

    // Readonly
    type PersoneReadOnly = Readonly<persone>

    const persone1: PersoneReadOnly = {
        name: 'Mr.x',
        age: 21,
        contuctNo: 1122
    }
    // persone1.age=23------------- It's not change , Becuse of it is ReadOnly 


    // Record
    type UserType = Record<string, string>
    const user: UserType = {
        a: 'user1',
        b: 'user2',
        c: 'user3'
    }

    type UserNumberType = Record<string, number>
    const userNumber: UserNumberType = {
        a: 200,
        b: 3545,
        c: 226,
        d: 2122,
        e: 222,

    }

    const EmptyObj: Record<string, unknown> = {}


    //
}