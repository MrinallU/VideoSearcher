import React from 'react';
import VideoItem from "./VideoItem";

const VideoList = ({videos, onVideoSelect}) => {
    // props.videos is the array of videos
    const renderedList = videos.map((video) => {
        return <VideoItem onVideoSelect={onVideoSelect} video={video}/>;
    });
    return (
            <div className="ui relaxed divided list">
                {renderedList}
            </div>
        );

}

export default VideoList;