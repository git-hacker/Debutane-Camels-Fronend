import React, { Component } from 'react'
import { connect } from 'react-redux'


class Home extends Component {
    componentWillMount() {
    }
    componentDidMount() {
    }
    componentWillUpdate() {
    }
    render() {
        return (
            <div className="home-container">
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
    }
}

export default connect(mapStateToProps)(Home)
