import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DashboardLayout from './layouts/dashboards';
import DashboardPage from './pages/dashboardPage';
import AnalyticsPage from './pages/AnalyticsPage';
import CustomersPage from './pages/CustomersPage';
import SettingsPage from './pages/SettingsPage';

function App() {
  return (
    <DashboardLayout>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/analytics" element={<AnalyticsPage />} />
        <Route path="/customers" element={<CustomersPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </DashboardLayout>
  );
}

export default App;

