import './App.css';
import Navbar from './components/Navbar'
import CountriesList from './components/CountriesList'
import countries from './countries.json'
import {Switch, Route} from 'react-router-dom'
import CountryDetails from './components/CountriesList'

function App() {
  return (
    <>
    <Navbar/>
    <CountriesList countries={countries}/>
    <Switch>
      <Route exact path="/:id" render={(props)=>{
        <CountryDetails {...props} country={this.state.country}/>
      }} />
    </Switch>
    
    </>
  );
}

export default App;
