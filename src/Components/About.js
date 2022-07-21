import React from 'react';
import './About.css';
import {motion} from 'framer-motion';

export default function About() {
  return (
    <> 
      <motion.div className="section border my-4 mx-4 about" id='about' whileDrag={{scale:1.2}}  initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <motion.div className="container px-4">
          <div className="row gx-5 row1">
            <div className="col">
              <div className="p-3 h4" style={{ color: "white" }}>About</div>
              <p style={{ color: "white" }}>I am reliable. Hard working with strong attention to detail and eager to learn about new technologies.1 year of experience in the IT industry hands on experience with React js, Sap UI5, Sap Fiori, HTML, CSS, Javascript..... Experienced in React js and SAP UI5 development apllications well versed with development applications hands on experience on Visual Studio Code and Web'ID.</p>
            </div>
            <div className="col info">
              <div className="p-3 h4" style={{ color: "white" }}>Basic Information</div>
              <div className="row">
                <div className="col-sm-4">
                  <p style={{ color: "white" }}>AGE:</p>
                </div>
                <div className="col-sm-6" style={{ color: "white" }}>23</div>
              </div>
              <div className="row row2">
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
