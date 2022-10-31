import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <LoadCountries></LoadCountries>
    </div>
  );
}
function LoadCountries() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data))
  }, [])


  return (
    <div>
      <h1>Visiting Every Country in the world</h1>
      <p>Available Countries : {countries.length}</p>
      <div className="countries-container">
        {
          countries.map(country => <DisplayCountries
            country={country}
          ></DisplayCountries>)
        }
      </div>

    </div>
  )
}
function DisplayCountries(props) {
  const { name, population, region, area, flags } = props.country;
  return (

    <div className='countries'>

      <h2>Name: {name.common}</h2>
      <img src={flags.png} alt="" />
      <p>Population: {population}</p>
      <p>Region: {region}</p>
      <p>Area: {area}</p>
      <img src="flag={props.country.flag.png}" alt="" />
    </div>
  )
}

export default App;
