import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';





 class CountriesList extends Component {
     render () {
         const { countries } = this.props;
         if (!countries.length) {
             return <h1>Loading. . . </h1>
         }
            return(
            <div style={{display: 'flex'}}>
                <div>
                    <h1>Countries</h1>
                    {
                        countries.map((country, i) => {
                            return <div key={i}>
                                <Link to={`/country/${country.aplha3Code}`}>{country.name}</Link>
                                </div>
                        })
                    }
                </div>
            </div>
            )
     }
    }

export default CountriesList;