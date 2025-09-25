import React from 'react';
import {useLocation} from 'react-router'
import { User, Plus, Briefcase, FileText, Home, Settings, LogOut, Bell, ChevronRight } from 'lucide-react';
import './Sidebar.css'
const Sidebar = () => {
    const location= useLocation()
    return (
          <nav className="w-64 flex-shrink-0">
            <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
              <div className="space-y-1">
                {/* Dashboard Link - Active */}
                <div className="flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md transform scale-105 transition-all duration-200 cursor-pointer">
                  <Home className="w-5 h-5 " />
                  <span>Dashboard</span>
                  {/* <div className="ml-auto w-2 h-2 bg-white rounded-full"></div> */}
                </div>
                
                {/* Profile Link */}
                <div className=" flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 hover:scale-102 transition-all duration-200 cursor-pointer ">
                  <User className="w-5 h-5 " />
                  <span>Profile</span>
                </div>
                
                {/* Post Job Link */}
                <div className="flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 hover:scale-102 transition-all duration-200 cursor-pointer">
                  <Plus className="w-5 h-5" />
                  <span>Post Job</span>
                </div>
                
                {/* My Jobs Link */}
                <div className="flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 hover:scale-102 transition-all duration-200 cursor-pointer">
                  <Briefcase className="w-5 h-5 " />
                  <span>My Jobs</span>
                </div>
                
                {/* My Applications Link */}
                <div className="flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 hover:scale-102 transition-all duration-200 cursor-pointer">
                  <FileText className="w-5 h-5" />
                  <span>My Applications</span>
                </div>
                
                {/* Settings Link */}
                <div className="flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 hover:scale-102 transition-all duration-200 cursor-pointer">
                  <Settings className="w-5 h-5" />
                  <span>Settings</span>
                </div>
              </div>
              
              {/* Logout Button */}
              <div className="mt-8 pt-4 border-t border-gray-200">
                <div className="flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium text-gray-700 hover:bg-red-50 hover:text-red-700 transition-all duration-200 cursor-pointer">
                  <LogOut className="w-5 h-5 " />
                  <span>Logout</span>
                </div>
              </div>
            </div>
            
            {/* Quick Stats Card */}
            <div className="mt-6 bg-gradient-to-br from-blue-500 via-blue-600 to-purple-600 rounded-xl shadow-lg p-6 text-white">
              <h3 className="font-semibold mb-4 flex items-center">
                <Briefcase className="w-5 h-5 mr-2" />
                Quick Stats
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center bg-white/20 rounded-lg p-3">
                  <span className="text-sm">Active Jobs</span>
                  <span className="font-bold text-lg">8</span>
                </div>
                <div className="flex justify-between items-center bg-white/20 rounded-lg p-3">
                  <span className="text-sm">Applications</span>
                  <span className="font-bold text-lg">24</span>
                </div>
                <div className="flex justify-between items-center bg-white/20 rounded-lg p-3">
                  <span className="text-sm">This Week</span>
                  <span className="font-bold text-lg text-green-200">+3</span>
                </div>
              </div>
            </div>
          </nav>
    );
};

export default Sidebar;