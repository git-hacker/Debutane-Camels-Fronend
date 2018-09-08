import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from 'antd'


class Home extends Component {
    componentWillMount() {
    }
    componentDidMount() {
    }
    componentWillUpdate() {
    }
    registerDriver() {
    }
    registerClient() {
    }
    render() {
        return (
            <div className="home-container">
                <Button
                    className="openChat"
                    type="primary"
                    style={{ marginBottom: 12 }}
                    onClick={this.registerDriver}
                >
                    I want to drive!
                </Button>
                <Button
                    className="openChat"
                    type="primary"
                    style={{ marginBottom: 12 }}
                    onClick={this.registerClient}
                >
                    I want to ship!
                </Button>
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
    }
}

export default connect(mapStateToProps)(Home)
