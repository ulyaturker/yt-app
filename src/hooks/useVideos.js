import {useState, useEffect} from 'react';
import youtube from '../apis/youtube';

const useVideos = (defaultSearchTerm)=>{
    const [videos, setVideos] = useState([]);
    
    useEffect (() => {
        //this.onTermSubmit('buildings');
        search(defaultSearchTerm);
    }, [defaultSearchTerm]);

    const search = async (term) => {
        const response = await youtube.get('/search',{
            params: {
                q: term
            }
        });

        /*this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        });*/

        setVideos(response.data.items);
        
    };

    return [videos, search];

};

export default useVideos;