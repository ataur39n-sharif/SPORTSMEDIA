import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import Details from '../DetailsPart-2/Details';

const TeamDetails = () => {
    const {id} = useParams()
    const [teamDetails , setTeamsDetails] = useState({})

    const {idLeague, strBanner, strFanart4, strBadge} = teamDetails

useEffect(() =>{
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${id}`
    fetch(url)
    .then(response => response.json())
    .then(data => {
        // console.log(data.leagues[0])
        setTeamsDetails(data.leagues[0])
    })
},[id])

const headerStyle = {
    background : ` linear-gradient(#0005, #0005),url("${strBanner}") no-repeat center center / cover`,
  
}
console.log(teamDetails);
    return (
        <div className="container">
            <div className='d-flex justify-content-center' style={headerStyle}>
                <img style={{height: '150px' , width: '150px' , backgroundColor: 'transparent'}} className="p-3" src={strBadge} alt="teamdetails"/>
            </div>
            <div>
                {
                    <Details teamDetails={teamDetails}></Details>
                }
            </div>
        </div>
    );
};

export default TeamDetails;