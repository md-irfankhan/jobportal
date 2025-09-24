import { MapPin, Calendar, DollarSign, Building2, Clock } from 'lucide-react';
import { motion } from "motion/react"
import { Link } from 'react-router';
const JobCard = ({job}) => {
    // const job = {
    //     title: "Software Engineer",
    //     location: "Halishohor, Chittagong",
    //     jobType: "Hybrid",
    //     category: "Engineering",
    //     applicationDeadline: "2024-12-31",
    //     salaryRange: {
    //         min: 40000,
    //         max: 60000,
    //         currency: "BDT"
    //     },
    //     description: "We are seeking a skilled Software Engineer to join our dynamic team. The candidate will work on diverse projects and contribute to innovative solutions.",
    //     company: "Favorite IT",
    //     requirements: ["JavaScript", "React", "Node.js", "MongoDB"],
    //     status: "active",
    //     company_logo: "https://i.ibb.co/mXD5MNf/facebook.png"
    // };

    const formatSalary = (min, max, currency) => {
        return `${currency} ${min.toLocaleString()} - ${max.toLocaleString()}`;
    };

    const formatDeadline = (deadline) => {
        const date = new Date(deadline);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };

    return (
        <div>
            <motion.div whileHover={{
                y: -10,
                border: "2px solid #BBDCE5",
                transition: { duration: 0.2 }
            }}
               
                transition={{
                    
                    ease: "easeIn"
                }}

                className="max-w-md place-items-center mx-auto bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200">
                {/* Header */}
                <div className="p-6 border-b border-gray-100">
                    <div className="flex items-start gap-4">
                        <img
                            src={job.company_logo}
                            alt={`${job.company} logo`}
                            className="w-12 h-12 rounded-lg object-cover bg-gray-100"
                        />
                        <div className="flex-1">
                            <h3 className="text-xl font-semibold text-gray-900 mb-1">
                                {job.title}
                            </h3>
                            <p className="text-blue-600 font-medium">{job.company}</p>
                        </div>
                        <div className="flex items-center gap-1">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="text-sm text-green-600 capitalize">{job.status}</span>
                        </div>
                    </div>
                </div>

                {/* Job Details */}
                <div className="p-6 space-y-4">
                    {/* Location & Job Type */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-gray-600">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm">{job.location}</span>
                        </div>
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                            {job.jobType}
                        </span>
                    </div>

                    {/* Salary */}
                    <div className="flex items-center gap-2 text-gray-700">
                        <DollarSign className="w-4 h-4" />
                        <span className="text-sm font-medium">
                            {formatSalary(job.salaryRange.min, job.salaryRange.max, job.salaryRange.currency)}
                        </span>
                    </div>

                    {/* Deadline */}
                    <div className="flex items-center gap-2 text-gray-600">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">Deadline: {formatDeadline(job.applicationDeadline)}</span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed">
                        {job.description}
                    </p>

                    {/* Skills */}
                    <div>
                        <h4 className="text-sm font-medium text-gray-900 mb-2">Required Skills</h4>
                        <div className="flex flex-wrap gap-2">
                            {job.requirements.map((skill, index) => (
                                <span
                                    key={index}
                                    className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Action Button */}
                    <Link to={`/details/${job._id}`}>
                    <motion.button
                        whileHover={{
                            scale: 1.03
                        }}

                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200">
                        Apply Now
                    </motion.button>
                    </Link>
                </div>
            </motion.div>
        </div>
    );
};

export default JobCard;