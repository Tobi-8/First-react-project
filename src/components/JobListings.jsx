import { useState, useEffect } from "react";
import JobListing from "./JobListing";
import Spinner from "./Spinner";


const JobListings = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  // console.log(isHome);



  useEffect(() => {
    const fetchJobs = async () => {
      const APIUrl = 'https://job-api-hrlu.onrender.com/jobs'
      try {
        const res = await fetch(APIUrl);
        // console.log("Status:", res.status);
        // console.log("APIUrl =", APIUrl);
        const data = await res.json();
        // console.log(data.length);
        setJobs(isHome ? data.slice(0, 3) : data);

      } catch (error) {
        console.log("Error , cannot Fetch jobs", error)
      } finally {
        setLoading(false);
      }


    }
    // useEffect is a hook that allows us to perform side effects in functional components.
// we use useEffect to make react fetch the data only once when the component is mounted. (sideeffect in rendering)
// the empty array at the end is to make it run only once, if we don't put the empty array, it will run in an infinite loop
//if we put a variable inside that array, anytime the useEffect runs, if the variable changes, it will run the useEffect again



    fetchJobs();
  }, []);


  return (
    <>
      <section className="bg-blue-100 p-8 ">
        <h1 className="text-4xl text-indigo-700 font-bold text-center mb-6  ">
          {isHome ? 'Recent Jobs' : 'Browse Jobs'}
        </h1>

        {loading ?
          <Spinner loading={loading} />

          : (
            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 max-w-345  w-full mx-auto">
              {jobs.map((job) => (
                <JobListing key={job.id} job={job} />
              ))}
            </div>

          )
        }


      </section>
    </>
  );
};

export default JobListings;





