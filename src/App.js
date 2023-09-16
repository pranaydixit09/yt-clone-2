import React, {useState} from "react";
import SearchVideos from "./Components/SearchVideos";
import VideoList from "./Components/VideoList";
import VideoPlay from "./Components/VideoPlay";


const App = () =>{

    const [videos, setVideos]= useState([]);
    const [selectedVideo, setSelectedVideo]= useState(null);

    return(

        <div>
            <SearchVideos addVideo={setVideos} addSelectedVideo={setSelectedVideo}/>

            <div className="video">
            <VideoPlay selectedVideo={selectedVideo}/>
            <VideoList videos={videos} addSelectedVideo={setSelectedVideo}/>
            </div>

        </div>
    )
}

export default App;