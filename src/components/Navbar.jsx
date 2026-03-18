import React from 'react';
import Button from './Button';

export default function Navbar() {
  return (
    <header className="h-16 bg-white border-b border-gray-100 flex items-center justify-between px-8 sticky top-0 z-10 w-full">
      <div className="flex-1 max-w-md">
        <input 
          type="text" 
          placeholder="Search..." 
          className="block w-full px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
      <div className="flex items-center gap-4">
        <div className="w-8 h-8 bg-gray-200 rounded-full" />
        <Button variant="primary" size="sm">Export</Button>
      </div>
    </header>
  );
}
