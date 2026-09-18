import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainLayouts from "./layouts/MainLayouts";
import JobsPage from "./pages/JobsPage";
import NotFoundPage from "./pages/NotFoundPage";
import JobPage, { JobLoader } from "./pages/JobPage";
import AddJobPage from "./pages/AddJobPage";
import EditJobPage from "./pages/EditJobPage";
// import React from "react";
// import { useState } from "react";





const App = () => {
  
//Add Job Listing
const addJob= async (newJob)=>{

  const res = await fetch('https://job-api-hrlu.onrender.com/jobs',{
    method:'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify(newJob),
  }
)



return;  
};


//Delete Job Listing
const deleteJob = async (jobID)=>{
  const res = await fetch(`https://job-api-hrlu.onrender.com/jobs/${jobID}`,{
    method:'DELETE',
 
  });
}


//Update Job Listing
const updateJob =async (job)=>{
const rel = await fetch(`https://job-api-hrlu.onrender.com/jobs/${job.id}`,{
  method: 'PUT',
   headers:{
      'Content-Type':'application/json'
    },
  body: JSON.stringify(job),
})
}


  const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayouts />}>
      <Route index element={<HomePage />} />
      <Route path="/jobs" element={<JobsPage />} />
      <Route path="/add-job" element={<AddJobPage  addJobSubmit={addJob}/>} />

       <Route path="/editJob/:id" element={<EditJobPage updateJobSubmit = {updateJob}  // props for the component
      />}
      loader={JobLoader}/> 

      <Route path="/jobs/:id" element={<JobPage  deleteJob={deleteJob} // props for the component
       />} 
      loader={JobLoader}/>  // prop for the Route, not the component
      <Route path="*" element={<NotFoundPage/>} />
    </Route>
  ),  
   { basename:"/First-react-project/"},
);
  
  return (<RouterProvider router={router} />);
};

export default App;
