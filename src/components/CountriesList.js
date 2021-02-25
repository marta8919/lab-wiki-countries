import React, { Component } from 'react'
import countries from '../countries.json'
import {Link, Route} from 'react-router-dom'
import {Container, Row, Col} from 'react-bootstrap' 


export default class CountriesList extends Component {

    state = {
        countries : countries
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
                                <Link to={`/countries/${country.ccn3}`} > {country.flag} {country.name.official}</Link>
                            </div>
                            })
                        }
                    </Col>
                </Row>
            </Container>

        )
    }
}
