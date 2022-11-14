import { Link } from "react-router-dom";
import allbeers from "../../assets/beers.png";
import randombeer from "../../assets/random-beer.png";
import newbeer from "../../assets/new-beer.png";

function Home() 
{
    return(
        <div>
        <div className="card">
            <Link to="/beers"><img src={allbeers} alt=""/><p>All Beers</p></Link>
            <h3>bla bla bla</h3>
        </div>
        <div className="card">
            <Link to="/random-beer"><img src={randombeer} alt=""/><p>Random Beer</p></Link>
            <h3>bla bla bla</h3>
        </div>
        <div className="card">
            <Link to="/newBeer"><img src={newbeer} alt=""/><p>New Beer</p></Link>
            <h3>bla bla bla</h3>
        </div>
        </div>
    );

}

export default Home;
        