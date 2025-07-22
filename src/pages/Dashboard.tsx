import React from 'react';
import { useAppSelector } from '../hooks/useRedux';
import MetricCard from '../components/dashboard/MetricCard';
import RevenueChart from '../components/dashboard/RevenueChart';
import UsersChart from '../components/dashboard/UsersChart';

const Dashboard: React.FC = () => {
  const { metrics } = useAppSelector((state) => state.dashboard);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="animate-fade-in">
        <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          Dashboard Overview
        </h1>
        <p className="text-muted-foreground mt-2">
          Welcome back! Here's what's happening with your business today.
        </p>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-slide-in">
        {metrics.map((metric, index) => (
          <div key={metric.title} style={{ animationDelay: `${index * 100}ms` }}>
            <MetricCard metric={metric} />
          </div>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 animate-fade-in">
        <RevenueChart />
        <UsersChart />
      </div>
    </div>
  );
};

export default Dashboard;