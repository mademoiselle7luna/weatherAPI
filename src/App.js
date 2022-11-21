import { Component } from 'react';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}

function show() {
  return (
    <div className="App">
        <div class="container">
          <div class="app-container">
              <div class="description">
                  <h1>Weather API</h1>
                  <p>Please enter your city and check the weather.</p>
              </div>
              <div class="form">
                  <input class="form-city" type="text"/>
                  <button type="button" class="btn btn-search"> Search </button>
              </div>
              <div class="items">
                  <p> City: </p>
                  <p> Temperature: </p>
                  <p> Wind speed: </p>
              </div>
          </div>
      </div>   
    </div>
  );
}

export default show;
