
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
function App() {
  const [mode,setMode]=useState('light');
const toggleMode= ()=>{
  if(mode==='dark')
    {
      setMode('light');
      document.body.style.backgroundColor='white';
    }
  else{
    setMode('dark');
    document.body.style.backgroundColor='#343a40';
  }
}

const changeColorRed=()=>
 {
   document.body.style.backgroundColor="#8f3e3e";
 //  let navb= document.getElementsByClassName('navbar');
 }
 const changeColorGreen=()=>
 {
  document.body.style.backgroundColor="#737d5b";
 }
 const changeColorPurple=()=>
 {
  document.body.style.backgroundColor="#725281";
 }
  return (
    <>
    <Router>
    <Navbar  title="TextUtils" about="About Us" mode={mode} toggleMode={toggleMode} changeColorGreen={changeColorGreen} changeColorPurple={changeColorPurple} changeColorRed={changeColorRed}/> 
    <div className="container my-3">
    <Routes>
          <Route exact path="/" element={<TextForm heading="Enter you Text Here" mode={mode} toggleMode={toggleMode}/>}/>
          <Route path='/about' element={<About mode={mode}/>} />
    </Routes>
    
      {/*<About/>*/}
    </div>
    </Router>
    
    </>
  );
}

export default App;
