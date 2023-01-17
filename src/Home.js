import { useEffect, useState } from 'react';
//import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import VideoList from './components/VideoList';
import SearchBox from './components/SearchBox';
// import YoutubeTranscript from 'youtube-transcript';
// import Demo from './Demo';


// const baseURL="https://www.googleapis.com/youtube/v3/videos?id=DSDvNv6GV6g&key=AIzaSyC6Q6QFsLZWlEJfmOUYgEXbh19m9NVIjpw&part=snippet,contentDetails,statistics,status"


function Home() {
    const [videos, setVideos] = useState([])
    const [searchValue, setSearchValue] = useState('')
    const [channelId,setChannelId]=useState([])
    
    const getYoutubeIdData = async (searchValue) => {
        const baseURL = `https://www.googleapis.com/youtube/v3/videos?id=${searchValue}&key=AIzaSyBj6KNPKM47c-wyFzTWw_MAUqjkTZ3YO94&part=snippet,contentDetails,statistics,status`;
        const response = await fetch(baseURL);
        const responseJson = await response.json();
        //  console.log(responseJson.items, 'SET-----------')
        if (responseJson.items) {
            setVideos(responseJson.items)
        }
        else {
            // YoutubeTranscript.fetchTranscript('AYNuOO8TFiY').then(console.log);
            console.log('error')
        }
    }

    // useEffect(() => {
    //     getYoutubeIdData(searchValue)
    // }, [searchValue]);

    const getYoutubeChannelData=async(searchValue)=>{
        const basURL=` https://www.googleapis.com/youtube/v3/search?key=AIzaSyBj6KNPKM47c-wyFzTWw_MAUqjkTZ3YO94&channelId=${searchValue}&part=snippet,id&order=date&maxResults=10`;
        const response=await fetch(basURL);
        const responseJson=await response.json();
        console.log(responseJson.items,'apiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii')
        if(responseJson.items){
            setChannelId(responseJson.items)
        }
        else{
            // alert('error')
        }
    }    

    // useEffect(()=>{
    //     getYoutubeChannelData(searchValue)
    // },[searchValue])

    return (
        <div className="container-fluid video-app">
             
            <div className='row'>
                <SearchBox func={getYoutubeIdData} func2={getYoutubeChannelData} />
            </div>
            <div className='row'>
                <VideoList vid={videos} channelId={channelId} />
            </div>
            
        </div>
    );
}

export default Home;
