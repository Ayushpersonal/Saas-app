import React from 'react';
import StatCard from '../components/StatCard';
import Card from '../components/Card';
import Table from '../components/Table';
import Button from '../components/Button';

export default function DashboardPage() {
  const headers = ["User", "Status", "Joined", "Revenue"];
  const data = [
    ["Alex Rivera", "Active", "Mar 12, 2024", "$1,200"],
    ["Sarah Chen", "Pending", "Mar 15, 2024", "$0"],
    ["Michael Scott", "Active", "Mar 10, 2024", "$4,500"],
  ];

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-500">Welcome back, here's what's happening today.</p>
        </div>
        <Button variant="primary">Download Report</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Total Revenue"
          value="$45,231"
          trend="+12.5%"
          trendType="positive"
        />
        <StatCard
          title="Active Users"
          value="2,405"
          trend="+3.2%"
          trendType="positive"
        />
        <StatCard
          title="Churn Rate"
          value="1.2%"
          trend="-0.5%"
          trendType="negative"
        />
        <StatCard
          title="Avg. Session"
          value="4m 32s"
          trend="+18%"
          trendType="positive"
        />
      </div>

      <Card title="Recent Transactions" subtitle="View and manage your latest sales.">
        <Table headers={headers} data={data} />
        <div className="mt-4 flex justify-end">
          <Button variant="ghost" size="sm">View all transactions</Button>
        </div>
      </Card>
    </div>
  );
}
