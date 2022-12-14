import React from 'react';
import './App.css';

const  Form = attributes => {
    return (
        <form onSubmit={attributes.onSubmit}>
            <h1>Weather API</h1>
            <p>Please enter your city and check the weather.</p>
            <input class="form-city" 
            type="text" 
            value={attributes.value} 
            onChange={attributes.change}
            />
            <button type="button" class="btn btn-search"> Search </button>
        </form>
    )
}

export default Form;