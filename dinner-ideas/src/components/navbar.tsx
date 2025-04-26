// src/components/Navbar.tsx
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-gray-800">
          Dinner Ideas
        </Link>
        <div className="space-x-6">
          <Link to="/" className="text-gray-600 hover:text-blue-500">Home</Link>
          <Link to="/planner" className="text-gray-600 hover:text-blue-500">Planner</Link>
          <Link to="/grocerylist" className="text-gray-600 hover:text-blue-500">Grocery List</Link>
          <Link to="/settings" className="text-gray-600 hover:text-blue-500">Settings</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
