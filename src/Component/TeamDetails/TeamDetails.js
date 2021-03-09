import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import Details from '../DetailsPart-2/Details';

const TeamDetails = () => {
    const {id} = useParams()
    const [teamDetails , setTeamsDetails] = useState({})

    const {idLeague, strFanart1} = teamDetails

useEffect(() =>{
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${id}`
    fetch(url)
    .then(response => response.json())
    .then(data => {
        // console.log(data.leagues[0])
        setTeamsDetails(data.leagues[0])
    })
},[])
console.log(teamDetails);
    return (
        <div>
            <div className="container justify-content-center">
                <img style={{ height:'500px', width:'100%'}} src={strFanart1} alt="teamdetails"/>
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