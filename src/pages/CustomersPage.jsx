import React from 'react';
import Card from '../components/Card';
import Table from '../components/Table';
import Button from '../components/Button';

export default function CustomersPage() {
  const headers = ["Name", "Email", "Plan", "Status"];
  const data = [
    ["Jane Cooper", "jane@example.com", "Pro", "Active"],
    ["Cody Fisher", "cody@example.com", "Free", "Inactive"],
    ["Esther Howard", "esther@example.com", "Enterprise", "Active"],
  ];

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Customers</h1>
          <p className="text-gray-500">Manage your user base and subscriptions.</p>
        </div>
        <Button variant="primary">Add Customer</Button>
      </div>

      <Card title="Customer List" subtitle="A list of all users and their current subscription status.">
        <Table headers={headers} data={data} />
      </Card>
    </div>
  );
}
