import React from 'react'
import "./global.css"

const Child2 = (props) => {
  console.log(props);
  return (

    <div className='ch2'>Child2
      <h3 style={{float: "right"}}>{props.data}</h3>
    </div>
  )
}

export default Child2