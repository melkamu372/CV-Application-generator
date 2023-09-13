function DisplayExperience({experience}) {
    return (
      <>
        <div>
          {experience.length > 0 ? (
            <div>
              <h4>Experience</h4>
              <hr className="fw-bold"></hr>
              {experience.map((exe, index) => (
                <div key={index} className="row">
                  <div className="col-md-3">
                    <p className="fw-bolder">
                    {exe.position} 
                    </p>
                  </div>
                  <div className="col-md-9">
                    <i className="fs-6">{exe.company} </i>  {exe.location} from {exe.start} to {exe.end} Main Responsibility {exe.responsibility}
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
  export default DisplayExperience;
  