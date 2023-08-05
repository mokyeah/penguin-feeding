import React, { useEffect, useState } from 'react'
import { Icon } from '@iconify/react';
import { Route, Routes, Link, BrowserRouter as Router, useActionData } from "react-router-dom";
import { doc, updateDoc, increment } from "firebase/firestore";
import { useDocumentData } from "react-firebase-hooks/firestore";
import { firestore } from "./firebase"

function penguin() {
  const [clickPenguin, onClickPenguin] = useState("../pictures/penguin-cry.gif")
  const [isButtonDisabled, setIsButtonDisabled] = useState(false)

  const [datas] = useDocumentData(doc(firestore, "click", "click-counter"))

  const handle = () => {
    if (clickPenguin === '../pictures/penguin-cry.gif') {
      onClickPenguin('../pictures/penguin-eat.gif')
    }
    else onClickPenguin('../pictures/penguin-eat.gif')
  }

  const handleClick = () => {
    if (!isButtonDisabled) {
      updateDoc(doc(firestore, "click", "click-counter"), { clicks: increment(-10) })
      setIsButtonDisabled(true);
      setTimeout(() => {
        setIsButtonDisabled(false);
      }, 500);
    }
  };

  useEffect(() => {
    if (clickPenguin === '../pictures/penguin-eat.gif') {
      const timer = setTimeout(() => {
        onClickPenguin('../pictures/penguin-cry.gif');
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [clickPenguin]);


  return (
    <div className='w-full h-screen justify-center bg-blue-200   flex '>
      <div className='flex flex-col '>
        <div className='flex-row flex font-bold text-2xl font-mono justify-center p-3 '>PENGUIN <Icon className='text-4xl' icon="noto:penguin" /></div>
        <div className=' text-m font-mono'></div>
        <div className='w-96 h-96'>
          <img src={clickPenguin}></img>
          <div className='text-2xl p-3 justify-center flex font-serif'>PENGUIN IS HUNGRY</div>

        </div>
        <div className='justify-center items-center flex flex-col  '>
          <div className='border-2 items-center rounded-md w-32 h-12 justify-center font-bold text-xl  flex '>
          {datas?.clicks <= 10 ? (
        <button>FEED HIM</button>)
        : (<div disabled={isButtonDisabled} onClick={handleClick}>
          <button onClick={handle}>FEED HIM</button>
        
        </div>)}
            

          </div>

          <div className='text-xl font-mono font-semibold justify-center flex '> Fish: {datas?.clicks}</div>

        </div>
      </div>

    </div>
  )
}

export default penguin