import React from 'react';
import StatCard from '../components/StatCard';
import Card from '../components/Card';
import Table from '../components/Table';
import Button from '../components/Button';

export default function AnalyticsPage() {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Analytics</h1>
          <p className="text-gray-500">Track your performance and growth.</p>
        </div>
        <Button variant="primary">Generate Report</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatCard title="Conversion Rate" value="3.2%" trend="+0.4%" trendType="positive" />
        <StatCard title="Bounce Rate" value="42.1%" trend="-2.1%" trendType="positive" />
        <StatCard title="Avg. Time on Page" value="2m 15s" trend="+12%" trendType="positive" />
      </div>

      <Card title="Traffic Overview" subtitle="Detailed breakdown of your traffic sources.">
        <div className="h-64 flex items-center justify-center bg-gray-100 rounded-lg border-2 border-dashed border-gray-300">
           <p className="text-gray-400">Traffic Chart Placeholder</p>
        </div>
      </Card>
    </div>
  );
}
