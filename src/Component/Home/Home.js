import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import TeamList from '../TeamList/TeamList';
import './Home.css';

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
            <div className='img-container'>
                <h1 className='text-center d-flex justify-content-center ali-item-center abc'>this is paragraph</h1>
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