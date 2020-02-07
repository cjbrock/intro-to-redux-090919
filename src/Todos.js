import React, { Component }from 'react'
import Child from './Child'


class Todos extends Component {
    complete = (id) => {
        this.props.dispatch({ type: "COMPLETE_TODO", payload: id })
    }


    render(){
        return (
            <div>
                {this.props.todos.map(todo => (
                    <p key={todo.id}>{todo.name} <input onChange={()=>this.complete(todo.id)} type="checkbox" /></p>
                ))}
            </div>
        )
    }
}

export default Todos