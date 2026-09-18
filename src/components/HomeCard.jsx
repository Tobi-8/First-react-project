// import React from "react";
import Card from "./Card";
import { Link } from "react-router-dom";

const HomeCard = () => {
  return (
    <>
      <section className="bg-white p-8">
        <div className="grid gap-4 md:grid-cols-2 grid-cols-1 max-w-345  w-full mx-auto">
          <Card>
              <h2 className="font-bold text-2xl capitalize ">for Developers</h2>
            <p className="font-semibold">
              browse our React Jobs and start your career today
            </p>
            <Link
              to="/jobs"
              className="bg-black px-4 py-2 mt-1.5 rounded-lg text-white "
            >
              Browse Jobs
            </Link>
          </Card> 

          <Card bg="bg-indigo-100">
            <h2 className="font-bold text-2xl capitalize ">for Employers</h2>
            <p className="font-semibold">
                 List your job to find the perfect developer for the role
            </p>
            <Link
              to="/add-job"
              className="bg-indigo-700 px-4 py-2 mt-1.5 rounded-lg text-white"
            >
               Add Job
            </Link>
          </Card>
        </div>
      </section>
    </>
  );
};

export default HomeCard;
