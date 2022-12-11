import React, { useEffect, useState } from "react";
import "./ViewJobs.css";
// import 'bootstrap/dist/css/bootstrap.min.css';

function ViewJobs({recruiter}) {
  const [jobs, setJobs] = useState([]);
  const [deleteJob, setDeleteJob] = useState(false);

  let apiUrl = "https://hustlerjobboard-production.up.railway.app/jobs";
  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((jsonfile) => {
        setJobs(jsonfile);
      });
  }, [apiUrl,deleteJob]);
console.log(recruiter);
  function deleteRecord(id) {
    fetch(`https://hustlerjobboard-production.up.railway.app/jobs/${id}`, {
      method: `DELETE`,
    }).then((result) => {
      result.json().then((resp) => {
        // console.warn(resp)
        // console.log(resp);
        // (jsonfile) => {
        setJobs(resp);
        setDeleteJob(true);
      });
    });
  }
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
      <div className="table-data">
        <p id="caption">
          <b>Posted Jobs</b>
        </p>
        <br></br>
        {jobs.map((jobs, i) => {
          return (
            <table className="data-table">
              <thead class="thead-dark">
                <tr className="table-head">
                  <th scope="col">Job Title</th>
                  <td>{jobs.title}</td>
                </tr>
                <tr className="hiring-company">
                  <th scope="col">Hiring Company</th>
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
                    <button
                      class="action"
                      title="Delete"
                      data-toggle="tooltip"
                      onClick={() => deleteRecord(jobs.id)}
                    >
                      Delete
                    </button>
                  </td>
                {/* </tr>

                <tr key={i} value={jobs}> */}
                  <td>
                    <button
                      class="action"
                      title="Update"
                      data-toggle="tooltip"
                      onClick={() => updateRecord(jobs.id)}
                    >
                      Update
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
