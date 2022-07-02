import React from 'react';
import Img from "./images/photo.jpg.jpeg";
import './Profile.css';
import Resume from "./Karishma Resume.pdf";
import {motion} from 'framer-motion';
// import ReactToPrint from 'react-to-print';
// import { savePDF } from '@progress/kendo-react-pdf';


export default function Profile() {
  // const downloadFile = () => {
  //   // alert("hello");
  //   window.location.href = "C:\Users\DELL\OneDrive\Desktop\KARISHMA CHOUDHARY.docx"
  // }
  
 
  return (
    <div className='profile' id='profile'>

<div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
  <div className="carousel">
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://demo.templateflip.com/material-resume/images/header-background.jpg" className="d-block" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <div className="content-center mx-4 my-4">
          <a href='#avtar'>
            <motion.img className='avatar' src={Img} alt="Avatar" animate={{scale: [1, 2, 2, 1, 1],
      borderRadius: ["20%", "20%", "50%", "50%", "20%"],}} whileHover={{ scale: 1.1 }} />
          </a>
        </div>
        <motion.h1 style={{color : "black" , fontFamily:"cursive"}} initial={{ opacity: 0 }} animate={{opacity:1}} transition={{delay:0.5 ,duration:2}}>Karishma Choudhary</motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{opacity:1}} transition={{delay:1 ,duration:2}} style={{fontSize : 25 , color: "black" , fontFamily:"cursive"}}>A4 Analyst , Software Developer</motion.p>
        <motion.p style={{fontSize : 25 , color: "black" ,fontFamily:"cursive"}} initial={{ opacity: 0 }} animate={{opacity:1}} transition={{delay:1.5 ,duration:2}}>FrontEnd Developer</motion.p>
        <a href='#contact'>
        <motion.button className='btn my-4 mx-4' style={{color : "white" , backgroundColor: "black"}} whileHover={{scale : 1.1 , backgroundColor:"brown"}}>Hire me</motion.button>
        </a>
        <a href={Resume}download>
      <motion.button className='btn' style={{color : "white" ,  backgroundColor: "black"}} whileHover={{scale : 1.1 , backgroundColor:"lightgreen"}}>Download CV</motion.button>
      </a>
      </div>
    </div>
  </div>
  </div>
  </div>
  )
}
