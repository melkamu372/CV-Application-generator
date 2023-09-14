import React, { useState } from "react";
import PersonalDetails from "./GeneralInfo/PersonalDetails";
import DisplayPersonalDetail from "./GeneralInfo/DisplayPeronalDetail";
import Education from "../component/Education/Education";
import DisplayEducation from "../component/Education/DisplayEducation";
import Experience from "../component/Experience/Experience";
import DisplayExperience from "./Experience/DisplayExperience"
import Button from "./Button";
function App() {
  const [person, setPerson] = useState({
    fullname: "",
    title: "",
    tel: "",
    email: "",
    address: "",
    about: "",
  });
  const defauleducation = {
    school: "Bahir Dar Institute of Technology",
    level: " BSC ",
    department: "Software Engineering",
    start: "2014-10-16",
    end: "2019-07-14",
    location: "Bahir Dar, Ethiopia",
  };
  const defaulExperience= {
    company: "Leapfrog Technology",
    position: " Full Stack Developer  ",
    responsibility: "Design,Builld,implement and Test Ezi bus Application ",
    start: '2014-10-16',
    end: '2019-07-14',
    location: "Addis Ababa, Ethiopia",
  };
  const updatePerson = (updatedPerson) => {
    setPerson(updatedPerson);
  };
  const [educationData, setEducationData] = useState([]);
  const updateEducation = (data) => {
    setEducationData(data);
  };
  const [experience, setExperience] = useState([]);
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

  function LoadDefault(){
    setEducationData([defauleducation]);
    setExperience([defaulExperience]);
  }
  function cleanDefault(){
    setEducationData([]);
    setExperience([]);
  }
  return (
    <>
      <div className="container">
      <div className="row">
        <div className="col-6"> 
        <Button clickMe={LoadDefault} btnClass="bi bi-box-arrow-down btn btn-success btn-sm p-2 m-1 fs-6"
              text="Load Default"/>
              <Button clickMe={cleanDefault} btnClass="bi bi-trash btn btn-primary btn-sm p-2 m-1 fs-6"
              text=" Clear "/>
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
                    <span className="badge text-bg-info fs-5"> Personal Information</span>
                    
                  </button>
                </h2>
                <div id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                  <PersonalDetails
                      person={person}
                      updatePerson={updatePerson}/>
                  </div>
                </div>
              </div>
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
                    
                    <span className="badge text-bg-success fs-5">Educational Experience</span>
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
