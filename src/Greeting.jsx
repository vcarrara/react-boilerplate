import React, { Component } from 'react'
import PropTypes from 'prop-types'

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

Greeting.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
}

export default Greeting
