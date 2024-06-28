import React, { useState } from 'react';
import Weather from './weather';
import './App.css';

function App() {
  const [location, setLocation] = useState('');
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLocation(input);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={input}
            onChange={handleChange}
            placeholder="Enter location"
          />
          <button type="submit">Get Weather</button>
        </form>
        {location && <Weather location={location} />}
      </header>
    </div>
  );
}

export default App;
