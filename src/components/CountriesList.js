import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';



 class CountriesList extends Component {
     render () {
            <div style={{display: 'flex'}}>
                <div>
                    <h1>All Countries</h1>
                    {
                        AllCountries.map((country, i) => {
                            return <div key={i}>
                                <Link to={`/country/${country.aplha3Code}`}>{country.name}</Link>
                                </div>
                        })
                    }
                </div>
                <Route path="/pokemon/:id" component={PokemonDetail} />
            </div>
        )
    }

export default CountriesList