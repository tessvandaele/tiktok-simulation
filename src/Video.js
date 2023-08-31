import './Video.css';
import React, { useRef, useState } from "react";
import { BsArrowDownCircleFill, BsArrowUpCircleFill, BsPlayCircleFill, BsPauseCircleFill, BsBookmarkFill, BsFillDiscFill } from 'react-icons/bs';
import {AiFillMessage, AiFillHeart} from 'react-icons/ai';
import {PiShareFatFill} from 'react-icons/pi';
import MoreInfoWindow from './MoreInfoWindow';

// Video element with url as param
function Video({videos, baseline}) {
  const num_videos = videos.length;

  //useState saves and changes the state of playing to keep track of playing/pausing
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);
  const [index, setIndex] = useState(0);

  function onPlayPause () {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };
  
  function onNext() {
    videoRef.current.pause();
    setPlaying(false);

    setIndex(function (prevIndex) {
      if (prevIndex < num_videos - 1) {
        return (prevIndex += 1); 
      } else {
        return (prevIndex = num_videos - 1);
      }
    });
  }

  function onPrevious() {
    videoRef.current.pause();
    setPlaying(false);
    
    setIndex(function (prevIndex) {
      if (prevIndex > 0) {
        return (prevIndex -= 1); 
      } else {
        return (prevIndex = 0);
      }
    });
  }

  return (
    <div class='container'>
      {/* video */}
      <video className='video' 
        src={videos[index].url+'#t=0.001'}
        ref={videoRef}
        loop
        playsInline
        aria-label='Short video'
      ></video>

      {/* video navigation buttons */}
      <div className='button_container'>
        <div className='scroll'>
          <button style={{outline: 'none', border: 'none', backgroundColor: 'transparent'}} onClick={onPrevious}> 
            <BsArrowUpCircleFill size={42} style={{color: 'white'}} aria-label={"Previous video"}/>
          </button>
        </div>

        <div className='scroll'>
          <button style={{outline: 'none', border: 'none', backgroundColor: 'transparent'}} onClick={onPlayPause}> 
            {
            playing ? 
            <BsPauseCircleFill size={42} style={{color: 'white'}} aria-label={"Pause button"} 
            /> 
            : 
            <BsPlayCircleFill size={42} style={{color: 'white'}} aria-label={"Play button"} />
            }
          </button>
        </div>

        <div className='scroll'>
          <button style={{outline: 'none', border: 'none', backgroundColor: 'transparent'}} onClick={onNext}> 
            <BsArrowDownCircleFill size={42} style={{color: 'white'}} aria-label={"Next video"}/>
          </button>
        </div>
      </div>
      
      {/* text info */}
      <div className='text_container'>
        {!baseline && (<p className='caption'> 
        {videos[index].description}
        </p>)}
        <h3 className='user'>@{videos[index].user}</h3>
        <p className='caption'>{videos[index].caption}</p>
      </div>

      {/* video info sidebar */}
      <div className='sidebar'>
        {!baseline && (
          <MoreInfoWindow detailedInfo={videos[index].detailedInfo}/>
       )}
        
        
        <div className='scroll'>
          <AiFillHeart size={42} style={{color: "white"}}/>
          <h4>{videos[index].likes}</h4>
        </div>

        <div className='scroll' aria-label="Comments Icon">
          <AiFillMessage size={42} style={{color: "white"}}/>
          <h4>{videos[index].comments}</h4>
        </div>

        <div className='scroll' aria-label="Bookmarks Icon">
          <BsBookmarkFill size={42} style={{color: 'white'}} />
          <h4>{videos[index].bookmarks}</h4>
        </div>

        <div className='scroll' aria-label="Share Icon">
          <PiShareFatFill size={42} style={{color: 'white'}}/>
          <h4>{videos[index].shares}</h4>
        </div>
      </div>


    </div>


  );
}

export default Video;