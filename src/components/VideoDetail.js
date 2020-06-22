import React from 'react';
const VideoDetail = ({video}) => {

    // UI EMBED IS HOW YOU INSERT A VIDEO IN A UI SEGMENT WITH SEMANTIC
    const videosrc =  `https://www.youtube.com/embed/${video && video.id.videoId}`;
    return(


        <div>
            <div className="ui embed">
                <iframe src={videosrc}/>
            </div>
            <div className="ui segment">
             <h4 className="ui header">{!video && "Click a Video to view!"}  {video && video.snippet.title}</h4>
                <p>{video && video.snippet.description}</p>
            </div>


        </div>
    );
}
export default VideoDetail;