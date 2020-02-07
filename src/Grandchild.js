import React, { Component } from 'react'
import { connect } from 'react-redux'

class Grandchild extends Component {
    render() {
        return (
            <div>

            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        profit: state
    }
}

export default connect(mapStateToProps)(Grandchild)