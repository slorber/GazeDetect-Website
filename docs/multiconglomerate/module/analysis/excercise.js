import React, { Component } from 'react';
import ReactPlayer from 'react-player';

class VideoExcercise extends Component {
    render () {
        return (
        <div className='player-wrapper'>
            <ReactPlayer
            className='react-player fixed-bottom'
            url= '/static/video/Excercise.MP4'
            width='100%'
            height='100%'
            controls = {true}

            />
        </div>
        )
    }
}

export default VideoExcercise;



// export default function Analyze(){
//     const vidRef = useRef(null);
//     const handlePlayVideo = () => {
//     vidRef.current.play();
//     }
//     return(
//         <video ref={vidRef}>
//         <source src={'/static/video/Test.mp4'} type="video/mp4" />
//         </video>      
//     )
// }


