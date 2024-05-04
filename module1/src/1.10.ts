{
    //
    //union types

    type FrontendDevelope = 'good' | 'bad';
    type FullStackDevelope = 'primary' | 'expart';


    type developerHire = FrontendDevelope | FullStackDevelope


    const developer: FrontendDevelope = 'bad'

    type User = {
        name: string;
        email?: string;
        gender: 'male' | 'femel';
        bloodGroup: 'O+' | 'O-' | 'AB+'
    }


    const user: User = {
        name: 'Raju',
        gender: 'femel',
        bloodGroup: 'AB+'
    }




    type MernDeveloper = {
        skills: string[];
        designation1: "Mern Developer"
    }

    type BackendDeveloper = {
        skills: string[];
        designation2: "Backend developer"
    }

    type FoundDeveloper = MernDeveloper & BackendDeveloper;

    const foundFullStackDevelope: FoundDeveloper = {
        skills: ['HTML', 'CSS', 'React', 'Node'],
        designation1: 'Mern Developer',
        designation2: 'Backend developer'
    }



    //
}