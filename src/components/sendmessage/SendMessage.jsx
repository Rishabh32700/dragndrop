import React, { useState } from "react";

import "./sendmessage.css";


const SendMessage = () => {


  return (
    <>
      <div id="sendMessage" className="sendMessage">
        <div className="sendMessage__container">
          <div className="sendMessage__header">
            <div className="left">
              <div className="dot"></div>
              <h4>Send Message</h4>
            </div>
            <div className="right">
              <span>i</span>
              <span>X</span>
            </div>
          </div>
          <div className="sendMessage__content">Send message to someone</div>
          <div className="sendMessage__footer">
            <div className="left">
              <span>sent</span>
            </div>
            <div className="right">
              <span>Failed</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SendMessage;
