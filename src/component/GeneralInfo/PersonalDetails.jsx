import { useState, useEffect} from "react";
import Button from "../Button";
import defaultPerson from '../../data/defaultPerson.json'
import emptyPerson from '../../data/emptyPerson.json'
function PersonalDetails({updatePerson}) {
  const [person, setPersonalInfo] = useState(defaultPerson);
   useEffect(() => {
    updatePerson(person);
    }, [person, updatePerson]);

    const LoadDefault=(event)=>{
      event.preventDefault();
      setPersonalInfo(defaultPerson);
    }

   const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPersonalInfo((prevPerson) => ({
      ...prevPerson,
      [name]: value
    }));
  };
  const clear_form = (event) => {
    event.preventDefault();
    setPersonalInfo(emptyPerson);
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">General Information</div>
              <div className="card-body">
                <form name="general-form">
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
                    <label className="general-form-label">
                      City and Province
                    </label>
                    <input type="text"
                      className="form-control"
                      name="address"
                      value={person.address}
                      onChange={handleInputChange}
                      placeholder="Your Address"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="general-form-label">
                      About
                    </label>
                    <textarea
                      className="form-control"
                      name="about"
                      value={person.about}
                      onChange={handleInputChange}
                      placeholder="Write about Your Self"
                    />
                  </div>

                  <Button
                    clickMe={LoadDefault}
                    btnClass="bi bi-trash btn btn-success btn-lg p-2 m-1"
                    text="Load default"
                  />
                  <Button
                    clickMe={clear_form}
                    btnClass="bi bi-trash btn btn-danger btn-lg p-2 m-1"
                    text="Clear"
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