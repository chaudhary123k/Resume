import React from 'react';
import './Experience.css';

export default function Experience() {
  return (
    <div className='mx-4 my-4'>
      <div className="section bg-light border">
        <div className='container title text-center h2 mb-2'>1+</div>
        <div className='container title text-center h4 mb-4'>Work Experience</div>
        <div className="container px-4">
          <div className="row gx-5 my-4 mx-4">
            <div className="col-4 front" style={{ backgroundColor: "gray" }}>
              <div className="p-3">April 2021 - Present</div>
              {/* <div className="p-3">Capgemini</div> */}
              <p>SAP UI5</p>
            </div>
            <div className="col-8 front">
              <div className="p-3 h4">Front End Developer</div>
              <p>● Custom SAP UI5 Apps Development ( using Webid) .<br/>
                ● Custom SAP UI5 Apps Development ( using BTP) .<br/>
                ● Having Good knowledge & Experience in SAPUI5 Concepts like  Models – JSON & Odata , XML & JS View, Fragments , Formatters & Inline Expression   .<br/>
                ● Good knowledge on various Data binding Techniques like – Property Binding, Element Binding , Expression Binding & Aggregation Binding in SAP UI5.<br/>
                ● Having knowledge on ajax call from external source .<br/>
                ● Standard Fiori App’s activation.<br/>
                ● Custom Tile App’s activation.<br/>
              </p>
            </div>
          </div>
        </div>
        <div className="container px-4">
          <div className="row gx-5 my-4 mx-4">
            <div className="col-4 front" style={{ backgroundColor: "gray" }}>
              <p className='p-3'>Shadow Project</p>
            </div>
            <div className="col-8 front">
              <div className="p-3 h4">JCB BONNEVILE DELIVERY</div>
              <p>This project has developed during my shadow period .In this project I have learn standard Fiori app’s activation and Custom tile app’s activation .  I have worked as a SAP UI5 developer.
              </p>
            </div>
          </div>
        </div>
        <div className="container px-4">
          <div className="row gx-5 my-4 mx-4">
            <div className="col-4 front" style={{ backgroundColor: "gray" }}>
              <p className='p-3' >Mini Project's</p>
            </div>
            <div className="col-8 front">
              <div className="p-3 h4">Master Detail Page(SAP UI5)</div>
              <p>This project has developed during my training period . In this project I have used V2 OData Northwind Service as a data source . In that I have used Element binding , Expression binding  , Property binding . I have applied Export function in detail page.
              </p>
              <div className="p-3 h4">Covid 19 Data(SAP UI5)</div>
              <p>This project has developed during my training period . In this project covid data is coming from an external source through ajax call. In this all the countries covid data has shown.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
