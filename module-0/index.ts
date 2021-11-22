import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/todos/1'

interface Todo{
    id:Number,
    title:String,
    completed:Boolean
}

axios.get(url).then(response => {
    const todo = response.data as Todo
    const {id,title,completed} = todo

    

    const logTodo = (id:Number, title:String, completed:Boolean) => {
        console.log(`
            ${id}, ${title}, ${completed}
        `)
    }

    logTodo(id,title,completed)
})

/**
 * everything in typescript have type
 * two types available types in typescript
 *  ? primitve types
 *      -number
 *      -boolean
 *      -void
 *      -undefined
 *      -string
 *      -symbol
 *      -null
 *  ? Object types
 *      -functions
 *      -arrays
 *      -classes
 *      -objects
 * 
 * ? interface define a new type
 *      other than types that are available to is primitively and object
 *      you can also define a new type, like Todo interface
 */