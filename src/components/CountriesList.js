import React, { Component } from 'react'
import countries from '../countries.json'
import {Link, Route} from 'react-router-dom'
import {Container, Row, Col} from 'react-bootstrap' 
import CountryDetails from './CountryDetails'


export default class CountriesList extends Component {

    state = {
        countries : countries,
        updateCountries : countries
    }


    render() {

        const {countries} = this.state

        return (

            <Container>
                <Row>
                    <Col>
                        {
                        countries.map((country)=>{
                            return <div key={country.ccn3}>
                                <Link to={`/${country.ccn3}`} > {country.flag} {country.name.official}</Link>
                            </div>
                            })
                        }
                    </Col>
                    <Col>
                        <Route exact path={`/:countryID`} component={CountryDetails} />
                    </Col>
                </Row>
            </Container>

        )
    }
}
