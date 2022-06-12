import React, { useRef, useEffect, useState, useContext, createContext } from 'react'
import MainScreen from "./components/MainScreen";
import Sidebar from "./components/Sidebar";

import "./app.css";


export let global = createContext()

const App = () => {

let [dataArr,setDataArr]=useState([])
  return (
    <>
      <div className="app">
        <div className="app__container">
          <global.Provider value={{ dataArr, setDataArr }}>
            <Sidebar />
            <MainScreen />
          </global.Provider>
        </div>
      </div>
    </>
  );
};
export default App;
