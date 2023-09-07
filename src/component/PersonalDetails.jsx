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
              <p className="fs-3 text-decoration-underline">{person.title}</p>
              <p className="p-2" >
              <i className="p-2 bi bi-telephone"> {person.tel}  </i>
              <i className="p-2 bi bi-envelope">  {person.email}  </i>
               </p>
               <p className="p-2 bi bi-geo-alt">   {person.address}  </p>
         
    
              </div>

              <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button
        className="accordion-button"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseOne"
        aria-expanded="true"
        aria-controls="collapseOne"
      >
        Accordion Item #1
      </button>
    </h2>
    <div
      id="collapseOne"
      className="accordion-collapse collapse show"
      data-bs-parent="#accordionExample"
    >
      <div className="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by
        default, until the collapse plugin adds the appropriate classes that we
        use to style each element. These classes control the overall appearance,
        as well as the showing and hiding via CSS transitions. You can modify
        any of this with custom CSS or overriding our default variables. It's
        also worth noting that just about any HTML can go within the{" "}
        <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
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
        Accordion Item #2
      </button>
    </h2>
    <div
      id="collapseTwo"
      className="accordion-collapse collapse"
      data-bs-parent="#accordionExample"
    >
      <div className="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden
        by default, until the collapse plugin adds the appropriate classes that
        we use to style each element. These classes control the overall
        appearance, as well as the showing and hiding via CSS transitions. You
        can modify any of this with custom CSS or overriding our default
        variables. It's also worth noting that just about any HTML can go within
        the <code>.accordion-body</code>, though the transition does limit
        overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button
        className="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseThree"
        aria-expanded="false"
        aria-controls="collapseThree"
      >
        Accordion Item #3
      </button>
    </h2>
    <div
      id="collapseThree"
      className="accordion-collapse collapse"
      data-bs-parent="#accordionExample"
    >
      <div className="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden
        by default, until the collapse plugin adds the appropriate classes that
        we use to style each element. These classes control the overall
        appearance, as well as the showing and hiding via CSS transitions. You
        can modify any of this with custom CSS or overriding our default
        variables. It's also worth noting that just about any HTML can go within
        the <code>.accordion-body</code>, though the transition does limit
        overflow.
      </div>
    </div>
  </div>
</div>



            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PersonalDetails;