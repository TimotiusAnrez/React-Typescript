import {useState} from 'react'

const GuestList: React.FC = () => {
    const [name, setName] = useState('')
    const [guest, setGuest] = useState<string[]>([]) //! putting in type annotations for the default value to constrict the input
    
    //?<string[]> this will set the type constrict to the set state
    
    const addGuestHandler = () => {
        let guestList = [...guest,name]
        setName('')
        setGuest(guestList)
    }


    return (
    <div>
        <h3>guest list</h3>
        <ul>
            {
                guest.map(element => {
                    return <li>{element}</li>
                })
            }
        </ul>
        <input 
            value={name} 
            onChange={(event) => setName(event.target.value)}
        />
        <button onClick={addGuestHandler}>Add Guest</button>
    </div>
    )
}

export default GuestList