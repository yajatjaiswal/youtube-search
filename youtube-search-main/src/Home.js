import { useState } from "react";
//import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import VideoList from "./components/VideoList";
import SearchBox from "./components/SearchBox";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import Captions from "./components/Captions";

function Home() {
  const [videos, setVideos] = useState([]);
  const [channelId, setChannelId] = useState([]);
const api_key = "AIzaSyC6iuW5Oz08bv_e8pGIRTkyERDlTH5mWAc"

  const getYoutubeIdData = async (searchValue) => {
    const baseURL = `https://www.googleapis.com/youtube/v3/videos?id=${searchValue}&key=${api_key}&part=snippet,contentDetails,statistics,status`;
    const response = await fetch(baseURL);
    const responseJson = await response.json();
    console.log(responseJson.items, "SET-----------");
    if (responseJson.items) {
      setVideos(responseJson.items);
      setChannelId(""); 
    } else {
      console.log("error");
    }
  };

  const getYoutubeChannelData = async (searchValue) => {
    const basURL = `https://www.googleapis.com/youtube/v3/search?key=${api_key}&channelId=${searchValue}&part=snippet,id&order=date&maxResults=10`;
    const response = await fetch(basURL);
    const responseJson = await response.json();
    console.log(
      responseJson.items,
      "apiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii"
    );
    if (responseJson.items) {
      setChannelId(responseJson.items);
      setVideos("");
    } else {
      // alert('error')
    }
  };

  const getYtChannelNameData=async(searchValue)=>{
    const baseURL=`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchValue}&type=channel&key=AIzaSyC6iuW5Oz08bv_e8pGIRTkyERDlTH5mWAc`;
    const response=await fetch(baseURL);
    const responseJson=await response.json();
    console.log(responseJson.items[0].id.channelId,'channelname--------------------------------------------------')
    if(responseJson.items){
        getYoutubeChannelData(responseJson.items[0].id.channelId)
        // console.log(idChName,'dataaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
    }
    else{
        console.log('error')
    }
}

  // useEffect(()=>{
  //     getYoutubeChannelData(searchValue)
  // },[searchValue])

  return (
    <div className="container-fluid video-app">
      <div className="row">
        <SearchBox func={getYoutubeIdData} func2={getYoutubeChannelData} func3={getYtChannelNameData} />
      </div>
      <div className="row">
        <VideoList vid={videos} channelId={channelId} />
      </div>
      {/* <div className="row">
        <Captions vid={videos}/>
      </div> */}
    </div>
  );
}

export default Home;
