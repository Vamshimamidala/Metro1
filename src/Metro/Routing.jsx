import React from 'react'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import { Metro } from './Metro'
import View from './View'
import Myaccount from './Myaccount'
import About from './About'
 

const Routing = () => {
  return (
    <>
       <Routes>
         <Route path='/' element={<Metro/>}/>
         <Route path='/view' element={<View/>}/>
         <Route path='/account' element={<Myaccount/>}/>
         <Route path='/about' element={<About/>}/>
         
        
       </Routes>
    </>
  )
}

export default Routing
