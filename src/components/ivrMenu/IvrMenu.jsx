import React from 'react'



const IvrMenu = () => {
  return (
    <>
      <div className="sendMessage">
        <div className="sendMessage__container">
          <div className="sendMessage__header">
            <div className="left">
              <div className="dot"></div>
              <h4>IVR Menu</h4>
            </div>
            <div className="right">
              <span>i</span>
              <span>X</span>
            </div>
          </div>
          <div className="sendMessage__content">get user input</div>
          <div className="sendMessage__footer">
            <div className="left">
              <span>no input</span>
            </div>
            <div className="right">
              <span>wrong input</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default IvrMenu