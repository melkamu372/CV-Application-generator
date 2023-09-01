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
      </div>     {/* end of column  */}
      <div className='col-md-6'>
      <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      </div>
      </div>
    </>
  )
}

export default App
