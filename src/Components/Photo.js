import React from 'react';

export default function Photo(props) {

    return (
        <>
            <p className='headline'>Astronomy Photo of the Day</p>
            <img className='photo' src={props.data.hdurl} alt='nasa apod'/>
            <div className="copyright-caption">
                <div className="copyright-date">
                    <p>{props.data.copyright}</p>
                    <p>{props.data.date}</p>
                </div>
                <div className='caption'>
                    <p>{props.data.explanation}</p>
                </div>
            </div>

        </>
    )
}

