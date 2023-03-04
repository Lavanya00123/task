import React from 'react'
import "./global.css"

const Child1 = (props) => {
  return (
    <div className='ch1'>Child1
      <h3 style={{float : "right"}}>{props.data}</h3>
    </div>
  )
}

export default Child1

