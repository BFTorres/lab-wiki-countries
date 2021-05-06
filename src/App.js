
import './App.css';
import axios from 'axios';
import { Route } from 'react-router-dom';
import React, { Component } from 'react';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import NavBar from './components/NavBar';




 class App extends Component {

  state = {
     countrie: [],
    }
 

  componentDidMount() {
    axios.get('https://restcountries.eu/rest/v2/all')
      .then((response) => {
        this.setState({
          countries: response.data,
        });
      })
      .catch(() => {
      });
  }


  render() {
    return (
      <div className="container">
        <NavBar />
          <div className="row align-items-start">
            <div className="col">
             <CountriesList countries={this.state.allCountries} />
            </div>
            <div className="col">
              <Route path="/country/:alpha3Code" component={CountryDetails} />
            </div>
          </div>
      </div>
    );
  }
}




export default App;
