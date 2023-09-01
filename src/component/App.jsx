import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import '../styles/app.css'
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <>
    <div className='container'>
     <div className='row'>
      <div className='col-md-6'>
        <div className='card'>
      <input
  className="form-control"
  type="text"
  defaultValue="Readonly input here..."
  aria-label="readonly input example"
  readOnly=""
/>
      <div className="mb-3">
    <label htmlFor="exampleFormControlInput1" className="form-label">
      Email address
    </label>
    <input
      type="email"
      className="form-control"
      id="exampleFormControlInput1"
      placeholder="name@example.com"
    />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleFormControlTextarea1" className="form-label">
      Example textarea
    </label>
    <textarea
      className="form-control"
      id="exampleFormControlTextarea1"
      rows={3}
      defaultValue={""}
    />
  </div>
  </div>
  <div>
    <br></br>
  </div>
  <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button
        className="accordion-button"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseOne"
        aria-expanded="true"
        aria-controls="collapseOne"
      >
      Eduvation
      </button>
    </h2>
    <div
      id="collapseOne"
      className="accordion-collapse collapse show"
      aria-labelledby="headingOne"
      data-bs-parent="#accordionExample">
      <div className="accordion-body">
      
      </div>
    </div>
  </div>
</div>

  
      </div>     {/* end of column  */}
      <div className='col-md-6'>
     

      <div className="card">
  <div className="card-header">Featured</div>
  <div className="card-body">
    <h5 className="card-title">Special title treatment</h5>
    <p className="card-text">
      With supporting text below as a natural lead-in to additional content.
    </p>
    <a href="#" className="btn btn-primary">
      Go somewhere
    </a>
  </div>
</div>

      </div>
      </div>
      </div>
    </>
  )
}

export default App
