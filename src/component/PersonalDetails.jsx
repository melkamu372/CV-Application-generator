import { useState } from "react";
import Button from "./Button";
function PersonalDetails() {
  const [person, setPersonalInfo] = useState({
    fullname: "Melkamu Tessema",
    title:'Software Engineering',
    tel: "+251945272182",
    email: "melkamu372@gmial.com",
    address: "Addis Ababa, Ethiopia"
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
    setPersonalInfo({
    fullname: "Melkamu Tessema",
    title:'Software Engineering',
    tel: "+251945272182",
    email: "melkamu372@gmial.com",
    address: "Addis Ababa, Ethiopia"
    });
   
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
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
                    text=" Default "
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
        </div>
      </div>
    </>
  );
}

export default PersonalDetails;