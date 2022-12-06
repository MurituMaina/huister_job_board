import React, { useEffect, useState } from 'react'
import './ViewJobs.css'
// import 'bootstrap/dist/css/bootstrap.min.css';

function ViewJobs() {
    const [jobs, setJobs] = useState([])
 


    let apiUrl = "http://localhost:"
    useEffect(() => {
      fetch(apiUrl)
      .then((res) => res.json())
      .then(jsonfile => {
        setJobs(jsonfile)

    }) 
    
    },[])
    jobs.map(patient => {
        console.log(jobs)
    })
     
    function deleteRecord(id){
        fetch(`http://localhost:9292/JOBS/${id}`,{
            method: `DELETE`
        }).then((result)=>{
            result.json().then((resp)=>{
                // console.warn(resp)
                console.log(resp)
            })
        })
    }
  
  return (
    <>
        <div>
        <p id='caption'><b>Posted Jobs</b></p>
        <table className='table table-stripped table-sm'>
             <thead class='thead-dark'>
                <tr className='table-head'>
                    <th scope='col'>Job Title</th></tr>
                <tr>
                <th scope='col'>Hiring Company</th> </tr>
                <tr>
                  <th scope='col'>Job Description</th>
                </tr>
            </thead>
                       
            {jobs.map((jobs, i) => {
                return (
                   <tbody>
                        <tr key={i} value={jobs}>
                            <td>{jobs.title}</td>
                            <td>{jobs.company}</td>
                            <td>{jobs.description}</td>
                            <td>
							
                            <a class="action" title="Delete" data-toggle="tooltip" onClick={()=>deleteRecord(jobs.id)}>Delete</a>
                        </td>
                        </tr>
                   </tbody>
                );
                })
            }
        </table>
    </div>

    </>
  )
}

export default ViewJobs