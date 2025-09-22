import React from 'react';
import { User, Plus, Briefcase, FileText, Home, Settings } from 'lucide-react';
const Bottombar = () => {
    return (
        <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2">
        <div className="flex justify-around items-center">
          {/* Dashboard */}
          <div className="flex flex-col items-center py-2 px-3 rounded-lg bg-blue-50">
            <Home className="w-6 h-6 text-blue-600 mb-1" />
            <span className="text-xs font-medium text-blue-600">Dashboard</span>
          </div>
          
          {/* Post Job */}
          <div className="flex flex-col items-center py-2 px-3 rounded-lg hover:bg-gray-50 cursor-pointer">
            <Plus className="w-6 h-6 text-gray-400 mb-1" />
            <span className="text-xs text-gray-600">Post Job</span>
          </div>
          
          {/* My Jobs */}
          <div className="flex flex-col items-center py-2 px-3 rounded-lg hover:bg-gray-50 cursor-pointer">
            <Briefcase className="w-6 h-6 text-gray-400 mb-1" />
            <span className="text-xs text-gray-600">My Jobs</span>
          </div>
          
          {/* Applications */}
          <div className="flex flex-col items-center py-2 px-3 rounded-lg hover:bg-gray-50 cursor-pointer">
            <FileText className="w-6 h-6 text-gray-400 mb-1" />
            <span className="text-xs text-gray-600">Applications</span>
          </div>
          
          {/* Profile */}
          <div className="flex flex-col items-center py-2 px-3 rounded-lg hover:bg-gray-50 cursor-pointer">
            <User className="w-6 h-6 text-gray-400 mb-1" />
            <span className="text-xs text-gray-600">Profile</span>
          </div>
        </div>
      </nav>
    );
};

export default Bottombar;