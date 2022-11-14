import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import BeerList from './components/BeerList/BeerList';
import Home from './components/Home/Home';
import BeerDetails from './components/BeerDetails/BeerDetails';
import RandomBeer from './components/RandomBeer/RandomBeer';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/beers" element={ <BeerList /> } />
        <Route path="/random-beer" element={ <RandomBeer /> } />
        <Route path="/beerDetails/:beerId" element={ <BeerDetails /> } /> 
      </Routes>
    </div>  
  );
}

export default App;
