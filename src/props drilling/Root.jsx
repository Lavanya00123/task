import React from 'react'
import Grandparent from './Grandparent.jsx'
import "./global.css"
const Root = () => {
  return (
    <div className='root'><h1>ROOT</h1>
    <Grandparent data="DINESH"/>
    </div>
  )
}

export default Root
