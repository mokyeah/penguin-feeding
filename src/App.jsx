import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import {
  Route,
  Routes,
  Link,
  BrowserRouter as Router,
  useActionData,
} from "react-router-dom";
import Penguin from "./penguin";
import Fish from "./fish";
import { doc, getDoc } from 'firebase/firestore';



function App() {
  const [data, setData] = useState(0);
  const [clickFish, onClickFish] = useState("../src/assets/fish02.png");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);





  useEffect(() => {
    if (clickFish === "../src/assets/fish03.png") {
      const timer = setTimeout(() => {
        onClickFish("../src/assets/fish02.png");
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
    <div className="bg-blue-200 w-full h-screen flex flex-row ">
      <Router>
        <nav>
          <div className=" w-32 h-screen">
            <div className="justify-center flex ">
            <div className="bg-black absolute w-1 h-screen"></div>
            </div>
            <div className="p-2 justify-between space-y-5">
            <div className="">
              <button className="text-5xl justify-center ">
                <Link to="/penguin">
                <Icon icon="mdi:penguin" />
                </Link>
              </button>
            </div>
            <div className="">
              <button className="text-5xl justify-center flex">
                <Link to="/fish">
                <Icon icon="mdi:fish" />

                </Link>
              </button>
            </div>
            </div>
            <button className="text-4xl p-3 inset-x-0 bottom-0 flex absolute">
              <Link to="/info">
            <Icon icon="material-symbols:info" />
            </Link>
            </button>
          </div>
        </nav>
        <main className="w-full h-screen">
          <Routes>
            <Route path="/penguin" element={<Penguin />}></Route>
            <Route path="/fish" element={<Fish />}></Route>
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
