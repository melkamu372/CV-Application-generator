function DisplayPersonalDetail({person}){
return (<>
<div className="col-md-12">
      <div className="card">
              <div className="card-body">
              <h1>{person.fullname}</h1>
              <p className="fs-3 text-decoration-underline">{person.title}</p>
              <p className="p-2" >
              <i className="p-2 bi bi-telephone"> {person.tel}  </i>
              <i className="p-2 bi bi-envelope">  {person.email}  </i>
              <i className="p-2 bi bi-geo-alt">  {person.address}  </i>
               </p>
               <p className="p-2">   {person.about}  </p>
              </div>
            </div>
      </div>

      </>)
}
export default DisplayPersonalDetail;