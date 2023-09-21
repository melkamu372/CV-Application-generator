import React, { useState } from "react";
import PersonalDetails from "./GeneralInfo/PersonalDetails";
import DisplayPersonalDetail from "./GeneralInfo/DisplayPeronalDetail";
import Education from "../component/Education/Education";
import DisplayEducation from "../component/Education/DisplayEducation";
import Experience from "../component/Experience/Experience";
import DisplayExperience from "./Experience/DisplayExperience"
import defaultPerson from '../data/defaultPerson.json'
import defauleducation from '../data/defauleducation.json'
import defaulExperience from '../data/defaulExperience.json'
import emptyPerson from '../data/emptyPerson.json'
import Button from "./Button";

function App() {
  const [person, setPersonalInfo] = useState(emptyPerson);
  const updatePerson = (updatedPerson) => {
    setPersonalInfo(updatedPerson);
  };
  const [educationData, setEducationData] = useState([defauleducation]);
  const updateEducation = (data) => {
    setEducationData(data);
  };
  const [experience, setExperience] = useState([defaulExperience]);
  const updateExperience = (data) => {
    setExperience(data);
  }

  function Print_cv(){
    const divContents = document.getElementById('printResume').innerHTML;
    const originalContents = document.body.innerHTML;
    document.body.innerHTML = divContents;
    window.print();
    document.body.innerHTML = originalContents
  }
  const LoadDefault=()=>{
    setPersonalInfo({ ...defaultPerson });
    setEducationData([defauleducation]);
    setExperience([defaulExperience]);
  }
 const cleanDefault=()=>{
    setEducationData([]);
    setExperience([]);
    setPersonalInfo({ ...emptyPerson });
  }
  return (
    <>
      <div className="container">
      <div className="row">
        <div className="col-6"> 
        </div>
        <div className="col-6"> 
        <Button clickMe={Print_cv} btnClass="bi bi-printer btn btn-dark fs-6 p-2"
              text=" Print "/>
        </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    <span className="badge text-bg-dark fs-5"> Personal Information</span>
                    
                  </button>
                </h2>
                <div id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                  <PersonalDetails
                      person={person}
                      updatePerson={updatePerson}
                      LoadDefault={LoadDefault}/>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-6"> 
             <Button clickMe={LoadDefault} btnClass="bi bi-arrow-down-circle-fill btn btn-success btn-sm p-2 m-1 fs-6"
              text="Load Default"/>
              <Button clickMe={cleanDefault} btnClass="bi bi-trash btn btn-danger btn-sm p-2 m-1 fs-6"
              text=" Clear "/>
        </div>
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    
                    <span className="badge text-bg-dark fs-5">Educational Experience</span>
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <Education
                      formData={educationData}
                      updateEducation={updateEducation}
                    />
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree">
                    <span className="badge text-bg-dark fs-5">  Practical Experience </span>
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <Experience updateExperience={updateExperience} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6" id="printResume">
            <div className="card">
              <DisplayPersonalDetail person={person} />
              <DisplayEducation education={educationData} />
              <DisplayExperience experience={experience} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
