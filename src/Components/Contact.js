import React from 'react';
import background from "./images/xyz.jpg";
// import emailjs from 'emailjs-com';

export default function Contact() {
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
//     const handleclick = () => {
//         const newdata = data;
//         const newdata1 = data2;
//         const newdata2 = data3;

//         console.log(newdata, newdata1, newdata2);
//         // alert (newdata);
//         // setData(newdata);
//     }
    return (<>

        <div style={{ backgroundImage: `url(${background})`, height: 550, margin: 56 }}>
            <div className='container title text-center h3 mb-4 mx-2 my-2'>Contact</div>
            <p className='text-center h4 container mx-4 my-4'>Stay in touch with me</p>
            <div className='container card' style={{ height: 400, width: 700 , backgroundColor: "#47404e" , Color: "white", fontWeight: "bold",
    fontFamily: "cursive" }}>
                {/* <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Name</label>
                    <input type="text" onChange={handleonchange} value={data} className="form-control" id="exampleFormControlInput1" placeholder="enter your name" />
                    <label for="exampleFormControlInput1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput2" placeholder="name@example.com" onChange={handleonchange2} value={data2} />
                    <label for="exampleFormControlTextarea1" className="form-label">Subject</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" onChange={handleonchange3} value={data3}></textarea>
                </div>
                <button className='btn btn-success' onClick={handleclick} style={{ width: 200, justifyContent: 'center', alignItems: 'center' }}>Send</button> */}
                {/* <p>{data.length>0?data : ""} <br/> {data2.length>0?data2 : ""} <br/> {data3.length>0?data3 : ""}</p> */}

                <div className='col p-4'>
                <div className="row">
                        <div className="col-sm-4">
                            <p style={{color : "white"}}>Name:</p>
                        </div>
                        <div className="col-sm-6" style={{color : "white"}}>Karishma Choudhary</div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4">
                            <p style={{color : "white"}}>Email Address:</p>
                        </div>
                        <div className="col-sm-6" style={{color : "white"}}>karishmachaudhary182@gmail.com</div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4">
                            <p style={{color : "white"}}>Phone:</p>
                        </div>
                        <div className="col-sm-6" style={{color : "white"}}>7982280149</div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4">
                            <p style={{color : "white"}}>Current Salary:</p>
                        </div>
                        <div className="col-sm-6" style={{color : "white"}}>4 lpa</div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4">
                            <p style={{color : "white"}}>Expectation Salary:</p>
                        </div>
                        <div className="col-sm-6" style={{color : "white"}}>8-10 lpa</div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4">
                            <p style={{color : "white"}}>My GitHub URL:</p>
                        </div>
                        <div className="col-sm-6" style={{color : "white"}}>https://github.com/chaudhary123k</div>
                    </div>

                    
                </div>
            </div>

        </div>
    </>
    )
}
