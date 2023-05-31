import React from 'react'
import { Routes as Router, Route, Navigate } from "react-router-dom";
import { Results } from "./Results";

export const Routes = () => {

  return (
    <Router>
      <Route path='/' element={<Navigate to="/search"/>}/>
        <Route path='/search' element={<Results/>}/>
        <Route path='/imagesearch' element={<Results/>}/>
        <Route path='/news' element={<Results/>}/>
        <Route path='/videos' element={<Results/>}/>
    </Router>
  )
}
