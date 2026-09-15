// import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const JobListing = ({ job }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  let description = job.description;

  if (!showFullDescription) {
    description = description.substring(0, 90) + "...";
  }
 
  return (
    <>
      <div className="flex flex-col items-start  gap-3 px-4 py-3 bg-white rounded-xl shadow-xl ">
        <span className="text-gray-600 capitalize mt-1.5">{job.type}</span>
        <h2 className="font-bold text-2xl">{job.type}</h2>
        <p className="">{description}</p>

        <button
          onClick={() => setShowFullDescription(!showFullDescription)}
          className="text-indigo-500 hover:text-indigo-600 mb-3"
        >
          {!showFullDescription ? "show more" : "show less"}
        </button>

        <span className="text-indigo-600 capitalize">{job.salary}/year</span>

        <hr className="text-gray-300 w-full" />
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 md:gap-2 w-full">
          <span className="text-red-500 ">
            <i className="fa-solid fa-location-pin mr-1"></i>
            {job.location}
          </span>
          <Link
            to={`/jobs/${job.id}`}
            className="bg-indigo-700 px-4 py-2 mt-1.5   rounded-lg text-white capitalize"
          >
            Read more
          </Link>
        </div>
      </div>
    </>
  );
};

export default JobListing;
