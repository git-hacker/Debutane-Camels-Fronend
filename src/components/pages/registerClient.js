import React, { Component } from 'react'
import { connect } from 'react-redux'


class RegisterClient extends Component {
    componentWillMount() {
    }
    componentDidMount() {
    }
    componentWillUpdate() {
    }
    render() {
        return (
            <div className="container">
            <h1 className="center btn btn-primary">
                EOPI Driver
            </h1>
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
    }
}

export default connect(mapStateToProps)(RegisterClient);
