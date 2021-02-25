import React, { Component } from 'react'
import {Link} from 'react-dom'

export default class CountryDetails extends Component {



    render() {

        const {countries}= this.state

        return (
            <div>
                <p>Country details</p>
                <p>{countries[0].name.official}</p>
                <p>{countries[0].capital}</p>
                <p>{countries[0].area}</p>
                <p>{countries[0].borders}</p>
            </div>
        )
    }
}
