import axios from 'axios';

const KEY = 'AIzaSyCJ_Q3wupM0h-XpYCcrn0NzhfrATvmuDTo';


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});
