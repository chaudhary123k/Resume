import React from 'react';
import './Education.css';

export default function Education() {
  return (
    <div className="section border my-4 mx-4" id='education' style={{backgroundColor : "#3f4953"}}>
        <div className='container title text-center h4 mb-4' style={{color :"white"}}>Education</div>
      <div className="container px-4 education">
        <div className="row gx-5 mx-4 my-4">
          <div className="col-4 front" style={{backgroundColor : "gray"}}>
            <div className="p-3" style={{color : "white"}}>2020</div>
            <p style={{color : "white"}}>Bachlor's Degree</p>
          </div>
          <div className="col-8 front">
            <div className="p-3 h4" style={{color : "brown"}}>IMS ENGINEERING COLLEGE GHAZIABAD</div>
            <p style={{color : "white"}}>74%</p>
          </div>
        </div>
      </div>
      <div className="container px-4">
        <div className="row gx-5 mx-4 my-4">
          <div className="col-4 front" style={{backgroundColor : "gray"}}>
            <div className="p-3" style={{color : "white"}}>2016</div>
            <p style={{color : "white"}}>Intermediate</p>
          </div>
          <div className="col-8 front">
            <div className="p-3 h4"  style={{color : "brown"}}>D D S S S V M Inter College</div>
            <p  style={{color : "white"}}>73%</p>
          </div>
        </div>
      </div>
      <div className="container px-4">
        <div className="row gx-5 mx-4 my-4">
          <div className="col-4 front" style={{backgroundColor : "gray"}}>
            <div className="p-3" style={{color : "white"}}>2014</div>
            <p style={{color : "white"}}>High School</p>
          </div>
          <div className="col-8 front">
            <div className="p-3 h4"  style={{color : "brown"}}>S V M</div>
            <p  style={{color : "white"}}>84%</p>
          </div>
        </div>
      </div>
      </div>
  )
}
