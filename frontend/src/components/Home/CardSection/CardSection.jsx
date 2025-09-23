
import { use } from "react";
import JobCard from "./JobCard/JobCard";
'use client';
const CardSection = ({fetchCards}) => {
    const data=use(fetchCards)
    console.log(data);
    
    
    
    return (
        <div className="max-w-[1250px] mx-auto pt-5">
            <div>
                <h1 className="text-3xl text-center font-bold">Jobs of the day</h1>
            </div>
            <div className="grid grid-cols-1 gap-3.5 lg:grid-cols-3 pt-5">
                {/* <JobCard></JobCard>
                <JobCard></JobCard>
                <JobCard></JobCard>
                <JobCard></JobCard>
                <JobCard></JobCard>
                <JobCard></JobCard> */}

                {
                    data.map(job=><JobCard job={job}></JobCard>)
                }
            </div>
            
        </div>
    );
};

export default CardSection;