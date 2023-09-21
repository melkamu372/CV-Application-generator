import { React, useState, useEffect } from "react";
import Button from "../Button";
import emptyEducation from '../../data/emptyEducation.json'
import defaulEducation from '../../data/defauleducation.json'
function Education({ updateEducation }) {
  const [formData, setFormData] = useState(emptyEducation);

  const [education, setEducationalInfo] = useState([defaulEducation]);
 
  useEffect(() => {
    updateEducation(education);
  }, [education]);

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
      school: "",
      level: "",
      department: "",
      start: '2014-10-16',
      end: '2019-07-14',
      location: "",
    });
  };
  
  const AddNewEducation = () => {
    setEducationalInfo((prevData) => [...prevData, formData]);
    setFormData({
      school: "",
      level: "",
      department: "",
      start: "",
      end: "",
      location: "",
    });
  };

  const deleteEducation = (index) => {
    setEducationalInfo((prevData) => {
      const updatedData = [...prevData];
      updatedData.splice(index, 1);
      return updatedData;
    });
  };

  return (
    <>
      <div className="container">
        <div className="mb-3">
          <label className="form-label">School Name</label>
          <input
            type="text"
            name="school"
            className="form-control"
            onChange={handleInputChange}
            value={formData.school}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Education Level</label>
          <input
            type="text"
            name="level"
            className="form-control"
            onChange={handleInputChange}
            value={formData.level}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Department</label>
          <input
            type="text"
            name="department"
            className="form-control"
            onChange={handleInputChange}
            value={formData.department}
          />
        </div>

        <div className="row">
          <div className="col">
            <label className="form-label">Start Date</label>
            <input
              type="date"
              className="form-control"
              name="start"
              onChange={handleInputChange}
              value={formData.start}
            />
          </div>
          <div className="col">
            <label className="form-label">End Date</label>
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
          <label className="form-label">Location</label>
          <input
            type="text"
            name="location"
            className="form-control"
            onChange={handleInputChange}
            value={formData.location}
          />
        </div>
        <div className="row">
          <div className="col-md-4 offset-md-8 mr-auto">
            <Button
              clickMe={AddNewEducation}
              btnClass="bi bi-check-square btn btn-primary btn-sm  m-1"
              text="Add"
            />

            <Button
              clickMe={clear_form}
              btnClass="bi bi-trash btn btn-danger btn-sm  m-1"
              text="Clear"
            />
          </div>
        </div>
        {education.length > 0 ? (
          <table className="table table-primary table-bordered">
            <thead>
              <tr className="table-dark">
                <th>School</th>
                <th>Level</th>
                <th>Departement</th>
                <th> Action</th>
              </tr>
            </thead>
            <tbody className="table-striped table-info ">
              {education.map((edu, index) => (
                <tr key={index}>
                  <td>{edu.school}</td>
                  <td>{edu.level}</td>
                  <td>{edu.department}</td>
                  <td>
                    <Button
                      clickMe={() => deleteEducation(index)}
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

export default Education;
