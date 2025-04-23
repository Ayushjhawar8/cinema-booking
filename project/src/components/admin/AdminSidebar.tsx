import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Film, 
  Video, 
  CalendarClock, 
  LayoutDashboard, 
  Users, 
  Settings, 
  LogOut, 
  ChevronRight 
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const AdminSidebar = () => {
  const location = useLocation();
  const { logout } = useAuth();
  
  const menuItems = [
    { 
      icon: <LayoutDashboard className="h-5 w-5" />, 
      label: 'Dashboard', 
      path: '/admin',
      exact: true
    },
    { 
      icon: <Film className="h-5 w-5" />, 
      label: 'Movies', 
      path: '/admin/movies'
    },
    { 
      icon: <Video className="h-5 w-5" />, 
      label: 'Cinema Halls', 
      path: '/admin/cinema-halls'
    },
    { 
      icon: <CalendarClock className="h-5 w-5" />, 
      label: 'Showtimes', 
      path: '/admin/showtimes'
    },
    { 
      icon: <Users className="h-5 w-5" />, 
      label: 'Users', 
      path: '/admin/users'
    },
    { 
      icon: <Settings className="h-5 w-5" />, 
      label: 'Settings', 
      path: '/admin/settings'
    },
  ];

  const isActive = (path: string, exact = false) => {
    if (exact) {
      return location.pathname === path;
    }
    return location.pathname === path || location.pathname.startsWith(`${path}/`);
  };

  return (
    <div className="w-64 h-screen bg-primary-900 text-white flex flex-col shadow-lg">
      {/* Logo */}
      <div className="p-6 border-b border-primary-800">
        <Link to="/" className="flex items-center gap-2">
          <Film className="h-8 w-8 text-secondary-500" />
          <span className="font-display font-bold text-xl">CineWorld</span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-6 px-4">
        <div className="text-neutral-400 uppercase text-xs font-semibold tracking-wider mb-4 px-2">
          Management
        </div>
        <ul className="space-y-1">
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`flex items-center justify-between rounded-md py-2 px-3 transition-colors ${
                  isActive(item.path, item.exact)
                    ? 'bg-primary-800 text-white'
                    : 'text-neutral-300 hover:bg-primary-800/50 hover:text-white'
                }`}
              >
                <div className="flex items-center gap-3">
                  {item.icon}
                  <span>{item.label}</span>
                </div>
                <ChevronRight className={`h-4 w-4 transition-opacity ${isActive(item.path, item.exact) ? 'opacity-100' : 'opacity-0'}`} />
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-primary-800">
        <button
          onClick={logout}
          className="flex items-center gap-3 text-neutral-300 hover:text-white transition-colors w-full px-3 py-2 rounded-md hover:bg-primary-800/50"
        >
          <LogOut className="h-5 w-5" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default AdminSidebar;