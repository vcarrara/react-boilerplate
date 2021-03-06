import React, { Component } from 'react'

class Greeting extends Component {
    render() {
        const { firstName, lastName } = this.props
        return (
            <h1>
                Hey {firstName} {lastName}!
            </h1>
        )
    }
}

export default Greeting
