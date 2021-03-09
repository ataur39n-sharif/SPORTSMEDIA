import React from 'react';
import { Forward} from '@material-ui/icons';
import { Link } from 'react-router-dom';
const TeamList = (props) => {
    // console.log(props.team);
    const {strBadge , strSport ,strLeague , idLeague} = props.team
    return (
        <div className='col-lg-4 col-md-6 col-sm-12 mb-3 mt-3'>
            <div className="card text-center" style={{width:' 18rem'}}>
                <img src={strBadge} className="card-img-top" alt='team img'/>
                <div className="card-body">
                    <h5><strong>{strLeague}</strong></h5>
                    <p>idLeague : {idLeague}</p>
                    <p className="card-text">Sports type : {strSport}</p>
                    <Link to={`/details/${idLeague}`}><button className="btn btn-primary">Explore <Forward/></button></Link>
                </div>
            </div>
        </div>
    );
};

export default TeamList; <h2>this is teamList page</h2>