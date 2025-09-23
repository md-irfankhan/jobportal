import { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, User, ArrowRight, UserRound, Image } from 'lucide-react';
import {Link} from 'react-router'
import {useAuth} from '../../AuthProvider/AuthProvider'
export default function Register() {
  const {createUser,googleSignUp,updateUser}=useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);



//   const handleInputChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
 
    console.log(data);
    setIsLoading(true);

    createUser(data.email,data.password).then(res=>{
        updateUser(data.name,data.photo).then(()=>{
            console.log(res);
            setIsLoading(false);
            

        }).catch(err=>{
            console.log(err);
            setIsLoading(false);
            
        })
    }).catch(err=>{
        console.log(err);
        setIsLoading(false);
        
    })
    // Simulate API call
    // setTimeout(() => {
    //   setIsLoading(false);
    //   alert('Login successful!');
    // }, 2000);
  };


  const handleGoogle=()=>{
    googleSignUp().then(res=>{
        console.log(res);
        
    }).catch(err=>{
        console.log(err);
        
    })
  }

  return (
   <div className="min-h-screen bg-white flex items-center justify-center p-4 relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-gray-100 to-gray-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-gradient-to-r from-blue-50 to-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-40"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-gradient-to-r from-emerald-50 to-green-100 rounded-full mix-blend-multiply filter blur-xl opacity-35"></div>
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-gradient-to-r from-purple-50 to-violet-100 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-20 w-8 h-8 bg-gray-200/50 rotate-45 animate-spin" style={{animationDuration: '20s'}}></div>
        <div className="absolute top-40 right-32 w-6 h-6 bg-blue-200/60 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-16 w-4 h-4 bg-emerald-200/50 transform rotate-12 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-20 w-10 h-10 bg-purple-200/40 rotate-45 animate-spin" style={{animationDuration: '15s', animationDelay: '3s'}}></div>
      </div>

      <div className="relative bg-white shadow-2xl border border-gray-200 rounded-3xl p-8 w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
            <User className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Hello!
          </h1>
          <p className="text-gray-600">
            Register your account
          </p>
        </div>

        {/* Form */}
        <form  onSubmit={handleSubmit} className="space-y-6">
          {/* Name  */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <UserRound className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              name="name"
              required
              // value={formData.email}
              // onChange={handleInputChange}
              placeholder="Enter your name"
              className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all duration-300"
            />
          </div>
          {/* Photo  */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Image className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              name="photo"
              required
              // value={formData.email}
              // onChange={handleInputChange}
              placeholder="Enter your photoUrl"
              className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all duration-300"
            />
          </div>
          {/* Email Field */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Mail className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="email"
              name="email"
              required
              // value={formData.email}
              // onChange={handleInputChange}
              placeholder="Enter your email"
              className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all duration-300"
            />
          </div>

          {/* Password Field */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Lock className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              required
              // value={formData.password}
              // onChange={handleInputChange}
              placeholder="Enter your password"
              className="w-full pl-12 pr-12 py-4 bg-gray-50 border border-gray-200 rounded-2xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all duration-300"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
            >
              {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
            </button>
          </div>

     

          {/* Submit Button */}
          <button
            type='submit'
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold py-4 px-6 rounded-2xl hover:from-emerald-600 hover:to-cyan-600 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-transparent transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed shadow-lg flex items-center justify-center group"
          >
            {isLoading ? (
              <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
            ) : (
              <>
                Register
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
        </form>

        {/* Social Login */}
        <div className="mt-8">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-600">Or continue with</span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <button onClick={handleGoogle} className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all duration-300">
              <svg className="w-5 h-5 mx-auto" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
            </button>
            <button className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all duration-300">
              <svg className="w-5 h-5 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Sign Up Link */}
        <div className="mt-8 text-center">
          <p className="text-gray-600">
            Already have an account?
            <Link to={'/login'} className="ml-2 text-emerald-600 hover:text-emerald-700 font-semibold transition-colors">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}