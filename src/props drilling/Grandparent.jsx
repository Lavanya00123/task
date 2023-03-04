import React from 'react'
import Parent from './Parent.jsx'
import "./global.css"

const Grandparent = (props) => {
  return (
    <div className='gp'><h1>Grandparent</h1>

     <Parent data={props.data} />
    </div>
  )
}

export default Grandparent