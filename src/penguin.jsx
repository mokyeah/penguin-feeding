import React, { useEffect, useState } from 'react'
import { Icon } from '@iconify/react';
import { Route, Routes, Link, BrowserRouter as Router, useActionData } from "react-router-dom";


function penguin() {
    const [feed, setFeed] = useState("")
  return (
    <div className='w-full h-screen justify-center bg-blue-200   flex '>
        <div className='flex flex-col '>
            <div className='flex-row flex font-bold text-2xl font-mono justify-center '>PENGUIN <Icon className='text-4xl' icon="noto:penguin" /></div>
            <div className=' text-m font-mono'></div>
            <div className=''>
            <img src='../src/assets/penguin-cry.gif'></img>
            <div className='text-2xl p-3 justify-center flex font-serif'>PENGUIN IS HUNGRY</div>
            <div className='border-2 rounded-md '>FEED HIM</div>
            </div>
        </div>
        
    </div>
  )
}

export default penguin