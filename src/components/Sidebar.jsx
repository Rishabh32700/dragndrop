import React, { useContext } from "react";
import ReactDOMServer from "react-dom/server";
import "./sidebar.css";

import SendMessage from "./sendmessage/SendMessage";
import IvrMenu from "./ivrMenu/IvrMenu";
import { global } from "../App";

const Sidebar = () => {
  const {dataArr,setDataArr} = useContext(global);

    function add(ele){
        setDataArr([...dataArr,ele])
    }
  return (
    <>
      <div className="sidebar">
        <div className="sidebar__container">
            {/* <ul>
                <li onClick={()=>{add(<SendMessage/>)}} >hello</li>
                <li onClick={()=>{add(<IvrMenu/>)}}>hi</li>
            </ul> */}
            <ul className="messaging">
                <li onClick={()=>{add(<SendMessage/>)}}>Send Message</li>
            </ul>
            <ul className="voice">
                <li onClick={()=>{add(<IvrMenu/>)}}>IVR Menu</li>
                <li onClick={()=>{add(<SendMessage/>)}}>Get Input</li>
                <li onClick={()=>{add(<SendMessage/>)}}>Initiate Call</li>
                <li onClick={()=>{add(<SendMessage/>)}}>Call Forward</li>
                <li onClick={()=>{add(<SendMessage/>)}}>Hangup</li>
                <li onClick={()=>{add(<SendMessage/>)}}>Play Audio</li>
                <li onClick={()=>{add(<SendMessage/>)}}>Record Audio</li>
                <li onClick={()=>{add(<SendMessage/>)}}>Multi-Party call</li>
                <li onClick={()=>{add(<SendMessage/>)}}>Conference Bridge</li>
                <li onClick={()=>{add(<SendMessage/>)}}>Multi-Party call v2</li>
            </ul>
            <ul className="functions">
                <li onClick={()=>{add(<SendMessage/>)}}>HTTP request</li>
                <li onClick={()=>{add(<SendMessage/>)}}>Counter</li>
                <li onClick={()=>{add(<SendMessage/>)}}>Branch</li>
            </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
