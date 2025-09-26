import { use, useEffect, useState } from 'react';
import { Eye, Edit, Trash2 } from 'lucide-react';
import { useLoaderData } from 'react-router';
import { useAuth } from '../../../../AuthProvider/AuthProvider';
import axios from 'axios'
const MyJob = () => {
  const [job,setJob]=useState([])
  const {user}=useAuth();

  const applications=useLoaderData()
  console.log(applications);
  useEffect(()=>{
    fetch(`http://localhost:3000/myjob/${user?.email}`).then(res=>res.json()).then(data=>{
      console.log(data);
      setJob(data)
      
    })

  },[])

   
   
   
  const appLength=(id)=>{
    const filtered=applications.filter(application=>application.jobId==id)
    return filtered.length
  }
  


  const [selectedJob, setSelectedJob] = useState(null);
  const [showModal, setShowModal] = useState(false);
  

  const handleDetails = (job) => {
    setSelectedJob(job);
    setShowModal(true);
  };

  const handleEdit = (jobId) => {
    // Placeholder for edit functionality
    alert(`Edit job with ID: ${jobId}`);
  };

  const handleDelete = (jobId) => {
    if (window.confirm('Are you sure you want to delete this job?')) {
      axios.delete(`http://localhost:3000/deljob/${jobId}`).then(res=>{
        if(res.data.deletedCount>0){
          setJob(job.filter(job => job._id !== jobId));
        }
      })
    
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedJob(null);
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">My Jobs</h1>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Company Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date Posted
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Applicants
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {job.map((job) => (
                <tr key={job.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{job.company}</div>
                    <div className="text-sm text-gray-500">{job.title}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {new Date(job.applicationDeadline).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {appLength(job._id)} applicants
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleDetails(job)}
                        className="text-blue-600 hover:text-blue-900 p-2 rounded-md hover:bg-blue-50 transition-colors"
                        title="View Details"
                      >
                        <Eye size={16} />
                      </button>
                      <button
                        onClick={() => handleEdit(job._id)}
                        className="text-green-600 hover:text-green-900 p-2 rounded-md hover:bg-green-50 transition-colors"
                        title="Edit Job"
                      >
                        <Edit size={16} />
                      </button>
                      <button
                        onClick={() => handleDelete(job._id)}
                        className="text-red-600 hover:text-red-900 p-2 rounded-md hover:bg-red-50 transition-colors"
                        title="Delete Job"
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

      {/* Modal for job details */}
      {showModal && selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-xl font-bold text-gray-900">Job Details</h2>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-600 text-xl"
              >
                ×
              </button>
            </div>
            
            <div className="space-y-3">
              <div>
                <label className="text-sm font-medium text-gray-500">Company</label>
                <p className="text-gray-900">{selectedJob.company}</p>
              </div>
              
              <div>
                <label className="text-sm font-medium text-gray-500">Position</label>
                <p className="text-gray-900">{selectedJob.title}</p>
              </div>
              
              <div>
                <label className="text-sm font-medium text-gray-500">Date Posted</label>
                <p className="text-gray-900">{new Date(selectedJob.applicationDeadline).toLocaleDateString()}</p>
              </div>
              
              <div>
                <label className="text-sm font-medium text-gray-500">Applicants</label>
                <p className="text-gray-900">{appLength(job._id)}</p>
              </div>
              
              <div>
                <label className="text-sm font-medium text-gray-500">Description</label>
                <p className="text-gray-700">{selectedJob.description}</p>
              </div>
            </div>
            
            <div className="mt-6 flex justify-end">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyJob;