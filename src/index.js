import React from 'react'
import ReactDOM from 'react-dom'
import Greeting from './Greeting'
import './index.css'

const App = () => (
    <>
        <Greeting firstName="John" lastName="Doe" />
        <small>react-boilerplate</small>
    </>
)

ReactDOM.render(<App />, document.getElementById('root'))
