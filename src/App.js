import React, { Component } from 'react'
import Teams from './components/Home/Teams'
import Navbar from './components/NavBar/Navbar'
import Players from './components/PlayerPage/Players'
import About from './components/About/About'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Schedule from './components/Schedule/Schedule'
import "./App.css";

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
      
        <Navbar/>
        <div className='app'>
       <Routes >
        <Route exact path='/' element={<Teams/>}/>
        <Route  path='/players/:team' element={<Players/>}/>
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/schedule' element={<Schedule/>}/>
       
       </Routes>
        </div>
      </BrowserRouter>
      
    )
  }
}

export default App
