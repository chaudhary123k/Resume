import React from 'react';
import Img from "./images/photo.jpg.jpeg";
import './Profile.css';
// import ReactToPrint from 'react-to-print';
// import { savePDF } from '@progress/kendo-react-pdf';


export default function Profile() {
  // const downloadFile = () => {
  //   // alert("hello");
  //   window.location.href = "C:\Users\DELL\OneDrive\Desktop\KARISHMA CHOUDHARY.docx"
  // }
  
 
  return (
    <div>

<div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
  <div className="carousel">
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://demo.templateflip.com/material-resume/images/header-background.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <div className="content-center mx-4 my-4">
          <a href='#'>
            <img className='avatar' src={Img} alt="Avatar" />
          </a>
        </div>
        <h1 style={{color : "black"}}>Karishma Choudhary</h1>
        <p style={{fontSize : 25 , color: "black"}}>A4 Analyst , Software Developer</p>
        <p style={{fontSize : 25 , color: "black"}}>FrontEnd Developer</p>
        <button className='btn my-4 mx-4' style={{color : "white" , backgroundColor: "black"}}>Hire me</button>
      <button className='btn' style={{color : "white" ,  backgroundColor: "black"}}>Download CV</button>
      </div>
    </div>
  </div>
  </div>
  </div>
  )
}
