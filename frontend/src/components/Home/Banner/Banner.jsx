import Img1 from '../../../assets/image1.png'
import Img2 from '../../../assets/image2.png'
import { motion } from "motion/react"
const Banner = () => {
    return (
        <div className='flex items-center max-w-[1250px] mx-auto gap-10 flex-col lg:flex-row pt-6'>
            <div className=''>
                <h1 className='text-4xl font-bold'>The <motion.span animate={{
                    color:["#e63946", "#457b9d", "#2a9d8f", "#f4a261", "#e9c46a"]
                }}
                transition={{
                    duration:5,
                    repeat:Infinity
                }}
                
                >Easiest Way</motion.span> to Get Your New Job</h1>
                <p className='text-[20px] py-4'>Each month, more than 3 million job seekers turn to
                    website in their search for work, making over 140,000
                    applications every single day</p>
            </div>
            <div className=''>
               <motion.div
               whileHover={{scale:1.1}}
               animate={{
                y:[0,50,0]
               }}
               transition={{
                duration:6,
                repeat:Infinity
               }}
               >
                <img src={Img1} alt="" />
               </motion.div>
               <motion.div
               whileHover={{scale:1.1}}
               animate={{
                x:[0,50,0]
               }}
               transition={{
                duration:8,
                repeat:Infinity
               }}
               >
                <img src={Img2} alt="" />
               </motion.div>
            </div>
        </div>
    );
};

export default Banner;