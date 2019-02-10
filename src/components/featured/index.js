import React from 'react';
import Carousel from './carousel';
import Timeuntil from './timeuntil';


const featured = () => {
    return (
        <div style={{position: "relative"}}>
            <Carousel></Carousel>
            <div className="artist_name">
                <div className="wrapper">
                    Ariana Grande
                </div>
            </div>
            <Timeuntil></Timeuntil>
        </div>
    );
};

export default featured;