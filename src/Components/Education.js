import React from 'react';
import './Education.css';

export default function Education() {
  return (
    <div className="section bg-light border my-4 mx-4" id='education'>
        <div className='container title text-center h4 mb-4'>Education</div>
      <div className="container px-4 education">
        <div className="row gx-5 mx-4 my-4">
          <div className="col-4 front" style={{backgroundColor : "gray"}}>
            <div className="p-3">2020</div>
            <p>Bachlor's Degree</p>
          </div>
          <div className="col-8 front">
            <div className="p-3 h4">IMS ENGINEERING COLLEGE GHAZIABAD</div>
            <p>74%</p>
          </div>
        </div>
      </div>
      <div className="container px-4">
        <div className="row gx-5 mx-4 my-4">
          <div className="col-4 front" style={{backgroundColor : "gray"}}>
            <div className="p-3">2016</div>
            <p>Intermediate</p>
          </div>
          <div className="col-8 front">
            <div className="p-3 h4">D D S S S V M Inter College</div>
            <p>73%</p>
          </div>
        </div>
      </div>
      <div className="container px-4">
        <div className="row gx-5 mx-4 my-4">
          <div className="col-4 front" style={{backgroundColor : "gray"}}>
            <div className="p-3">2014</div>
            <p>High School</p>
          </div>
          <div className="col-8 front">
            <div className="p-3 h4">S V M</div>
            <p>84%</p>
          </div>
        </div>
      </div>
      </div>
  )
}
