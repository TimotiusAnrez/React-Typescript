import {Child, ChildAsFC} from './Child'

// const Parent = () => {
//     return <Child color="red" onClick={() => console.log('click')}/> 
// }
//? this will return an error if we want to put in children props to the child component

const Parent = () => {
    return <ChildAsFC color="red" onClick={() => console.log('click')}>
            <p>
                this is children props from paragraph
            </p>
    </ChildAsFC>
}
/**
 * ChildAsFC won't return an error because it is feature provided by react that 
 * anything between open and close tag of child component will be treated as children props
 */

export default Parent