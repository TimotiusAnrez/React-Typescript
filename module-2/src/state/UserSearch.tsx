import { stringify } from 'querystring';
import {useState} from 'react'

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

const UserSearch:React.FC = () => {
    const [name, setName] = useState('');
    const [user, setUser] = useState<{name:string,age:number}|undefined>()

    const findUserHandler = ():void => {
        const foundUser = users.find((user) => {
            return user.name === name
        });
        setUser(foundUser)
    }

    return (
        <div>
            UserSearch
            <input value={name} onChange={(event)=> setName(event.target.value)} />
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

export default UserSearch