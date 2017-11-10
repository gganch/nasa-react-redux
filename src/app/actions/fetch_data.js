import axios from 'axios';

export default function fetchData() {
    
    const API_KEY = 'ViX2t89PxuTvq7AALaKPKE7DfEOmCByABzSJ0JGq'
    const END_POINT = 'https://api.nasa.gov/planetary/apod?api_key='
    const request = axios.get(END_POINT+API_KEY);

    return { // return plain object with props
        type: 'FETCH_DATA', // Action type
        payload: request  // Action payload (cargo)
    }
    
}