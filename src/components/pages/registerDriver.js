import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as BackendHelper from '../../helpers/backendHelper'
import { Button } from 'antd'


class RegisterDriver extends Component {
    componentWillMount() {
    }
    componentDidMount() {
    }
    componentWillUpdate() {
    }
    register() {
        BackendHelper.signinDriver({}, (data) => { console.log(data) }, (data) => { console.log(data) })
    }
    render() {
        return (
            <div className="container">
                <Button
                    className="openChat"
                    type="primary"
                    style={{ marginBottom: 12 }}
                    onClick={this.register.bind(this)}
                >
                    Register
                </Button>
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
    }
}

export default connect(mapStateToProps)(RegisterDriver);
