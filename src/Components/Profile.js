import React from 'react';
import Img from "./images/photo.jpg.jpeg";
import './Profile.css';
import Resume from "./Karishma Resume.pdf";
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
            <img className='avatar' src={Img} alt="Avatar" />
          </a>
        </div>
        <h1 className='name' style={{color : "black"}}>Karishma Choudhary</h1>
        <p className='designation' style={{fontSize : 25 , color: "black"}}>A4 Analyst , Software Developer</p>
        <p className='designation' style={{fontSize : 25 , color: "black"}}>FrontEnd Developer</p>
        <a href='#contact'>
        <button className='btn my-4 mx-4' style={{color : "white" , backgroundColor: "black"}}>Hire me</button>
        </a>
        <a href={Resume}download>
      <button className='btn' style={{color : "white" ,  backgroundColor: "black"}}>Download CV</button>
      </a>
      </div>
    </div>
  </div>
  </div>
  </div>
  )
}
