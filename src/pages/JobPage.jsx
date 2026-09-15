import { useLoaderData, useNavigate,  } from "react-router-dom";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const JobPage = ({deleteJob}) => {
  const navigate = useNavigate();
  const job = useLoaderData();

  if (!job) return null;

  const onDeleteClick = async (jobID)=>{
const confirm = window.confirm('are you sire you wanna delete this listing?');

if(!confirm)  return;

await deleteJob(jobID);

 toast.success('job deleted successfully');

 navigate('/jobs');
  };




  return (
    <>
      <section>
        <div className="px-4 py-4 mx-auto max-w-345  w-full">
          <Link to={"/jobs"} className="text-indigo-400 ">
            <i className="fa-solid fa-arrow-left"></i> Back to Job Listing
          </Link>
        </div>
      </section>

      <section className="bg-indigo-50">
        <div className="mx-auto max-w-400  w-full p-10">
        <div className="grid grid-cols-1 md:grid-cols-[7fr_3fr]  gap-6">
          <div className="flex flex-col gap-4">
            <div className="bg-white flex  flex-col gap-3 p-8 rounded-md shadow-lg" >
              <h6 className="text-gray-500">Full time</h6>
              <h1 className="text-2xl font-bold ">{job.title}</h1>  {/*it is basically pulling out the title from the job object it was assigned to in line 6*/}
              <span className="text-amber-700 font-semibold"><i className="fa-solid fa-location-dot"></i> {job.location}</span>
            </div>

            <div className="bg-white flex  flex-col gap-3 px-6 py-10 rounded-md shadow-lg" >
              <h6 className="text-indigo-600 font-bold">Job Description</h6>
             
              <p className=" my-2">{job.description}</p>


              <h2 className="text-indigo-600 font-bold">Salary</h2>
              <p className="font-semibold">{job.salary}</p>
            </div>
          </div>
          
          

             <aside className="grid gap-6">
<div className="bg-white flex flex-col gap-2 p-4 rounded-md shadow-lg">
<h4 className="font-bold text-lg">Company info</h4>
<h2 className="mt-2 text-xl font-semibold">{job.company.name}</h2>
<p className="">{job.company.description}</p>
<hr  className="border-0 h-[0.5px] bg-gray-200"/>

<h2 className=" text-xl    ">Contact Email:</h2>
<p className="bg-indigo-200 font-bold p-1">{job.company.contactEmail} </p>
<h2 className=" text-xl">Contact Phone:</h2>
<p className="bg-indigo-200 font-bold p-1">{job.company.contactPhone} </p>

</div>
<div className="bg-white flex flex-col p-4 rounded-md shadow-lg">
  <h2 className="font-bold text-xl">Manage Job</h2>

  <Link
  to={`/editJob/${job.id}`}
   className="bg-blue-600 mt-4 rounded-xl font-bold text-white text-center p-1">Edit Job</Link>
  <button onClick={()=>onDeleteClick(job.id)} className="bg-red-600 mt-4 rounded-xl font-bold text-white p-1">Delete Job</button>
</div>
        </aside>
        </div>

     </div>
      </section>
    </>
  );
};

const JobLoader = async ({ params }) => {
  const APIUrl = "https://job-api-hrlu.onrender.com/jobs";
  const res = await fetch(`${APIUrl}/${params.id}`);
  const data = await res.json();
  return data;
};

export { JobPage as default, JobLoader };


// params holds the dynamic segments of the URL defined in the route (e.g. /jobs/:id)
// so if the URL is /jobs/3, then params.id === "3"
// React Router automatically passes params into the loader so we can use it to fetch the right job
// const JobLoader = async ({ params }) => {
//   const res = await fetch(`${APIUrl}/${params.id}`);
//   const data = await res.json();
//   return data;
// };
