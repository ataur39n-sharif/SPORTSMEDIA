import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import TeamList from '../TeamList/TeamList';

const Home = () => {
    const [teams, setTeams] = useState([])

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/search_all_leagues.php?c=England`
        fetch(url)
            .then(response => response.json())
            .then(data => {
                // console.log(data.countrys)
                setTeams(data.countrys)
            })
    }, [])
    // console.log(teams);

    return (
        <div className='container '>
            <div >
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
                    <div className="container-fluid">
                        {/* <a className="navbar-brand" href="#">Navbar</a> */}
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link to="/home" className="nav-link">Home</Link>
                                    {/* <a className="nav-link active" aria-current="page" href="">Home</a> */}
                                </li>
                                <li className="nav-item">
                                    <Link to="/list" className="nav-link">TeamList</Link>
                                    {/* <a className="nav-link" href="#">Features</a> */}
                                </li>
                                <li className="nav-item">
                                    <Link to="/details" className="nav-link">TeamDetails</Link>
                                    {/* <a className="nav-link" href="#">Pricing</a> */}
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <div>
                <div className='row'>
                    {
                        teams.map(team => <TeamList team={team} key={Math.random()}></TeamList>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;