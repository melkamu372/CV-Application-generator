import { useState } from "react";
import "../styles/app.css";
import  PeronalDetails from '../component/PersonalDetails'
import  Education from '../component/Education'
import  Experience from '../component/Experience'
import DisplayPersonalDetail from '../component/DisplayPeronalDetail'

function App() { 
  return (
    <>
    <div className="container"> 
    <div className="row">
      <div className="col-md-6">
     <PeronalDetails person={person} setPerson={setPersonalInfo} />
      <Education/>
      <Experience/>
      </div>
      <div className="col-md-6">
       <DisplayPersonalDetail/>
      </div>
    </div>
    </div>
</>
  
  );
}

export default App;
