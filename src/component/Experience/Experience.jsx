import { React, useState, useEffect } from "react";
import Button from "../Button";
function Experience({ updateExperience }) {
  const [formData, setFormData] = useState({
    company: "Leapfrog Technology",
    position: " Full Stack Developer  ",
    responsibility: "Design,Builld,implement and Test Ezi bus Application ",
    start: '2014-10-16',
    end: '2019-07-14',
    location: "Addis Ababa, Ethiopia",
  });

  const [experience, setExperienceInfo] = useState([]);
 
  useEffect(() => {
    updateExperience(experience);
  }, [experience]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const clear_form = (event) => {
    event.preventDefault();
    setFormData({
      company: "",
      position: "",
      responsibility: " ",
      start: '',
      end: '',
      location: "",
    });
  };
  
  const AddExperience = () => {
    setExperienceInfo((prevData) => [...prevData, formData]);
    setFormData({
      company: "",
      position: "",
      responsibility: " ",
      start: '',
      end: '',
      location: "",
    });
  };

  const deleteExperience = (index) => {
    setExperienceInfo((prevData) => {
      const updatedData = [...prevData];
      updatedData.splice(index, 1);
      return updatedData;
    });
  };

  return (
    <>
      <div className="container">
        <div className="mb-3">
          <label className="form-label general-form-label">Company Name</label>
          <input
            type="text"
            name="company"
            className="form-control"
            onChange={handleInputChange}
            value={formData.company}
          />
        </div>

        <div className="mb-3">
          <label className="form-label general-form-label">Position Title</label>
          <input
            type="text"
            name="position"
            className="form-control"
            onChange={handleInputChange}
            value={formData.position}
          />


        <div className="row">
          <div className="col">
            <label className="form-label general-form-label">Start Date</label>
            <input
              type="date"
              className="form-control"
              name="start"
              onChange={handleInputChange}
              value={formData.start}
            />
          </div>
          <div className="col">
            <label className="form-label general-form-label">End Date</label>
            <input
              type="date"
              className="form-control"
              name="end"
              onChange={handleInputChange}
              value={formData.end}
            />
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label general-form-label">Location</label>
          <input
            type="text"
            name="location"
            className="form-control"
            onChange={handleInputChange}
            value={formData.location}
          />
        </div>
        </div>
        <div className="mb-3">
          <label className="form-label general-form-label">Description/ Responsiblity</label>
           <textarea
                      className="form-control"
                      name="responsibility"
                      value={formData.responsibility}
                      onChange={handleInputChange}
                      placeholder="Write Your Responsiblities in this position "
                    />
        </div>

        <div className="row">
          <div className="col-md-4 offset-md-8 mr-auto">
            <Button
              clickMe={AddExperience}
              btnClass="bi bi-check-square btn btn-success btn-sm  m-1"
              text="Add"
            />

            <Button
              clickMe={clear_form}
              btnClass="btn btn-danger bi bi-trash m-1"
              text="Clear"
            />
          </div>
        </div>
        {experience.length > 0 ? (
          <table className="table table-primary table-bordered">
            <thead>
              <tr className="table-dark">
                <th>Company</th>
                <th>Position</th>
                <th> Responsibility</th>
                <th> Action</th>
              </tr>
            </thead>
            <tbody className="table-striped table-info ">
              {experience.map((edu, index) => (
                <tr key={index}>
                  <td>{edu.company}</td>
                  <td>{edu.position}</td>
                  <td>{edu.responsibility}</td>
                  <td>
                    <Button
                      clickMe={() => deleteExperience(index)}
                      btnClass="btn btn-danger btn-sm m-1"
                      text="Delete"
                    />{" "}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No users registered yet.</p>
        )}
      </div>
    </>
  );
}

export default Experience;
