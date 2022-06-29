import React from 'react';
import './About.css';

export default function About() {
  return (
    <>
    <div className="section border my-4 mx-4 about" id='about'>
      <div className="container px-4">
        <div className="row gx-5">
          <div className="col">
            <div className="p-3 h4">About</div>
            <p>I am reliable. Hard working with strong attention to detail and eager to learn about new technologies.Creative CV is a HTML resume template for professionals. Built with Bootstrap 4, Now UI Kit and FontAwesome, this modern and responsive design template is perfect to showcase your portfolio, skills and experience</p>
          </div>
          <div className="col info">
            <div className="p-3 h4">Basic Information</div>
            <div className="row">
              <div className="col-sm-4">
                <p>AGE:</p>
              </div>
              <div className="col-sm-6">23</div>
            </div>
            <div className="row">
              <div className="col-sm-4">
                <p>EMAIL:</p>
              </div>
              <div className="col-sm-6">karishma.chaudhary182@gmail.com</div>
            </div>
            <div className="row">
              <div className="col-sm-4">
                <p>PHONE:</p>
              </div>
              <div className="col-sm-6">7982280149</div>
            </div>
            <div className="row">
              <div className="col-sm-4">
                <p>LANGUAGE:</p>
              </div>
              <div className="col-sm-6">English , Hindi</div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}
