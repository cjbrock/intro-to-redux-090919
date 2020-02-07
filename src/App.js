import React, { Component } from 'react';
import Todos from './Todos'
import Navbar from './Navbar'
import IncompleteTodos from './IncompleteTodos'
import CompleteTodos from './CompleteTodos'
import './App.css';



class App extends Component {
    render() {
        return (
            <div className="App">
              <Navbar />
              <CompleteTodos />
              <IncompleteTodos />
            </div>
        )
    }
}

export default App