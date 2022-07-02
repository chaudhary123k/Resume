import React from 'react';
import './Navbar.css';
import {motion} from 'framer-motion';
// import { Link } from 'react-router-dom'

export default function Navbar(props) {
  // const [isHovering, setIsHovering] = useState(false);

  // const handleMouseEnter = () => {
  //   setIsHovering(true);
  // };

  // const handleMouseLeave = () => {
  //   setIsHovering(false);
  // };
  //  const myFunction = () =>{
  //   let x=document.getElementById("mynav");
  //   if(x.className==="topnav"){
  //     x.className +="responsive";
  //   }
  //   else{
  //     x.className="topnav";
  //   }
  //  }

  return (
    <div className='topnav' id='mynav'>
      <nav className="navbar fixed-top navbar-expand-lg">
  <div className="container-fluid">
    <motion.a className="navbar-brand" href="#profile" style={{color : "white" , fontFamily: "cursive" ,
    fontSize: "larger"}} whileHover={{scale:1.1 , color: "red" , fontStyle:"italic"}}>{props.title}</motion.a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="nav-right" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
        <li className="nav-item">
          <motion.a className="nav-link active" aria-current="page" href="#about" style={{ fontFamily: "cursive" ,
    fontSize: "larger", color : "white"}} whileHover={{scale:1.1 , color:"red" , fontStyle:"italic"}}>About</motion.a>
        </li>
        <li className="nav-item">
          <motion.a className="nav-link" href="#skills" style={{ fontFamily: "cursive" ,
    fontSize: "larger" ,color: "white" }} whileHover={{scale:1.1 , color:"red" , fontStyle:"italic"}}>Skills</motion.a>
        </li>
        <li className="nav-item">
          <motion.a className="nav-link" href="#education" style={{color : "white" , fontFamily: "cursive" ,
    fontSize: "larger"}} whileHover={{scale:1.1 , color:"red" , fontStyle:"italic"}}>Education</motion.a>
        </li>
        <li className="nav-item">
          <motion.a className="nav-link" href="#experience" style={{color : "white" , fontFamily: "cursive" ,
    fontSize: "larger"}} whileHover={{scale:1.1 , color:"red" , fontStyle:"italic"}}>Experience</motion.a>
        </li>
        <li className="nav-item">
          <motion.a className="nav-link" href="#contact" style={{ fontFamily: "cursive" ,color : "white",
    fontSize: "larger"}} whileHover={{scale:1.1 , color:"red" , fontStyle:"italic"}}>Contact</motion.a>
        </li>
        {/* <a href="#" class="icon" onclick={myFunction}>
        <i class="fa fa-bars"></i>
        </a> */}
       </ul>
      
    </div>
  </div>
</nav>
    </div>
  )
}
