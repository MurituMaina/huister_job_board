import React, { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import "./AvailableJobs.css";
// import 'bootstrap/dist/css/bootstrap.min.css';

function ViewJobs() {
  const [jobs, setJobs] = useState([]);

  let apiUrl = "/jobs";
  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((jsonfile) => {
        setJobs(jsonfile);
      });
  }, [apiUrl]);

  // function deleteRecord(id) {
  //   fetch(`/jobs/${id}`, {
  //     method: `DELETE`,
  //   }).then((result) => {
  //     result.json().then((resp) => {
  //       // console.warn(resp)
  //       // console.log(resp);
  //       // (jsonfile) => {
  //       setJobs(resp);
  //     });
  //   });
  // }
  function updateRecord(id) {
    fetch(`/jobs/${id}`, {
      method: `PATCH`,
    }).then((result) => {
      result.json().then((resp) => {
        // console.warn(resp)
        console.log(resp);
      });
    });
  }

  return (
    <>
    {/* <Navbar /> */}
      {/* <p id="caption">
        <b>Posted Jobs</b>
      </p> */}
      <div className="table-data">
        {/* <p id="caption">
          <b>Posted Jobs</b>
        </p> */}
        {jobs.map((jobs, i) => {
          return (
            <table className="data-table">
              <thead >
                <tr className="table-head">
                  <th scope="col">Job Title</th>
                  <td>{jobs.title}</td>
                </tr>
                <tr scope="col" className="hiring-company">
                  <th >Hiring Company</th>
                  <td>{jobs.company}</td>
                </tr>
                <tr>
                  <th scope="col">Job Description</th>
                  <td>{jobs.description}</td>
                </tr>
              </thead>
              <tbody>
                <tr key={i} value={jobs}>
                  <td>
                    
                  </td>
                {/* </tr>

                <tr key={i} value={jobs}> */}
                  <td>
                    <button
                      class="action"
                      title="Apply"
                      data-toggle="tooltip"
                      onClick={() => updateRecord(jobs.id)}
                    >
                      Apply
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          );
        })}
      </div>
    </>
  );
}

export default ViewJobs;
