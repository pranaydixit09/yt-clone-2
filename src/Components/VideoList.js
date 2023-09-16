import React from "react";


const VideoList = ({videos, addSelectedVideo}) =>{


    return(

        <div className="videos-list">
                        {
                            videos.map((video)=>

                            <div onClick={()=>addSelectedVideo(video)}>
                            
                            <img src={video.snippet.thumbnails.medium.url} atlt={video.snippet.description}></img>

                            </div>
                            )

                        }


        </div>

    )
}

export default VideoList;