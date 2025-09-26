import { useEffect, useState } from 'react';
import { Eye, Edit, Trash2 } from 'lucide-react';
import { useAuth } from '../../../../AuthProvider/AuthProvider';
import axios from 'axios';
import { Link } from 'react-router';

const MyApplications = () => {
  const { user } = useAuth()
  const [application, setApplication] = useState([])
  useEffect(() => {
    fetch(`http://localhost:3000/myapplications/${user?.email}`).then(res => res.json()).then(data => {
      setApplication(data)
    })
  }, [])
  const [applications, setApplications] = useState([
    {
      id: 1,
      companyName: "TechCorp Solutions",
      position: "Frontend Developer",
      location: "New York, NY",
      appliedDate: "2024-03-10",
      salary: "$75,000 - $90,000",
      jobType: "Full-time",
      description: "Join our team as a Frontend Developer working with React and modern technologies.",
      requirements: "3+ years experience with React, JavaScript, and CSS frameworks."
    },
    {
      id: 2,
      companyName: "StartupXYZ",
      position: "Full Stack Engineer",
      location: "San Francisco, CA",
      appliedDate: "2024-03-12",
      salary: "$80,000 - $100,000",
      jobType: "Full-time",
      description: "Looking for a versatile full stack developer to work on cutting-edge projects.",
      requirements: "Experience with React, Node.js, and database technologies."
    },
    {
      id: 3,
      companyName: "Global Industries",
      position: "UI/UX Designer",
      location: "Remote",
      appliedDate: "2024-03-08",
      salary: "$60,000 - $80,000",
      jobType: "Contract",
      description: "Creative designer role focusing on user experience and interface design.",
      requirements: "Portfolio showing proficiency in Figma, Adobe Creative Suite, and user research."
    },
    {
      id: 4,
      companyName: "InnovateTech",
      position: "Software Engineer",
      location: "Austin, TX",
      appliedDate: "2024-03-15",
      salary: "$85,000 - $105,000",
      jobType: "Full-time",
      description: "Software engineering position working on scalable web applications.",
      requirements: "Strong background in JavaScript, Python, and cloud technologies."
    },
    {
      id: 5,
      companyName: "Digital Agency",
      position: "React Developer",
      location: "Chicago, IL",
      appliedDate: "2024-03-18",
      salary: "$70,000 - $85,000",
      jobType: "Part-time",
      description: "Part-time React developer role for various client projects.",
      requirements: "2+ years React experience, knowledge of modern development workflows."
    }
  ]);

  const [selectedApplication, setSelectedApplication] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleViewDetails = (application) => {
    setSelectedApplication(application);
    setShowModal(true);
  };

  const handleEdit = (applicationId) => {
    // Placeholder for edit functionality
    alert(`Edit application with ID: ${applicationId}`);
  };

 
const handleDelete = (applicationId) => {
  if (window.confirm('Are you sure you want to delete this application?')) {
    axios.delete(`http://localhost:3000/delapp/${applicationId}`)
      .then(res => {
        if (res.data.deletedCount > 0) {
          setApplication(prev => prev.filter(app => app._id !== applicationId));
        }
      })
      .catch(err => console.error(err));
  }
};

  const closeModal = () => {
    setShowModal(false);
    setSelectedApplication(null);
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">My Applications</h1>
        <p className="text-gray-600">Track and manage your job applications</p>
      </div>

      {/* Applications Table */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Company Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Position
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Location
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Applied Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Job Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Salary
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {application.map((application) => (
                <tr key={application.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{application.company}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{application.title}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {application.location}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {new Date(application.availableStartDate).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {application.jobType}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {application.expectedSalary}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleViewDetails(application)}
                        className="text-blue-600 hover:text-blue-900 p-2 rounded-md hover:bg-blue-50 transition-colors"
                        title="View Details"
                      >
                        <Eye size={16} />
                      </button>
                      <Link
                      to={`/dashboard/myapplications/${application._id}/edit`}
                        // onClick={() => handleEdit(application.id)}
                        className="text-green-600 hover:text-green-900 p-2 rounded-md hover:bg-green-50 transition-colors"
                        title="Edit Application"
                      >
                        <Edit size={16} />
                      </Link>
                      <button
                        onClick={() => handleDelete(application._id)}
                        className="text-red-600 hover:text-red-900 p-2 rounded-md hover:bg-red-50 transition-colors"
                        title="Delete Application"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal for application details */}
      {showModal && selectedApplication && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">{selectedApplication.title}</h2>
                  <p className="text-gray-600">{selectedApplication.company}</p>
                </div>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ×
                </button>
              </div>
            </div>

            <div className="p-6 space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-500">Applied Date</label>
                  <p className="text-gray-900 mt-1">{new Date(selectedApplication.availableStartDate).toLocaleDateString()}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Job Type</label>
                  <p className="text-gray-900 mt-1">{selectedApplication.jobType}</p>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-500">Location</label>
                <p className="text-gray-900 mt-1">{selectedApplication.location}</p>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-500">Salary Range</label>
                <p className="text-gray-900 mt-1">{selectedApplication.expectedSalary}</p>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-500">Job Description</label>
                <p className="text-gray-700 mt-1 leading-relaxed">{selectedApplication.description}</p>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-500">Requirements</label>
                <p className="text-gray-700 mt-1 leading-relaxed">{selectedApplication.requirements.join(',')}</p>
              </div>
            </div>

            <div className="sticky bottom-0 bg-white border-t border-gray-200 px-6 py-4">
              <div className="flex justify-end">
                <button
                  onClick={closeModal}
                  className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyApplications;