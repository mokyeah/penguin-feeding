import React, { useState, useEffect } from 'react';

function find() {

    const [moles, setMoles] = useState(Array(9).fill(false));
    const [score, setScore] = useState(0);
  
    useEffect(() => {
      const moleInterval = setInterval(() => {
        const randomMole = Math.floor(Math.random() * 9);
        setMoles(prevMoles => {
          const newMoles = [...prevMoles];
          newMoles[randomMole] = true;
          return newMoles;
        });
      }, 1000);
  
      return () => clearInterval(moleInterval);
    }, []);
  
    const handleMoleClick = moleIndex => {
      if (moles[moleIndex]) {
        setScore(prevScore => prevScore + 1);
        setMoles(prevMoles => {
          const newMoles = [...prevMoles];
          newMoles[moleIndex] = false;
          return newMoles;
        });
      }
    };
  
  
  
  return (
    <div className="container mx-auto p-8 text-center">
      <h1 className="text-4xl font-semibold mb-4">Whack-A-Penguin   !</h1>
      <p className="text-lg mb-8">Score: {score}</p>
      <div className="grid grid-cols-3 gap-4">
        {moles.map((mole, index) => (
          <div
            key={index}
            className={`mole-box rounded-md ${
              mole ? 'bg-blue-600' : 'bg-gray-400'
            }`}
            onClick={() => handleMoleClick(index)}
          >
            {mole && <img src={'../penguinMole.png'} alt="Mole" className="mole-img" />}
          </div>
        ))}
      </div>
    </div>
  );
        }


export default find