import React from 'react';


export default function Skills() {
    return (
        <div className='mx-4 my-4'> 
            
            <div className='container text-center mb-4 title h4'>Professional Skills</div>
            <div className="row gx-5">
                <div className="col-6">
                <div className="container">
                    <span className='progess-badge'>Html</span>
                    <div className="progress">
                        <div className="progress-bar w-100" role="progressbar" style={{ width: 100 , backgroundColor: "gray" }} aria-valuenow="100" aria-valuemin="0"             aria-valuemax="100">
                        </div>
                    </div>
                </div>
                <div className="container">
                    <span className='progess-badge'>CSS</span>
                    <div className="progress">
                        <div className="progress-bar w-50" role="progressbar" style={{ width: 25 , color: "greenyellow" ,  backgroundColor: "gray"}} aria-valuenow="60" aria-valuemin="0"       aria-valuemax="100">
                        </div>
                    </div>
                </div>
             
                
                <div className="container">
                    <span className='progess-badge'>Javascript</span>
                    <div className="progress"> 
                        <div className="progress-bar w-50" role="progressbar" style={{ width: 25 ,  backgroundColor: "gray"}} aria-valuenow="25" aria-valuemin="0"              aria-valuemax="100">
                        </div>
                    </div>
                </div>
                </div>
                <div className="col-6">
                <div className="container">
                    <span className='progess-badge'>SAP UI5</span>
                    <div className="progress">
                        <div className="progress-bar w-50" role="progressbar" style={{ width: 50 ,  backgroundColor: "gray" }} aria-valuenow="50" aria-valuemin="0"              aria-valuemax="100">
                        </div>
                    </div>
                </div>
                <div className="container">
                    <span className='progess-badge'>Bootstrap</span>
                    <div className="progress">
                        <div className="progress-bar w-50" role="progressbar" style={{ width: 50 , backgroundColor: "gray" }} aria-valuenow="25" aria-valuemin="0"              aria-valuemax="100">
                        </div>
                    </div>
                </div>
                <div className="container">
                    <span className='progess-badge'>React</span>
                    <div className="progress">
                        <div className="progress-bar w-50" role="progressbar" style={{ width: 50 ,  backgroundColor: "gray" }} aria-valuenow="25" aria-valuemin="0"              aria-valuemax="100">
                        </div>
                    </div>
                </div>
                </div>
            </div>    
        </div>
    )
}
