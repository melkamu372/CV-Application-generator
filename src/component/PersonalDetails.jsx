import { useState } from "react";
import Button from "./Button";

function PersonalDetails() {
  const [person, setPersonalInfo] = useState({
    fullname: "",
    title:'',
    tel: "",
    email: "",
    address: ""
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPersonalInfo((prevPerson) => ({
      ...prevPerson,
      [name]: value,
    }));
  };

  const clear_form = (event) => {
    event.preventDefault();
    setPersonalInfo({
      fullname: "",
      title:'',
      tel: "",

      email: "",
      address: ""
    });
  };

  const submit_form = (event) => {
    event.preventDefault();
    console.log(person);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">General Information</div>
              <div className="card-body">
                <form name="general-form" onSubmit={submit_form}>
                  <div className="mb-3">
                    <label className="general-form-label">Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="fullname"
                      value={person.fullname}
                      onChange={handleInputChange}
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="general-form-label">Job Title</label>
                    <input
                      type="text"
                      className="form-control"
                      name="title"
                      value={person.title}
                      onChange={handleInputChange}
                      placeholder="Enter Your Job"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="general-form-label">Phone Number</label>
                    <input
                      type="tel"
                      className="form-control"
                      name="tel"
                      value={person.tel}
                      onChange={handleInputChange}
                      placeholder="Enter your phone"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="general-form-label">Email Address</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={person.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="general-form-label">City and Province</label>
                    <textarea
                      className="form-control"
                      name="address"
                      value={person.address}
                      onChange={handleInputChange}
                      placeholder="Your Address"
                    />
                  </div>

                  <Button
                    type="submit"
                    clickMe={submit_form}
                    btnClass="btn btn-success btn-lg p-2 m-1"
                    text=" Save "
                  />

                  <Button
                    clickMe={clear_form}
                    btnClass="btn btn-danger btn-lg p-2 m-1"
                    text=" Clear "
                  />
                </form>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
              <h1>{person.fullname}</h1>
              <span className="p-2 text-dark bg-success rounded-3">{person.title}</span>
                    
                <p className="bi bi-telephone"> {person.tel}</p>
                <i class="phone"></i>
                <p>Email Address: {person.email}</p>
                <p>City and Province: {person.address}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PersonalDetails;