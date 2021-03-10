import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Component/Home/Home';
import TeamDetails from './Component/TeamDetails/TeamDetails';

function App() {
  return (
    <Router>
      {/* <div >
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/home" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/list" className="nav-link">TeamList</Link>
                </li>
                <li className="nav-item">
                  <Link to="/details" className="nav-link">TeamDetails</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div> */}
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/details/:id">
          <TeamDetails></TeamDetails>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
