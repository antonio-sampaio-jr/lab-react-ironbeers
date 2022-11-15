import './App.css';
import { Route, Routes} from 'react-router-dom';
import BeerList from './components/BeerList/BeerList';
import Home from './components/Home/Home';
import BeerDetails from './components/BeerDetails/BeerDetails';
import RandomBeer from './components/RandomBeer/RandomBeer';
import NewBeer from './components/NewBeer/NewBeer';
import { useState } from 'react';

function App() {
  const apiURL = "https://ih-beers-api2.herokuapp.com/beers/new";
  const[form,setForm] = useState();
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/beers" element={ <BeerList /> } />
        <Route path="/random-beer" element={ <RandomBeer /> } />
        <Route path="/:beerId" element={ <BeerDetails /> } /> 
        <Route path="/new-beer" element={ <NewBeer apiURL={apiURL} form={form} setForm={setForm}/> } /> 
      </Routes>
    </div>  
  );
}

export default App;
