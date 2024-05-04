{
    // promise 

    // simulate


    interface Todo {
        id: number,
        userId: number,
        title: string,
        completed: boolean
    }

    const getTodo = async (): Promise<Todo> => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const data = await response.json();
        // console.log(data)
        return data;
    }

    getTodo()

    interface Something { something: string }

    const createPromise = (): Promise<Something> => {
        return new Promise<Something>((resove, reject) => {
            const data: Something = { something: 'Something' }
            if (data) {
                resove(data)
            } else {
                reject('faild to load data')
            }
        })
    }

    // caing createPromise promise function

    const showData = async (): Promise<Something> => {
        const data: Something = await createPromise();
        return data
        // console.log(data)
    }

    showData()
    //
}