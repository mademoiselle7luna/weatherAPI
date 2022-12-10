import { Component } from 'react';
import Form from './Form';
import Result from './Result';
import './App.css';


class App extends Component {

  state = {
    value: "",
    date: "",
    city: "",
    sunrise: "",
    sunset: "",
    temp: "",
    pressure: "",
    wind: "",
    error: "",
  }

  handleInputChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }
  
  handleCitySubmit = (e) => {
    e.preventDefault();
  }
  render() {
    return (
      <div className="App">
        <Form 
        value={this.state.value} 
        change={this.handleInputChange}
        sumbit={this.handleCitySubmit}
        />
        <Result />
        
      </div>
    );
  }
}

export default App;
