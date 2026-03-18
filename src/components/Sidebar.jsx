import React from 'react';
import SidebarItem from './SidebarItem';

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-white border-r border-gray-100 flex flex-col sticky top-0 overflow-y-auto">
      <div className="p-6">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">SN</div>
          <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-indigo-400 bg-clip-text text-transparent">Nexus</span>
        </div>
        
        <nav className="space-y-1">
          <SidebarItem label="Dashboard" active />
          <SidebarItem label="Analytics" />
          <SidebarItem label="Customers" badge="12" />
          <SidebarItem label="Settings" />
        </nav>
      </div>
    </aside>
  );
}
