import React, { useState } from 'react';
import { Building2, MapPin, Clock, DollarSign } from 'lucide-react';
import { useAuth } from '../../../../AuthProvider/AuthProvider';
import axios from 'axios';

export default function JobPost() {
  const [errors, setErrors] = useState({});
  const {user}=useAuth()
  const jobTypes = ['Full-time', 'Part-time', 'Contract', 'Hybrid', 'Remote'];
  const categories = ['Engineering', 'Design', 'Marketing', 'Sales', 'HR', 'Finance', 'Operations', 'Product'];
  const currencies = ['bdt', 'usd', 'eur', 'gbp'];

  const validateForm = (formData) => {
    const newErrors = {};

    if (!formData.get('title')?.trim()) newErrors.title = 'Title is required';
    if (!formData.get('location')?.trim()) newErrors.location = 'Location is required';
    if (!formData.get('applicationDeadline')) newErrors.applicationDeadline = 'Application deadline is required';
    if (!formData.get('description')?.trim()) newErrors.description = 'Job description is required';
    if (!formData.get('company')?.trim()) newErrors.company = 'Company name is required';
    // if (!formData.get('hr_email')?.trim()) newErrors.hr_email = 'HR email is required';
    if (!formData.get('hr_name')?.trim()) newErrors.hr_name = 'HR name is required';
    
    const email = formData.get('hr_email');
    if (email && !/\S+@\S+\.\S+/.test(email)) {
      newErrors.hr_email = 'Please enter a valid email address';
    }

    const minSalary = formData.get('salaryRange.min');
    const maxSalary = formData.get('salaryRange.max');
    if (minSalary && maxSalary) {
      if (parseInt(minSalary) >= parseInt(maxSalary)) {
        newErrors.salary = 'Minimum salary must be less than maximum salary';
      }
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const validationErrors = validateForm(formData);
    
    setErrors(validationErrors);
    
    if (Object.keys(validationErrors).length > 0) {
      return;
    }
    
    // Process requirements and responsibilities from comma-separated strings
    const requirementsStr = formData.get('requirements') || '';
    const responsibilitiesStr = formData.get('responsibilities') || '';
    
    const requirements = requirementsStr
      .split(',')
      .map(req => req.trim())
      .filter(req => req.length > 0);
      
    const responsibilities = responsibilitiesStr
      .split(',')
      .map(resp => resp.trim())
      .filter(resp => resp.length > 0);
    
    // Build the job posting object
    const jobPostingData = {
      title: formData.get('title'),
      location: formData.get('location'),
      jobType: formData.get('jobType'),
      category: formData.get('category'),
      applicationDeadline: formData.get('applicationDeadline'),
      salaryRange: {
        min: parseInt(formData.get('salaryRange.min')) || 0,
        max: parseInt(formData.get('salaryRange.max')) || 0,
        currency: formData.get('salaryRange.currency')
      },
      description: formData.get('description'),
      company: formData.get('company'),
      requirements: requirements,
      responsibilities: responsibilities,
      status: formData.get('status'),
      hr_email: user?.email,
      hr_name: formData.get('hr_name'),
      company_logo: formData.get('company_logo') || ''
    };

    axios.post('http://localhost:3000/job',jobPostingData).then(res=>{
         console.log('Job Posting Data:', jobPostingData);
    alert('Job posting created successfully! Check console for data.');
        
    }).catch(err=>{
        console.log(err);
    }

    )
    
    console.log('Job Posting Data:', jobPostingData);
    alert('Job posting created successfully! Check console for data.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Create Job Posting</h1>
            <p className="text-gray-600">Fill in the details to post a new job opportunity</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Basic Information */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <Building2 className="w-5 h-5 mr-2 text-blue-600" />
                Basic Information
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Job Title *
                  </label>
                  <input
                    type="text"
                    name="title"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${errors.title ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="e.g., Software Engineer"
                  />
                  {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    name="company"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${errors.company ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="e.g., Favorite IT"
                  />
                  {errors.company && <p className="text-red-500 text-sm mt-1">{errors.company}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Location *
                  </label>
                  <input
                    type="text"
                    name="location"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${errors.location ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="e.g., Halishohor, Chittagong"
                  />
                  {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company Logo URL
                  </label>
                  <input
                    type="url"
                    name="company_logo"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="https://example.com/logo.png"
                  />
                </div>
              </div>
            </div>

            {/* Job Details */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-green-600" />
                Job Details
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Job Type
                  </label>
                  <select
                    name="jobType"
                    defaultValue="Hybrid"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    {jobTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category
                  </label>
                  <select
                    name="category"
                    defaultValue="Engineering"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    {categories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Application Deadline *
                  </label>
                  <input
                    type="date"
                    name="applicationDeadline"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${errors.applicationDeadline ? 'border-red-500' : 'border-gray-300'}`}
                  />
                  {errors.applicationDeadline && <p className="text-red-500 text-sm mt-1">{errors.applicationDeadline}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Job Status
                  </label>
                  <select
                    name="status"
                    defaultValue="active"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                    <option value="closed">Closed</option>
                    <option value="draft">Draft</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Job Description *
                </label>
                <textarea
                  name="description"
                  rows={4}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${errors.description ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="Describe the job role, expectations, and what makes this opportunity exciting..."
                />
                {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
              </div>
            </div>

            {/* Salary Range */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <DollarSign className="w-5 h-5 mr-2 text-yellow-600" />
                Salary Range
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Minimum Salary
                  </label>
                  <input
                    type="number"
                    name="salaryRange.min"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="40000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Maximum Salary
                  </label>
                  <input
                    type="number"
                    name="salaryRange.max"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="60000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Currency
                  </label>
                  <select
                    name="salaryRange.currency"
                    defaultValue="bdt"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    {currencies.map(curr => (
                      <option key={curr} value={curr}>{curr.toUpperCase()}</option>
                    ))}
                  </select>
                </div>
              </div>
              {errors.salary && <p className="text-red-500 text-sm mt-2">{errors.salary}</p>}
            </div>

            {/* Requirements */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Requirements
              </h2>
              <p className="text-sm text-gray-600 mb-3">
                Enter requirements separated by commas (e.g., JavaScript, React, Node.js, MongoDB)
              </p>
              
              <input
                type="text"
                name="requirements"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="JavaScript, React, Node.js, MongoDB"
              />
            </div>

            {/* Responsibilities */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Responsibilities
              </h2>
              <p className="text-sm text-gray-600 mb-3">
                Enter responsibilities separated by commas (e.g., Develop software, Collaborate with team, Code reviews)
              </p>
              
              <input
                type="text"
                name="responsibilities"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Develop and maintain software, Collaborate with the team, Participate in code reviews"
              />
            </div>

            {/* HR Information */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <Clock className="w-5 h-5 mr-2 text-purple-600" />
                HR Contact Information
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    HR Name *
                  </label>
                  <input
                    type="text"
                    name="hr_name"
                    defaultValue={user?.displayName}

                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${errors.hr_name ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="e.g., Farhan Rahman"
                  />
                  {errors.hr_name && <p className="text-red-500 text-sm mt-1">{errors.hr_name}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    HR Email *
                  </label>
                  <input
                    type="email"
                    name="hr_email"
                    defaultValue={user?.email}
                    disabled
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${errors.hr_email ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="hr@company.com"
                  />
                  {errors.hr_email && <p className="text-red-500 text-sm mt-1">{errors.hr_email}</p>}
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-6">
              <button
                type="submit"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                Create Job Posting
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}