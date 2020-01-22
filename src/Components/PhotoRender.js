import React, {useState, useEffect} from 'react';
import Photo from './Photo';
import axios from 'axios';

export default function PhotoRender() {
    const [data, setData]=useState({});
    useEffect(() => {
        axios
            .get('https://api.nasa.gov/planetary/apod?api_key=QKaxrNzmkBuK7U6fww4gt7HPpRhQbn2YJkpAlFj1')
            .then(response => setData(response.data))
            .catch(error=>console.log('Data was not returned', error))},[])

    return (
        <div className='photo-container'>
            <Photo data={data}/>
        </div>
    )
}
