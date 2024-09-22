import React from 'react';
import ReactPlayer from 'react-player';

interface YouTubeVideoProps {
    url: string;
}

const VideoPlayer: React.FC<YouTubeVideoProps> = ({ url }) => {
    return (
        <div className='video-wrapper'>
            <ReactPlayer
                url={url}
                controls={true}
                width='100%'
                height='100%'
            />
        </div>
    );
};

export default VideoPlayer;
