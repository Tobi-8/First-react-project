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
import JobPage from "./pages/JobPage";
import AddJobPage from "./pages/AddJobPage";
import EditJobPage from "./pages/EditJobPage";

// params holds the dynamic segments of the URL defined in the route (e.g. /jobs/:id)
// so if the URL is /jobs/3, then params.id === "3"
// React Router automatically passes params into the loader so we can use it to fetch the right job
const JobLoader = async ({ params }) => {
  const APIUrl = "https://job-api-hrlu.onrender.com/jobs";
  const res = await fetch(`${APIUrl}/${params.id}`);
  const data = await res.json();
  return data;
};






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
