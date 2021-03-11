import React from 'react';
import './Detail.css'
import Male from '../../Photo/male.png'
import Female from '../../Photo/female.png'
import { Beenhere, Facebook, Flag, SportsSoccer, Twitter, Wc, YouTube } from '@material-ui/icons';


const Details = (props) => {
    console.log(props.teamDetails)
    const { dateFirstEvent, strCountry, strSport, strGender, strDescriptionEN, strFacebook, strTwitter, strYouTube } = props.teamDetails
    return (
        <div className="bg-light">
            <div className="row mt-5 bg-dark text-light rounded p-3 custom">
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <div >
                        <p><Beenhere /> Founded : {dateFirstEvent} </p>
                        <p><Flag /> Country : {strCountry} </p>
                        <p><SportsSoccer /> Sports type : {strSport} </p>
                        <p className='mb-0'><Wc /> Gender : {strGender}</p>
                    </div>
                </div>
                <div className='col-md-6 d-flex justify-content-center'>
                    <img className='rounded' style={{ width: '315px', height: '200px' }} src={strGender==='Female'? Female : Male} alt="groupPhoto" />
                </div>
            </div>
            <div className='mt-5 bg-info p-5 rounded'>
                <h1>Details : </h1>
                <p className='font-italic'>{strDescriptionEN}</p>
            </div>
            <div className='d-flex justify-content-center'>
                <a className='m-2 p-2' href={`https://${strFacebook}`}><Facebook /> </a>
                <a className='m-2 p-2' href={`https://${strTwitter}`}><Twitter /> </a>
                <a className='m-2 p-2' href={`https://${strYouTube}`}><YouTube /> </a>
            </div>
        </div>
    );
};

export default Details;