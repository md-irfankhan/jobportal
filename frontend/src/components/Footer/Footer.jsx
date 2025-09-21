import React from 'react';
import { Github, Twitter, Linkedin, Instagram, Mail, ArrowUpRight, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br mt-6 from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-pink-500 to-orange-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="font-bold text-white">EJ</span>
              </div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                E-JOB
              </h3>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-md">
              Empowering careers and connecting talent with opportunities in the digital age. 
              Your next adventure starts here.
            </p>
            
            {/* Newsletter */}
            <div className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl font-medium hover:scale-105 transition-transform duration-200 flex items-center justify-center space-x-2">
                <span>Subscribe</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">Explore</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center space-x-2 group">
                <span>Find Jobs</span>
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a></li>
              <li><a href="#" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center space-x-2 group">
                <span>Post a Job</span>
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a></li>
              <li><a href="#" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center space-x-2 group">
                <span>Companies</span>
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a></li>
              <li><a href="#" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center space-x-2 group">
                <span>About</span>
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">Connect</h4>
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-5 h-5" />
                <span>hello@ejob.co</span>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-200">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-200">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-200">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-200">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-400" />
              <span>© 2024 E-JOB</span>
            </div>
            
            <div className="flex items-center space-x-8">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">Terms</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}