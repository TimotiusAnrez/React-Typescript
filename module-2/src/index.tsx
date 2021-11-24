/**
 * import reactDOM from ract-dom
 * 
 * make app element
 * 
 * reactDom.render(app element, document.querySelector('#root))
 */
import React from 'react'
import ReactDOM from 'react-dom'
import UserSearchRef from './refs/UserSearchRef'
// import EventComponent from './state/EventComponent'
// import UserSearch from './state/UserSearch'


const App = () => {
    return <div><UserSearchRef /></div>
}

ReactDOM.render(<App />, document.querySelector('#root'))