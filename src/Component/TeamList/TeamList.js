import React from 'react';
import './Team.css'
import { Forward } from '@material-ui/icons';
import { Link } from 'react-router-dom';
const TeamList = (props) => {
    // console.log(props.team);
    const { strBadge, strSport, strLeague, idLeague } = props.team
    return (
        <div className='col-lg-4 col-md-6 col-sm-12 mb-3 mt-3 d-flex justify-content-center '>
            <div className="card text-center bg-dark text-warning" style={{ width: ' 18rem' }}>
                <div className='m-auto pt-2'>
                    <img src={strBadge} className="card-img-top cardImg" alt='team img' />
                </div>
                <div className="card-body">
                    <h5><strong>{strLeague}</strong></h5>
                    <p className="card-text">Sports type : {strSport}</p>
                    <Link to={`/details/${idLeague}`}><button className="btn btn-light"><strong>Explore <Forward /></strong></button></Link>
                </div>
            </div>
        </div>
    );
};

export default TeamList; <h2>this is teamList page</h2>