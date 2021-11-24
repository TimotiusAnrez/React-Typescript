import React, {useState} from 'react'

const EventComponent:React.FC = () => {
    const [input, setInput] = useState('')

    const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value)
    }
    //! this error happen because event is any type
    //      ? remember that typescript will always try to define the type
    //  if we make an handler outside the inline callback typescript will declare our parameter as any
    //  while if we make the callback inline typescript will know if it's a callback with param type of object
    //  now if we declare the type of React.ChangeEvent to the handler typscript will know that this is an object

    const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {
        console.log(event.screenX)
    }

    const onDragEnd = (event: React.DragEvent<HTMLDivElement>) => {
        console.log(event.screenX)
    }

    return <div>
        <input onChange={inputHandler} />
        {input}
        <div draggable onDragStart={onDragStart} onDragEnd={onDragEnd}>
            Drag Me!
        </div>
    </div>
}

// ? be in mind that each event have their own type that typescript can identified
// ? you can search more of the event in documentation or just ctrl+click the event prop type

export default EventComponent