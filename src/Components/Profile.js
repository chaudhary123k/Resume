import React from 'react';
import Img from "./images/photo.jpg.jpeg";
import './Profile.css';
import Resume from "./Karishma Resume.pdf";
import { motion } from 'framer-motion';
// import Typical from 'react-typical';


export default function Profile() {
  // const downloadFile = () => {
  //   // alert("hello");
  //   window.location.href = "C:\Users\DELL\OneDrive\Desktop\KARISHMA CHOUDHARY.docx"
  // }


  return (
    <div className='profile' id='profile'>
      <div className="inner-profile">
        <div className="profile-all-details">
          <img src="https://demo.templateflip.com/material-resume/images/header-background.jpg" className="img" alt="..." />
          <div className="details">
            <div className="picture">
              <a href='#avtar'>
                <motion.img className='avatar' src={Img} alt="Avatar" whileHover={{ scale: 1.07, transition: [2, "easeinout"] }} />
              </a>
            </div>
            <div className='profile-details'>
              <motion.h1 className='profile-name' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 2 }}>Karishma Choudhary</motion.h1>
              <motion.p className='designation' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 2 }} style={{ fontSize: 25, color: "black", fontFamily: "cursive" }}>A4 Analyst , Software Developer</motion.p>
              <motion.p className='designation' style={{ fontSize: 25, color: "black", fontFamily: "cursive" }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 2 }}>FrontEnd Developer</motion.p>
              <a href='#contact'>
                <motion.button className='hire' whileHover={{ scale: 1.1, backgroundColor: "brown" }}>Hire me</motion.button>
              </a>
              <a href={Resume} download>
                <motion.button className='resume' style={{ color: "white", backgroundColor: "black" }} whileHover={{ scale: 1.1, backgroundColor: "lightgreen" }}>Download CV</motion.button>
              </a>
            </div>
            {/* <h1 style={{color : "black"}}>
          {" "}
          <Typical loop={Infinity} 
          steps={[
            "Front End Developer",
            2000,
            "Software Developer",
            2000,
          ]}
          />
        </h1> */}
          </div>
        </div>
      </div>
    </div>
    // </div>
  )
}
