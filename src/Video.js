import './Video.css';
import React, { useRef, useState, useEffect } from "react";
import useElementOnScreen from './useElementOnScreen'

// Video element with url as param
function Video({ url, user, caption }) {
  //useState saves and changes the state of playing to keep track of playing/pausing
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3,
    initialInView: true
  }

  const isVisibile = useElementOnScreen(options, videoRef)

  const onVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  //called when isVisible changes
  useEffect(() => {
    if (isVisibile) { //autoplay 
      if (!playing) {   
        videoRef.current.volume = 0;     
        videoRef.current.play();
        setPlaying(true);
        videoRef.current.volume = 1;     
      }
      //TODO: this only works for desktop because mobile blocks autoplay with audio
    }
    else { //autopause when scrolling away
      if (playing) {        
        videoRef.current.pause();
        setPlaying(false)
      }
    }
  }, [isVisibile])

  return (
    <div className='frame'>
      <video className='video' 
        src={url+'#t=0.001'}
        onClick={onVideoPress}
        ref={videoRef}
        loop
        playsInline
      ></video>
      <div className='body'>
        <h3 className='user'>@{user}</h3>
        <p className='caption'>{caption}</p>
        </div>
    </div>
  );
}

export default Video;