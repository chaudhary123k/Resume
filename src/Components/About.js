import React from 'react';
import './About.css';
import {motion} from 'framer-motion';

export default function About() {
  return (
    <> 
      <motion.div className="section border my-4 mx-4 about" id='about' whileDrag={{scale:1.2}}  initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <motion.div className="container px-4">
          <div className="row gx-5">
            <div className="col">
              <div className="p-3 h4" style={{ color: "white" }}>About</div>
              <p style={{ color: "white" }}>I am reliable. Hard working with strong attention to detail and eager to learn about new technologies.Creative CV is a HTML resume template for professionals. Built with Bootstrap 4, Now UI Kit and FontAwesome, this modern and responsive design template is perfect to showcase your portfolio, skills and experience</p>
            </div>
            <div className="col info">
              <div className="p-3 h4" style={{ color: "white" }}>Basic Information</div>
              <div className="row">
                <div className="col-sm-4">
                  <p style={{ color: "white" }}>AGE:</p>
                </div>
                <div className="col-sm-6" style={{ color: "white" }}>23</div>
              </div>
              <div className="row">
                <div className="col-sm-4">
                  <p style={{ color: "white" }}>EMAIL:</p>
                </div>
                <div className="col-sm-6" style={{ color: "white" }}>karishma.chaudhary182@gmail.com</div>
              </div>
              <div className="row">
                <div className="col-sm-4">
                  <p style={{ color: "white" }}>PHONE:</p>
                </div>
                <div className="col-sm-6" style={{ color: "white" }}>7982280149</div>
              </div>
              <div className="row">
                <div className="col-sm-4">
                  <p style={{ color: "white" }}>LANGUAGE:</p>
                </div>
                <div className="col-sm-6" style={{ color: "white" }}>English , Hindi</div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  )
}
