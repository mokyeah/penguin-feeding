import React, { useEffect, useState } from 'react'
import { Icon } from '@iconify/react';
import { Route, Routes, Link, BrowserRouter as Router, useActionData } from "react-router-dom";
import Penguin from "./penguin"
import Fish from "./fish"

function App() {

const [data, setData] = useState(0)
const [clickFish, onClickFish] = useState("./public/fish02.png")
const [isButtonDisabled, setIsButtonDisabled] = useState(false)

const alert = () => {
  alert("caonima")
}

const handle = () => {
  if (clickFish === './public/fish02.png') {
    onClickFish('./public/fish03.png')  
  }
  else onClickFish('./public/fish02.png')
}

  useEffect(() => {
    if (clickFish === './public/fish03.png') {
      const timer = setTimeout(() => {
        onClickFish('./public/fish02.png');
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [clickFish]);

  const handleClick = () => {
    if (!isButtonDisabled) {
      setData(data + 1);
      setIsButtonDisabled(true);
      setTimeout(() => {
        setIsButtonDisabled(false);
      }, 500);
    }
  };

  

  
  return (
    <div className='bg-blue-200 w-full h-screen flex flex-col'>
      <Router>
      <div className='absolute p-3'>
        <div className='border-2 rounded-md border-black w-32 h-min justify-center flex'>
        <button className='text-2xl'><Link to="/penguin">feed the <div className='font-bold '>PENGUIN</div></Link></button>
      </div>
      <div className='border-2 rounded-md border-black w-32 h-min justify-center flex'>
        <button className='text-2xl'><Link to="/fish">grab the <div className='font-bold '>FISH</div></Link></button>
      </div>
      </div>
      <Routes>
      <Route path="/penguin" element={<Penguin/>}></Route>
      <Route path= "/fish" element={<Fish/>}></Route>
      </Routes>
      </Router>
    </div>
  )
}

export default App