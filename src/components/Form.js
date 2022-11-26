import React from 'react';
import './App.css';

const  Form = () => {
    return (
        <form>
            <h1>Weather API</h1>
            <p>Please enter your city and check the weather.</p>
            <input class="form-city" type="text"/>
            <button type="button" class="btn btn-search"> Search </button>
        </form>

    )
}

export default Form;