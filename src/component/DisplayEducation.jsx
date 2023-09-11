function DisplayEducation({education}) {
  return (
    <>
      <div>
        {education.length > 0 ? (
          <div>
            <h4>Education</h4>
            <hr className="fw-bold"></hr>
            {education.map((edu, index) => (
              <div key={index} className="row">
                <div className="col-md-3">
                  <p className="fw-bolder">
                  {edu.level} of {edu.department}
                  </p>
                </div>
                <div className="col-md-9">
                  {edu.school} {edu.location} from {edu.start} to {edu.end}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p></p>
        )}
      </div>
    </>
  );
}
export default DisplayEducation;
