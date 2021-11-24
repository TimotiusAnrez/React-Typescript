interface ChildProps {
    color: string;
    onClick: () => void;
}

export const Child = ({color, onClick}: ChildProps) => {
    return <div>
                {color}
                <button onClick={onClick}>Click me</button>
            </div>
} //? typescript doesn't know that this is a functional component for react
//! cannot recieve children unless you specify it in interface

export const ChildAsFC: React.FC<ChildProps> = ({color, onClick, children}) => {
    return <div>
                {color}
                {children}
                <button onClick={onClick}>Click me</button>
            </div>
} //? this is another way to define a function component using typescript
/**
 * Child might have properties assigned to it like 'propTypes' and 'contextTypes'
 * Child will receive props of type ChildProps (defined in interface)
 * Child can get one of react feature children props and won't resulting in an error
 */

/**
 * ? biggest changes in props by using typescript is that there is an input checks for
 *     * each prop pass down from parent to children component
 *     * are we providing the correct props to child when we show it in parent?
 *     * are we using the correctly named + typed props in child
 */