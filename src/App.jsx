// import React from "react";
// import "./global.css"
// import Nav from "./components/Nav";
// import Nav2 from "./components2/Nav2";
// import Nav3 from "./components3/Nav3";
// import Nav4 from "./components4/Nav4";
// import Nav5 from "./components5/Nav5";


// const App=()=>{
//     return(
//         <>
//         <div className='root'><h1>ROOT</h1>
//     </div>
//         < Nav />
//         < Nav2 />
//         < Nav3 />
//         < Nav4 />
//         < Nav5 />
//         </>
//     )
// }
// export default App;


// -------------------------------------------------------------------------------
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






