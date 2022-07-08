import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';


export default function Skills() {
    return (
        <div className='mx-4 my-4' id='skills' style={{ backgroundColor: "#3f4953" }}>

            <div className='container text-center mb-4 title h4' style={{ color: "white" }}>Professional Skills</div>
            <div className="row gx-5">
                <div className="col-6" style={{marginBottom : 30}}>
                    <div className="container">
                        <span className='progess-badge' style={{ color: "white" }}>Html</span>
                        <div>
                            <ProgressBar now={70} label="70%" variant='danger' />
                        </div>
                    </div>
                    <div className="container">
                        <span className='progess-badge' style={{ color: "white" }}>CSS</span>
                        <div>
                            <ProgressBar now={60} label="60%" variant='danger' />
                        </div>
                    </div>
                    <div className="container">
                        <span className='progess-badge' style={{ color: "white" }}>Javascript</span>
                        <div>
                            <ProgressBar now={50} label="50%" variant='danger'/>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="container">
                        <span className='progess-badge' style={{ color: "white" }}>SAP UI5</span>
                        <div>
                            <ProgressBar now={70} label="70%" variant='danger'/>
                        </div>
                    </div>
                    <div className="container">
                        <span className='progess-badge' style={{ color: "white" }}>Bootstrap</span>
                        <div>
                            <ProgressBar now={50} label="50%" variant='danger'/>
                        </div>
                    </div>
                    <div className="container">
                        <span className='progess-badge' style={{ color: "white" }}>React</span>
                        <div>  
                            <ProgressBar now={60} label="60%" variant='danger'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
