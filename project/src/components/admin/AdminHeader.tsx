import React from 'react';
import { Bell, Search, User } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const AdminHeader = () => {
  const { user } = useAuth();

  return (
    <header className="bg-white shadow-sm py-4 px-6">
      <div className="flex justify-between items-center">
        {/* Search */}
        <div className="relative w-64">
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-neutral-400" />
        </div>

        {/* Right side actions */}
        <div className="flex items-center gap-6">
          {/* Notifications */}
          <div className="relative">
            <button className="text-neutral-600 hover:text-primary-700 transition-colors">
              <Bell className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 bg-accent-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                3
              </span>
            </button>
          </div>

          {/* User info */}
          <div className="flex items-center gap-3">
            <div className="bg-primary-100 rounded-full p-2">
              <User className="h-6 w-6 text-primary-700" />
            </div>
            <div>
              <p className="font-medium text-neutral-800">{user?.name || 'Admin User'}</p>
              <p className="text-xs text-neutral-500">Administrator</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;