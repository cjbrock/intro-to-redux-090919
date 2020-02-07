import React, { Component } from 'react'
import Todos from './Todos'
import { connect } from 'react-redux'

class IncompleteTodos extends Component {
    render() {
        return (
            <div>
                <h2>Incomplete Tasks</h2>
                <Todos todos={this.props.incomplete} dispatch={this.props.dispatch}/>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        incomplete: state.filter(todo => !todo.complete)
    }
}

export default connect(mapStateToProps)(IncompleteTodos)