import React from 'react'
import ReactDOM from 'react-dom'
import Greeting from './Greeting'
import './index.css'

const App = () => (
    <div className="App">
        <Greeting firstName="John" lastName="Doe" />
        <small>react-boilerplate</small>
    </div>
)

ReactDOM.render(<App />, document.getElementById('root'))
