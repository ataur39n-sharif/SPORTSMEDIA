import React from 'react';
import notFound from '../../image/notFound.jpg'

const NotFound = () => {
    return (
        <div className='container'>
            <div style={{height: '1000px' , width: '1000px'}}>
               <img style={{height: "100%" , width: "100%"}}  src={notFound} alt=""/>
            </div>
        </div>
    );
};

export default NotFound;