import React from 'react'
import ReactDOM from 'react-dom'
import Greeting from './Greeting'
import './index.css'

const thankUser = () => alert('Thanks for using react-boilerplate!')

aaa

const App = () => (
    <div className="App">
        <Greeting firstName="John" lastName="Doe" />
        <button className="CustomButton" onClick={thankUser}>
            Click me...
        </button>
    </div>
)

ReactDOM.render(<App />, document.getElementById('root'))
