import React, { useContext } from 'react'
import { global } from '../App';

import "./mainscreen.css";


const MainScreen = (props) => {
  const {dataArr,setDataArr} = useContext(global);
  return (
    <>
      <div className="mainscreen">
        <div className="mainscreen__container">
          {dataArr.map((data) => {
            return data;
          })}
        </div>
      </div>
    </>
  );
};

export default MainScreen;
