import Counters from './copmponent/counters'
import Navbar from './copmponent/navbar'
import React, { Component } from 'react';
import './App.css';
import { render } from 'react-dom';

class App extends Component  {

  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }

    ]
  }

  handleIncrement = (counter: any) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  }

  handleReset = () => {
    const counters = this.state.counters.map(counter => {
      counter.value = 0;
      return counter;
    })
    this.setState({ counters })
  }


  handlerDelete = (countedId: any) => {
    const counters = this.state.counters.filter(counter => counter.id !== countedId);
    this.setState({ counters: counters })
  }
  render() {


    return (
      <div className="App">
        <Navbar totalCounters={this.state.counters.filter(c => c.value > 0).length}/>
        <Counters
        counters={this.state.counters}
        onReset={this.handleReset}
        onIncrement={this.handleIncrement}
        onDelete={this.handlerDelete}
        />
      </div>
    );
  }

}
export default App;