
import React from 'react'
import './App.css';
import Particles from 'react-particles-js';
import  Stepforms  from './components/Stepforms';
import Logo from './components/Login/Logo';




const App = () => {

const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: true,
      enable: 800
    }
  }
}


  return (
    < className='App'>
        <Particles className='particles'
           params={ particlesOptions } 
        />
         <Logo /></
       <Stepforms />
       
    </div>
  )
}

export default App
