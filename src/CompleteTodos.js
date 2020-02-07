import React, { Component } from 'react'
import Todos from './Todos'
import { connect } from 'react-redux'

class CompleteTodos extends Component {
    render() {
        return (
            <div>
                <h2>Complete Tasks</h2>
                <Todos todos={this.props.completed}/>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        completed: state.filter(todo => todo.complete)
    }
}

export default connect(mapStateToProps)(CompleteTodos)