import React from 'react';


export default function Skills() {
    const now=60;
    return (
        <div className='mx-4 my-4' id='skills' style={{backgroundColor : "#3f4953"}}> 
            
            <div className='container text-center mb-4 title h4' style={{color : "white"}}>Professional Skills</div>
            <div className="row gx-5">
                <div className="col-6">
                <div className="container">
                    <span className='progess-badge' style={{color : "white"}}>Html</span>
                    <div className="progress mx-2 my-2">
                        <div className="progress-bar w-100" aria-label={`${now}%`} role="progressbar" style={{ width: 100 , backgroundColor: "gray" }} aria-valuemin="0"  aria-valuemax="100">
                        </div>
                    </div>
                </div>
                <div className="container">
                    <span className='progess-badge' style={{color : "white"}}>CSS</span>
                    <div className="progress mx-2 my-2">
                        <div className="progress-bar w-50" role="progressbar" style={{ width: 25 , color: "greenyellow" ,  backgroundColor: "gray"}} aria-valuenow="60" aria-valuemin="0"       aria-valuemax="100">
                        </div>
                    </div>
                </div>
             
                
                <div className="container">
                    <span className='progess-badge' style={{color : "white"}}>Javascript</span>
                    <div className="progress mx-2 my-2"> 
                        <div className="progress-bar w-50" role="progressbar" style={{ width: 25 ,  backgroundColor: "gray"}} aria-valuenow="25" aria-valuemin="0"              aria-valuemax="100">
                        </div>
                    </div>
                </div>
                </div>
                <div className="col-6">
                <div className="container">
                    <span className='progess-badge' style={{color : "white"}}>SAP UI5</span>
                    <div className="progress mx-2 my-2">
                        <div className="progress-bar w-50" role="progressbar" style={{ width: 50 ,  backgroundColor: "gray" }} aria-valuenow="50" aria-valuemin="0"              aria-valuemax="100">
                        </div>
                    </div>
                </div>
                <div className="container">
                    <span className='progess-badge' style={{color : "white"}}>Bootstrap</span>
                    <div className="progress mx-2 my-2">
                        <div className="progress-bar w-50" role="progressbar" style={{ width: 50 , backgroundColor: "gray" }} aria-valuenow="25" aria-valuemin="0"              aria-valuemax="100">
                        </div>
                    </div>
                </div>
                <div className="container">
                    <span className='progess-badge' style={{color : "white"}}>React</span>
                    <div className="progress mx-2 my-2 mb-4">
                        <div className="progress-bar w-50" role="progressbar" style={{ width: 50 ,  backgroundColor: "gray" }} aria-valuenow="25" aria-valuemin="0"              aria-valuemax="100">
                        </div>
                    </div>
                </div>
                </div>
            </div>    
        </div>
    )
}
