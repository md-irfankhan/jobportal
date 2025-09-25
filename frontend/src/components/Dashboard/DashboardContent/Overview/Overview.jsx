import React from 'react';
import { useLoaderData } from 'react-router';
import StatCard from './StatCard/StatCard';
import { 
  Users, 
  Briefcase, 
  TrendingUp, 
  Clock, 
  CheckCircle, 
  XCircle, 
  Eye,
  Edit,
  Trash2,
  Plus,
  Search,
  Filter,
  Calendar,
  MapPin,
  DollarSign,
  Building2
} from 'lucide-react';
const Overview = () => {
    const {jobs,applications}=useLoaderData()
    console.log(jobs);
    
    return (
        <div className="space-y-6">
            <StatCard
            icon={Briefcase}
            title="Total Job Postings"
            value={jobs.length}
            color={'#3B82F6'}

            ></StatCard>
            <StatCard
            icon={Users}
            title="Total Applications"
            value={applications.length}
            color={'#8B5CF6'}

            ></StatCard>
        </div>
    );
};

export default Overview;