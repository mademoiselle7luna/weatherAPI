import { Component } from 'react';
import Form from './Form';
import Result from './Result';
import './App.css';


class App extends Component {

  state = {
    value: ""
  }

  exchangeInput = (e) => {
    this.setState({
      value: e.target.value
    })
  }
  
  render() {
    return (
      <div className="App">
        <Form text={this.state.value} />
        <Result />
        
      </div>
    );
  }
}

export default App;
