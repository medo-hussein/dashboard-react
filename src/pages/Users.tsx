import React from 'react';
import DataTable from '../components/dashboard/DataTable';

const Users: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="animate-fade-in">
        <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          User Management
        </h1>
        <p className="text-muted-foreground mt-2">
          Manage and monitor all users in your system.
        </p>
      </div>

      {/* Data Table */}
      <div className="animate-slide-in">
        <DataTable />
      </div>
    </div>
  );
};

export default Users;