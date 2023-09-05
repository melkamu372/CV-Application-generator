import { useState } from "react";
import uniqid from "uniqid";
import Button from "./Button";

let generalData = [];

function PersonalDetails() {
  const [person, setPersonalInfo] = useState({
    fullname: "",
    tel: "",
    email: "",
    address: ""
  });

  const handleButtonClick = (event) => {
    const { value, dataset } = event.target;
    const { key } = dataset;
    setPersonalInfo((prevPerson) => ({
      ...prevPerson,
      [key]: value,
    }));
  };

  const clear_form = (event) => {
    event.preventDefault();
    setPersonalInfo({
      fullname: "",
      tel: "",
      email: "",
      address: ""
    });
  };

  const submit_form = (event) => {
    event.preventDefault();
    const updatedData = [...generalData, person];
    generalData = updatedData;
    console.log(updatedData);
  };

  const input_data = [
    {
      id: uniqid(),
      value: person.fullname,
      type: "text",
      placeholder: "Enter your name",
      label: "Full Name",
      onChange: handleButtonClick,
      data_key: "fullname",
    },
    {
      id: uniqid(),
      value: person.tel,
      type: "tel",
      placeholder: "Enter your phone",
      label: "Phone Number",
      onChange: handleButtonClick,
      data_key: "tel",
    },
    {
      id: uniqid(),
      value: person.email,
      type: "email",
      placeholder: "Enter your email",
      label: "Email Address",
      onChange: handleButtonClick,
      data_key: "email",
    },
    {
      id: uniqid(),
      value: person.address,
      type: "textarea",
      placeholder: "Your Address",
      label: "City and Province",
      onChange: handleButtonClick,
      data_key: "address",
    },
  ];

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">General Information</div>
              <div className="card-body">
                <form name="general-form" onSubmit={submit_form}>
                  {input_data.map((data) => {
                    return (
                      <div className="mb-3" key={data.id}>
                        <label className="general-form-label">{data.label}</label>
                        <input
                          className="form-control"
                          value={data.value}
                          onChange={data.onChange}
                          type={data.type}
                          placeholder={data.placeholder}
                          data-key={data.data_key}
                        />
                      </div>
                    );
                  })}

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
              <div className="card-header">Featured</div>
              <div className="card-body"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PersonalDetails;