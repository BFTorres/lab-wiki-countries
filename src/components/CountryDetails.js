import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class CountryDetails extends Component {

    state = {
        CountryDetails: null
    }

    getCountryDetails = () => {
        // make an api call to get pokemon details
        let CountryCode = this.props.match.params.alpha3Code
        axios.get(`https://restcountries.eu/rest/v2/alpha/${countryCode}`)
            .then((response) => {
                const {capital, area, borders, name} = response.data 
                let detail = {
                    name : name,
                    capital: capital,
                    area: area,
                    borders:  borders,
                    
                }
                this.setState({
                    CountryDetails: detail
                })
            })
            .catch(() => {
            })
    }

    componentDidMount(){ 
        console.log('Did Mount')
        this.getCountryDetails()
    }

    componentDidUpdate(){
        console.log('Did Update')
        console.log(this.state.countryDetails)
        let stateId = this.state.countryDetail.alpha3Code
        let propsId =  this.props.match.params.alpha3Code
        if (stateId !== propsId) {
             //fetch the pokemon again
            this.getCountryDetails()
        }
    }

    render() {
        console.log('Rendering')
        const { CountryDetails } = this.state

        if (!CountryDetails) {
            return <h1>Loading. . . </h1>
        }

        return (
            <div>
                <h1>{countryDetails.name}</h1>
                <h4>Capital {countryDetails.capital}</h4>
                <h4>Area {countryDetails.area}</h4>
                    <div>
                        Borders
                    </div>
                    <div>
                    {countryDetail.borders.map((border) => {
                            return (
                    <div>
                        <Link to={`/country/${border.alpha3Code}`}>{border}</Link>
                    </div>
                            );
                        })}
                    </div>
            </div>
        )
    }
}

export default CountryDetails