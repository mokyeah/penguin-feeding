import React, { useEffect, useState } from 'react'
import { Icon } from '@iconify/react';
import { Route, Routes, Link, BrowserRouter as Router, useActionData } from "react-router-dom";

function fish() {

const [data, setData] = useState(0)
const [clickFish, onClickFish] = useState("../src/assets/fish02.png")
const [isButtonDisabled, setIsButtonDisabled] = useState(false)
const [clickBase, onClickBase] = useState("")
const alert = () => {
  alert("caonima")
}

const handle = () => {
  if (clickFish === '../src/assets/fish02.png') {
    onClickFish('../src/assets/fish03.png')  
  }
  else onClickFish('../src/assets/fish02.png')
}

  useEffect(() => {
    if (clickFish === '../src/assets/fish03.png') {
      const timer = setTimeout(() => {
        onClickFish('../src/assets/fish02.png');
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
    <div className='bg-blue-200 w-full h-screen flex flex-col '>
      <div className='justify-center flex'>
        <div className='flex-row p-3'>
        <div className='text-2xl font-bold '>PENGUIN FEEDING SIMULATOR</div>
        <div className='text-m justify-center flex'>capture the fish and feed the penguin</div>
        </div>
      </div>
      <div className='justify-center flex '>
      <div disabled={isButtonDisabled} onClick={handleClick}>
      <button className="flex p-20" onClick={handle} >
  <img className="max-w-sm h-40 " src={clickFish}/> 
</button>
      </div>
      </div>
      <div className='text-3xl font-mono font-semibold justify-center flex '>fish collected: {data}</div>      

    </div>
  )
}

export default fish