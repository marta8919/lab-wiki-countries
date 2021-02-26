import React, { Component } from 'react'
import countriesJson from '../countries.json'
import {Container, Row, Col} from 'react-bootstrap'

export default class CountryDetails extends Component {

    state = {
        country: {},
        updateCountries : {}
    }

    getcountry=()=>{
        console.log(this.props)

        const {countryId} = this.props.match.params

        let filteredCountry = countriesJson.filter(elem => {
            return elem.ccn3 === countryId
        })

        console.log(filteredCountry)

        let newCountry = {
            countryId : countryId,
            name: filteredCountry[0].name.official,
        }
    }

    componentDidMount(){
        this.getcountry()
    }

    componentDidUpdate(){

        const {countryId} = this.props.match.params

        if(this.state.country.countryId !== countryId){
            this.getcountry()
        }

    }



    render() {

        const {name, capital, area} = this.state.updateCountries

        return (
        <Container>
            <Row>
                <Col><h1>{name}</h1></Col>
            </Row>
            <Row>
                <Col>Capital</Col>
                <Col>{capital}</Col>
            </Row>
            <Row>
                <Col>Area</Col>
                <Col>{area} km2</Col>
            </Row>
                
        </Container>
        )
    }
}
