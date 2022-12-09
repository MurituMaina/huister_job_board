import React from 'react';
import "./jobs.css";
import { useState} from "react";

function Job({recruiter}) {
  
  const [jobDetails, setJobDetails] = useState({
    title: "",
    company: "",
    description: "",
    recruiter_id: ""
    })
   
  //  const [welcomeMessage, setWelcomeMessage] = useState(false)
 function addData(event){
  event.preventDefault();
  const fieldNames = event.target.getAttribute('name');
  const fieldValues = event.target.value;
// jobDetails.recruiter_id = recruiter.id

  const newEntries = {...jobDetails};
  newEntries[fieldNames] = fieldValues;

  setJobDetails(newEntries);
  console.log(recruiter.id);
  console.log(`${newEntries}`)
};

function handleSubmit(e){
    e.preventDefault();
    console.log(jobDetails);
    // setWelcomeMessage(true)
    let apiUrl = "/jobs"
    fetch(apiUrl,{
      method: "POST",
      headers:  {'Content-Type': 'application/json'},
      body: JSON.stringify(jobDetails)
    })
    // alert(`${jobDetails.title} role posted successfully`)
  }

  function handleClearing(e){
    e.preventDefault();
    // setWelcomeMessage(false)
    setJobDetails({
      title: "",
      company: "",
      description: ""
    })
  }

  return (
    <div className="form-body">
      <div className='row'>
        <div className='form-holder'>
          <div className='form-content'>
            <div className='form-items'>
            
              <h3><b>Add Job Details</b></h3>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name='title'
                  required="required"
                  value={jobDetails.title}
                  placeholder="Job Title"
                  onChange={addData}
                /><br></br><br></br>
                <input
                  type="text"
                  name='company'
                  value={jobDetails.company}
                  placeholder="Hiring company"
                  required="required"
                  onChange={addData}
                /><br></br><br></br>
                
                <input
                  type="text"
                  name='description'
                  value={jobDetails.description}
                  placeholder="Job Details"
                  required="required"
                  onChange={addData}
                /><br></br><br></br>

                <button className='btn btn-success' type="submit" onClick={handleSubmit}>Post Job </button> 
                <button className='btn btn-danger' onClick={handleClearing}> Clear Fields</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Job;
