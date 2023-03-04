import React from 'react'
import Child1 from './Child1.jsx'
import Child2 from './Child2.jsx'
import "./global.css"


const Parent = (props) => {
  return (
    <div className='pt'><h3>Parent</h3>

    <Child1 data={props.data} />
    <Child2  data={props.data}/>
    </div>
  )
}

export default Parent