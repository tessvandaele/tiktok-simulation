import './Video.css';
import React, { useRef, useState, useEffect } from "react";
import useElementOnScreen from './useElementOnScreen'
import Heart from 'react-heart';
import { BsArrowDownCircleFill, BsArrowUpCircleFill, BsPlayCircleFill, BsPauseCircleFill, BsBookmarkFill, BsFillDiscFill } from 'react-icons/bs';
import {AiFillMessage, AiFillInfoCircle} from 'react-icons/ai';
import {PiShareFatFill} from 'react-icons/pi';
import MoreInfoWindow from './MoreInfoWindow';
import video_data from './static/all_video_data.json';
import summaries from './static/video_summaries.json';

// Video element with url as param
function Video({ id, url, user, caption, baseline }) {
  //useState saves and changes the state of playing to keep track of playing/pausing
  const [playing, setPlaying] = useState(false);
  // const [isClick, setClick] = useState(false);
  const [active, setActive] = useState(false);
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

    console.log(videoRef);
  };

  const scrollToNextVideo = () => {
    // window.scrollTo({
    //   top: (window.scrollTop + 500) + "px",
    //   behvaior: 'smooth'
    // });


  }

  const handleClickScroll = (direction) => {
    let nextVidIndex = id;
    // console.log(url.substring(7, 9));
    // console.log(nextVidIndex);

    if (nextVidIndex > 0 && direction == 'up') {
      nextVidIndex--;
    } else if (nextVidIndex < video_data.length - 1 && direction == 'down') {
      nextVidIndex++;
    }

    const nextVid = document.getElementById(`videos/0${nextVidIndex}.MP4`);
    console.log(`videos/0${nextVidIndex}.MP4`)
    console.log(nextVid);
    nextVid.scrollIntoView();
    
    // const element = document.getElementById('section-1');
    // if (element) {
    //   // 👇 Will scroll smoothly to the top of the next section
    //   element.scrollIntoView({ behavior: 'smooth' });
    // }

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
    <div className='frame' id={url}>
      <video className='video' 
        src={url+'#t=0.001'}
        onClick={onVideoPress}
        ref={videoRef}
        loop
        playsInline
      ></video>
      <div className='body'>
        {!baseline && (<p className='caption'> 
        {/* {summaries[id]["summary_10"]} */}
        THIS IS WHERE THE SHORT SUMMARY GOES.
        </p>)}
        <h3 className='user'>@{user}</h3>
        <p className='caption'>{caption}</p>
      </div>
      
      
      <div className='sidebar'>

        <div className='scroll' aria-label="Scroll Up">
          <BsArrowUpCircleFill size={42} style={{color: 'white'}} onClick={() => handleClickScroll('up')} />
        </div>

        <div className='scroll'>
          <button style={{outline: 'none', border: 'none', backgroundColor: 'transparent'}} onClick={() => {onVideoPress();}}> 
            {
            playing ? 
            <BsPauseCircleFill size={42} style={{color: 'white'}} aria-label={"Pause Button"} 
            /> 
            : 
            <BsPlayCircleFill size={42} style={{color: 'white'}} aria-label={"Play Button"} />
            }
          </button>
        </div>

        <div className='scroll' aria-label="Scroll Down">
          <BsArrowDownCircleFill size={42} style={{color: 'white'}} onClick={() => handleClickScroll('down')}/>
        </div>

        {/* <div style={{ position: 'absolute', width: "2.5rem", marginLeft: "37px", marginTop: '10px'}}> */}
        {!baseline && (<div className='scroll' aria-label="Details">
          <MoreInfoWindow id={id} />
        </div>)}
        
        
        <div aria-label={active ? "Undo Like Button" : "Like Button"} className='like'>
          <Heart isActive={active} onClick={() => setActive(!active)} animationScale = {1.2} animationTrigger = "both" animationDuration = {.2} className = {`customHeart${active ? " active": ""}`} inactiveColor='white'/>
          <h4>{video_data[id]["likes"]}</h4>
        </div>

        <div className='scroll' aria-label="Comments" style={{color: "white"}}>
          <AiFillMessage size={42} />
          <h4>{video_data[id]["comments"]}</h4>
        </div>

        <div className='scroll' aria-label="Bookmarks">
          <BsBookmarkFill size={40} style={{color: 'white'}} />
          <h4>{video_data[id]["bookmarks"]}</h4>
        </div>

        <div className='scroll' aria-label="Share">
          <PiShareFatFill size={42} style={{color: 'white'}}/>
          <h4>{video_data[id]["shares"]}</h4>
        </div>

      </div>

      <div className='frame_bottom'>
        {/* <button style={{outline: 'none', border: 'none', backgroundColor: 'transparent'}} onClick={() => {onVideoPress();}}> 
          {
          playing ? 
          <BsPauseCircleFill size={42} style={{color: 'white'}} aria-label={"Pause Button"} 
          /> 
          : 
          <BsPlayCircleFill size={42} style={{color: 'white'}} aria-label={"Play Button"} />
          }
        </button> */}
        <BsFillDiscFill size={34} style={{color: 'white', verticalAlign: 'bottom'}}/> 
        <p>     {video_data[id]["originalSound"]} </p>
        
      </div>

    </div>


  );
}

export default Video;