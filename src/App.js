import React, {useState, useRef} from 'react'
import VED from "./src/trailer.mp4.mp4"

const App=()=> {
    let[video, setVideo]=useState (VED)
    let [play, setPlay]= useState (true)
    let videoRef=useRef("")

    let playOrPause=()=>{
        if (play==true)
        {
           setPlay(false)
           videoRef.current.play();
        }
        else{
            setPlay(true)
            videoRef.current.pause();
        }
    }

  return (
    <div>
        <video src={video} ref={videoRef} onClick={playOrPause}></video>
    </div>
  )
}

export default App