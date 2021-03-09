import React from 'react';

const Details = (props) => {
    const {dateFirstEvent , strCountry , strSport , strGender, strFanart2,strDescriptionEN } = props.teamDetails
    return (
        <div className="container justify-content-center">
            <div className="row mt-5 bg-primary text-light">
                <div className="col-md-6 text-center">
                    <p>Founded : {dateFirstEvent} </p>
                    <p>Country : {strCountry} </p>
                    <p>Sports type : {strSport} </p>
                    <p>Gender : {strGender}</p>
                </div>
                <div className='col-md-6'>
                    <img style={{width:'400px',  height:'250px'}}  src={strFanart2} alt="groupPhoto"/>
                </div>
            </div>
            <div className='mt-5'>
                <p>{strDescriptionEN}</p>
            </div>
        </div>
    );
};

export default Details;