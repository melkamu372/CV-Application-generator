import React from 'react';
function Education() {
    return (
      <>
        <div className="container">
          <>
            <p>
              <a
                className="btn btn-primary"
                data-bs-toggle="collapse"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                Link with data-bs-toggle
              </a>
            </p>
            <div className="collapse" id="collapseExample">
              <div className="card card-body">
                Some placeholder content for the collapse component. This panel is hidden
                by default but revealed when the user activates the relevant trigger.
              </div>
            </div>
          </>
        </div>
      </>
    );
  }
  
  export default Education;
  