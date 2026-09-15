import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddJobPage = ({addJobSubmit}) => {
  
  const [title, setTitle] = useState('');
  const [type, setType] = useState('Full-Time');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [salary, setSalary] = useState('Under $50K');
  const [companyName, setCompanyName] = useState('');
  const [companyDescription, setCompanyDescription] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  
const navigate = useNavigate();

const submitForm = async (e)=>{
  e.preventDefault();

  const newJob = {
title,
type,
location,
description,
salary,
company: {
  name: companyName,
  description:companyDescription,
  contactEmail,
 contactPhone,
},
  };

await  addJobSubmit(newJob);

 toast.success('job added successfully');

 navigate('/jobs')



};
  return (
    <section className="bg-blue-100 sm:px-20 p-8 sm:py-20 ">
      <div className="bg-white w-full md:max-w-200 sm:max-w-150  mx-auto flex flex-col gap-4 px-6 rounded-md shadow-md">
        <form onSubmit={submitForm}>
<h1 className="text-center p-2 mt-7 sm:text-4xl text-3xl font-bold">Add Job</h1>

<div className="flex flex-col gap-2">
  <label htmlFor="type" className="sm:text-xl text-lg font-bold">Job Type</label>
  <select name="type" id="type"  required value={type} 
  onChange={(e)=>setType(e.target.value)}
   className="outline-none border border-gray-300 rounded-md p-2 mb-4 placeholder:text-gray-500 sm:placeholder:text-xl ">
    <option value="Full-Time" >Full-Time</option>
    <option value="Part-Time">Part-Time</option>
    <option value="Remote" >Remote</option>
    <option value="Internship">Internship</option>
  </select>
  </div>

<div className="flex flex-col gap-2 mt-2">
  <label className="sm:text-xl text-lg  font-bold">Job Listing Name</label>
  <input type="text"
   placeholder="e.g Beautiful Apartment in Miami"
   required
   name="title"
   id="title"
   value={title}
   onChange={(e)=>setTitle(e.target.value)}
   className="outline-none border border-gray-300 rounded-md p-2 mb-4 sm:placeholder:text-md placeholder:text-gray-500  "/>
  </div>

<div className="flex flex-col gap-2 mt-2">
  <label htmlFor="decription" className="sm:text-xl text-lg  font-bold">Description</label>
  <textarea name="description" id="description"
  value={description}
   onChange={(e)=>setDescription(e.target.value)}
  placeholder="any job duties, requirements, expectations, etc."  rows={5} className="outline-none border border-gray-300 rounded-md p-2 mb-4 placeholder:text-gray-500 sm:placeholder:text-md"></textarea>
  </div>

  
<div className="flex flex-col gap-2 mt-4" >
  <label htmlFor="salary" className="sm:text-xl text-lg font-bold">Salary</label>
  <select name="salary" id="salary"
  required
  value={salary}
   onChange={(e)=>setSalary(e.target.value)}
  className="outline-none border border-gray-300 rounded-md p-2 mb-4 placeholder:text-gray-500 sm:placeholder:text-md ">
    <option value='Under $50K'>Under $50K</option>
                <option value='$50K - 60K'>$50K - $60K</option>
                <option value='$60K - 70K'>$60K - $70K</option>
                <option value='$70K - 80K'>$70K - $80K</option>
                <option value='$80K - 90K'>$80K - $90K</option>
                <option value='$90K - 100K'>$90K - $100K</option>
                <option value='$100K - 125K'>$100K - $125K</option>
                <option value='$125K - 150K'>$125K - $150K</option>
                <option value='$150K - 175K'>$150K - $175K</option>
                <option value='$175K - 200K'>$175K - $200K</option>
                <option value='Over $200K'>Over $200K</option>
  </select>
  </div>
  
<div className="flex flex-col gap-2 ">
  <label htmlFor="location" className="sm:text-xl text-lg font-bold">Location</label>
  <input type="text" placeholder="Company Location"
  name="location"
  id="location" required
  value={location}
   onChange={(e)=>setLocation(e.target.value)}
  className="outline-none border border-gray-300 rounded-md p-2 mb-4 sm:placeholder:text-md placeholder:text-gray-500  "/>
  </div>

<h2 className="text-3xl font-semibold mt-5 mb-5">Company Info</h2>

<div className="flex flex-col gap-2">
  <label htmlFor="companyName" className="sm:text-xl text-lg font-bold">Company Name</label>
  <input type="text" placeholder="Company Name"
  name="companyName" id="companyName" required
value={companyName}
   onChange={(e)=>setCompanyName(e.target.value)}
  className="outline-none border border-gray-300 rounded-md p-2 mb-4 sm:placeholder:text-md placeholder:text-gray-500  "/>
  </div>

<div className="flex flex-col gap-2 mt-2 mb-3">
  <label htmlFor="companyDescription" className="sm:text-xl text-lg font-bold">Company Description</label>
  <textarea name="companyDescription" id="companyDescription"
  value={companyDescription}
   onChange={(e)=>setCompanyDescription(e.target.value)}
  placeholder="What does your company do?"  rows={5} className="outline-none border border-gray-300 rounded-md p-2 mb-4 placeholder:text-gray-500 sm:placeholder:text-md"></textarea>
  </div>

<div className="flex flex-col gap-2 mt-2">
  <label htmlFor="contactEmail" className="sm:text-xl text-lg font-bold">Contact Email</label>
  <input type="email" placeholder="Email address for Applicants"
  name="contactEmail" id="contactEmail"
  required
  value={contactEmail}
   onChange={(e)=>setContactEmail(e.target.value)}
  className="outline-none border border-gray-300 rounded-md p-2 mb-4 sm:placeholder:text-md placeholder:text-gray-500  "/>
  </div>

<div className="flex flex-col gap-2">
  <label htmlFor="contactPhone" className="sm:text-xl text-lg font-bold">Contact Phone</label>
  <input type="number" placeholder="Optional Phone for Applicants"
  name="contactPhone" id="contactPhone"
  value={contactPhone}
   onChange={(e)=>setContactPhone(e.target.value)}
  
  className="outline-none border border-gray-300 rounded-md p-2 mb-4 sm:placeholder:text-md placeholder:text-gray-500  "/>
  </div>

<button className="text-center bg-indigo-500 text-white block w-full py-2 font-bold text-lg rounded-3xl mt-4 mb-9">Add Job</button>
</form>
</div>
    </section>
    
    
  )
}

export default AddJobPage