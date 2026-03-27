import React from 'react';
import Card from '../components/Card';
import Button from '../components/Button';

export default function SettingsPage() {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
          <p className="text-gray-500">Manage your application preferences.</p>
        </div>
      </div>

      <div className="space-y-6">
        <Card title="Profile Settings" subtitle="Update your personal information.">
            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Display Name</label>
                    <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" defaultValue="Admin" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Email Address</label>
                    <input type="email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" defaultValue="admin@example.com" />
                </div>
                <Button variant="primary">Save Changes</Button>
            </div>
        </Card>

        <Card title="Notifications" subtitle="Configure how you receive alerts.">
             <div className="flex items-center justify-between">
                <span>Email Notifications</span>
                <div className="w-10 h-5 bg-indigo-600 rounded-full cursor-pointer relative">
                    <div className="w-4 h-4 bg-white rounded-full absolute top-0.5 right-0.5 shadow-sm" />
                </div>
             </div>
        </Card>
      </div>
    </div>
  );
}
