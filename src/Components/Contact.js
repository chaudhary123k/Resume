import React, { useRef } from 'react';
import background from "./images/xyz.jpg";
import emailjs from '@emailjs/browser';
import {motion} from 'framer-motion';
import "./Contact.css";
// import emailjs from 'emailjs-com';

export default function Contact() {

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_p9i1zbm', 'template_g5jcgah', form.current, 'R2R91oYFjQL1vT6I8')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        alert("form is submitted ");
    };
    //     const [data, setData] = useState("");
    //     const [data2, setData2] = useState("");
    //     const [data3, setData3] = useState("");

    //     const handleonchange = (event) => {
    //         setData(event.target.value);
    //     }

    //     const handleonchange2 = (event) => {
    //         setData2(event.target.value);
    //     }

    //     const handleonchange3 = (event) => {
    //         setData3(event.target.value);
    //     }
        // const handleclick = () => {
        //     const newdata = data;
        //     const newdata1 = data2;
        //     const newdata2 = data3;

        //     console.log(newdata, newdata1, newdata2);
        //     // alert (newdata);
        //     // setData(newdata);
        // }
    return (<>
          <div className='contact' style={{ backgroundImage: `url(${background})`}} id='contact'>
            <div className='card'>
                <form className="form" onSubmit={sendEmail} ref={form}>

                    <label for="exampleFormControlInput1" className="form-label" style={{color: "white"}}>Name</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" name='user_name' placeholder="enter your name" />
                    <label for="exampleFormControlInput1" className="form-label" style={{color:"white"}}>Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput2" placeholder="name@example.com" name='user_email' />
                    <label for="exampleFormControlTextarea1" className="form-label" style={{color:"white"}}>Subject</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name='message'></textarea>
                    <motion.input type="submit" className="button" name='submit' value="Send" style={{backgroundColor : "red" , color : "white" , width : 100, padding: 2, margin: 20 , borderRadius:25}} whileHover={{scale:1.1}}></motion.input>
                </form>
                </div>
                </div>
        
                {/* <button className='btn btn-success' onClick={handleclick} style={{ width: 200, justifyContent: 'center', alignItems: 'center' }}>Send</button> */}

                {/* <p>{data.length>0?data : ""} <br/> {data2.length>0?data2 : ""} <br/> {data3.length>0?data3 : ""}</p> */}

                {/* <div className='col p-4'>
                    <div className="row">
                        <div className="col-sm-4">
                            <p style={{ color: "white" }}>Name:</p>
                        </div>
                        <div className="col-sm-6" style={{ color: "white" }}>Karishma Choudhary</div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4">
                            <p style={{ color: "white" }}>Email Address:</p>
                        </div>
                        <div className="col-sm-6" style={{ color: "white" }}>karishmachaudhary182@gmail.com</div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4">
                            <p style={{ color: "white" }}>Phone:</p>
                        </div>
                        <div className="col-sm-6" style={{ color: "white" }}>7982280149</div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4">
                            <p style={{ color: "white" }}>Current Salary:</p>
                        </div>
                        <div className="col-sm-6" style={{ color: "white" }}>4 lpa</div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4">
                            <p style={{ color: "white" }}>Expectation Salary:</p>
                        </div>
                        <div className="col-sm-6" style={{ color: "white" }}>8-10 lpa</div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4">
                            <p style={{ color: "white" }}>My GitHub URL:</p>
                        </div>
                        <div className="col-sm-6" style={{ color: "white" }}>https://github.com/chaudhary123k</div>
                    </div>


                </div> */}
            

    
    </>
    )
}
