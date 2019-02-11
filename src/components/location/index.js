import React from 'react';

const location = () => {
    return (
        <div className="location_wrapper">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3351.086243137762!2d-96.77428095978797!3d32.86943750440018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e9fbefb38286f%3A0xe991d694207daeb!2sApple+NorthPark+Center!5e0!3m2!1sen!2sus!4v1549834278081" 
                    width="100%" 
                    height="500" 
                    frameBorder="0" 
                    allowFullScreen></iframe>
            <div className="location_tag">
                <div>Location</div>
            </div>
        </div>
    );
};

export default location;