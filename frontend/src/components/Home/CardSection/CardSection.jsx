import JobCard from "./JobCard/JobCard";

const CardSection = () => {
    return (
        <div className="max-w-[1250px] mx-auto pt-5">
            <div>
                <h1 className="text-3xl text-center font-bold">Jobs of the day</h1>
            </div>
            <div className="grid grid-cols-1 gap-3.5 lg:grid-cols-3 pt-5">
                <JobCard></JobCard>
                <JobCard></JobCard>
                <JobCard></JobCard>
                <JobCard></JobCard>
                <JobCard></JobCard>
                <JobCard></JobCard>
            </div>
            
        </div>
    );
};

export default CardSection;