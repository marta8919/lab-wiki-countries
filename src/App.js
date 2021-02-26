import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar'
import CountriesList from './components/CountriesList'
import {Route} from 'react-router-dom'
import CountryDetails from './components/CountriesList'
import {Container, Row, Col} from 'react-bootstrap' 


export default class App extends Component {

  state = {
    countries: []
  }

  render() {
    const {countries} = this.state

    return (
      <>
      <Navbar />
      <Container>
          <Row>
              <Col>
                <CountriesList countries={countries} />
              </Col>
          </Row>
       </Container>
       </>

    )
  }
}

