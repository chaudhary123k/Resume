// import logo from './logo.svg';

import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Education from './Components/Education';
import Experience from './Components/Experience';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Skills from './Components/Skills';
// import {
//   BrowserRouter,
//   Routes,
//   Route
// } from "react-router-dom";
import Profile from './Components/Profile';
// import {useReactToPrint} from 'react-to-print';
// import React , {useRef} from 'react';


// class ComponentToPrint extends React.Component{
//   render(){
//    return(
//      <div>heloooooooooooo</div>
//    );
//   }
//  }

const App = () =>{
  // const componentRef = useRef();
  // const handlePrint = useReactToPrint({
  //   content : () => componentRef.current,
  // });



  return (
    <>
     {/* <ComponentToPrint ref={componentRef}/> */}
   {/* <Navbar title="Creative CV" /> */}
   <Profile />
    <About />
    <Skills />
    <Education />
    <Experience />
    <Contact />
        <Footer />
        {/* <div>
        <button onClick={handlePrint}>print this out</button>
        </div> */}
    </>
  );
}

export default App;
