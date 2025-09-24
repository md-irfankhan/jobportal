import React, { use } from 'react';
import { MapPin, Calendar, DollarSign, Building2, Mail, User, Briefcase, CheckCircle } from 'lucide-react';
import { Link, useLoaderData } from 'react-router';


export default function Details() {
  const job=useLoaderData();
  // const job = {
  //   title: "Software Engineer",
  //   location: "Halishohor, Chittagong",
  //   jobType: "Hybrid",
  //   category: "Engineering",
  //   applicationDeadline: "2024-12-31",
  //   salaryRange: {
  //     min: 40000,
  //     max: 60000,
  //     currency: "BDT"
  //   },
  //   description: "We are seeking a skilled Software Engineer to join our dynamic team. The candidate will work on diverse projects and contribute to innovative solutions.",
  //   company: "Favorite IT",
  //   requirements: ["JavaScript", "React", "Node.js", "MongoDB"],
  //   responsibilities: ["Develop and maintain software", "Collaborate with the team", "Participate in code reviews"],
  //   status: "active",
  //   hr_email: "hr@techsolutions.com",
  //   hr_name: "Farhan Rahman",
  //   company_logo: "https://i.ibb.co/mXD5MNf/facebook.png"
  // };

  const formatSalary = (min, max, currency) => {
    return `${currency} ${min.toLocaleString()} - ${max.toLocaleString()}`;
  };

  const formatDeadline = (deadline) => {
    const date = new Date(deadline);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto p-6">
        {/* Header Card */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
          <div className="flex items-start gap-6">
            <img 
              src={job.company_logo} 
              alt={`${job.company} logo`}
              className="w-16 h-16 rounded-xl object-cover bg-gray-100"
            />
            <div className="flex-1">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{job.title}</h1>
                  <div className="flex items-center gap-2 text-xl text-blue-600 font-semibold mb-3">
                    <Building2 className="w-5 h-5" />
                    {job.company}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-green-600 font-medium capitalize">{job.status}</span>
                </div>
              </div>

              {/* Quick Info */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-gray-500" />
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="font-medium">{job.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <DollarSign className="w-5 h-5 text-gray-500" />
                  <div>
                    <p className="text-sm text-gray-500">Salary</p>
                    <p className="font-medium">{formatSalary(job.salaryRange.min, job.salaryRange.max, job.salaryRange.currency)}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-gray-500" />
                  <div>
                    <p className="text-sm text-gray-500">Deadline</p>
                    <p className="font-medium">{formatDeadline(job.applicationDeadline)}</p>
                  </div>
                </div>
              </div>

              {/* Job Type & Category */}
              <div className="flex gap-3 mt-6">
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  {job.jobType}
                </span>
                <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                  {job.category}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Description */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Job Description</h2>
              <p className="text-gray-700 leading-relaxed">{job.description}</p>
            </div>

            {/* Requirements */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Requirements</h2>
              <div className="grid grid-cols-2 gap-3">
                {job.requirements.map((requirement, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">{requirement}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Responsibilities */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Responsibilities</h2>
              <div className="space-y-3">
                {job.responsibilities.map((responsibility, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-gray-700">{responsibility}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Apply Card */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <Link to={`/apply/${job._id}`}>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 mb-4">
                Apply for this Job
              </button>
              </Link>
              <p className="text-sm text-gray-500 text-center">
                Application deadline: {formatDeadline(job.applicationDeadline)}
              </p>
            </div>

            {/* HR Contact */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact HR</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <User className="w-5 h-5 text-gray-500" />
                  <div>
                    <p className="text-sm text-gray-500">HR Manager</p>
                    <p className="font-medium">{job.hr_name}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-gray-500" />
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-medium text-blue-600">{job.hr_email}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Job Summary */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Job Summary</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-500">Job Type:</span>
                  <span className="font-medium">{job.jobType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Category:</span>
                  <span className="font-medium">{job.category}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Status:</span>
                  <span className="font-medium capitalize text-green-600">{job.status}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}