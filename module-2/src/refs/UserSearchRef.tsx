import {useState, useRef, useEffect} from 'react'

const users = [{
    name:'Sarah',
    age:20
},{
    name:'Alex',
    age:20
},{
    name:'Tom',
    age:20
}]
// to get more HTML element as interface you can ctrl+click in HTMLInputElement
const UserSearchRef:React.FC = () => {
    const inputRef = useRef<HTMLInputElement | null>(null) //useRef will get an error 
        //?if we don't put in second option null as possibility input to our ref 
        //? because the input might as well be null when it's useRef is not asigned anywhere
    
    const [name, setName] = useState('');
    const [user, setUser] = useState<{name:string,age:number}|undefined>()

    useEffect(() => {
        if(!inputRef.current){
            return;
        }
        //if statement above use to type guard the inputRef
        //typescript will automatically know that this is an error handling for the inputRef
        //and will let off the error
        inputRef.current.focus() 
        //when ref is passed to an element in render, 
        //reffernce of the node becomes accessible at the current attribute of ref
    },[])


    const findUserHandler = ():void => {
        const foundUser = users.find((user) => {
            return user.name === name
        });
        setUser(foundUser)
    }

    return (
        <div>
            UserSearchRef
            <input 
                ref={inputRef} 
                value={name} 
                onChange={(event)=> setName(event.target.value)} 
            />
            <button onClick={findUserHandler}>Find User!</button>
            <div>
                {
                    user && 
                    <ul>
                        <li>{user && user.name}</li>
                        <li>{user && user.age}</li>
                    </ul>
                }
            </div>
        </div>
    )
}

/**
 * make a search field and bind it to a state
 * make a find button for trigger handler
 * make a search function by using javascript find method
 *              ? find method will return a value if user is found
 * setUser for any value found
 *      ? since we already declare to typescript that there will be two kind of input
 *      ? which is object with string and number type and undefined if undefined it will be set as empty
 *      ? while if there is an object value it will be set as object
 *      ? this is what we called generic value state
 * 
 * make a conditional rendering
 */

export default UserSearchRef