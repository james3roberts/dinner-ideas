// src/pages/HomePage.tsx
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Welcome to Dinner Ideas!</h1>

      <div className="space-y-6 w-full max-w-md">
        {/* Dinner Ideas Section */}
        <div className="p-6 bg-white shadow-md rounded-md">
          <h2 className="text-2xl font-semibold mb-2">Dinner Ideas</h2>
          <p className="text-gray-700 mb-4">Input and save new dinner ideas with ingredients.</p>
          <Link to="/dinnerideas" className="text-blue-500 hover:underline">
            Go to Dinner Ideas
          </Link>
        </div>

        {/* Planner Section */}
        <div className="p-6 bg-white shadow-md rounded-md">
          <h2 className="text-2xl font-semibold mb-2">Planner</h2>
          <p className="text-gray-700 mb-4">Select saved dinners to plan meals for the week.</p>
          <Link to="/planner" className="text-blue-500 hover:underline">
            Go to Planner
          </Link>
        </div>

        {/* Grocery List Section */}
        <div className="p-6 bg-white shadow-md rounded-md">
          <h2 className="text-2xl font-semibold mb-2">Grocery List</h2>
          <p className="text-gray-700 mb-4">See the grocery list based on your planned dinners.</p>
          <Link to="/grocerylist" className="text-blue-500 hover:underline">
            Go to Grocery List
          </Link>
        </div>

        {/* Settings Section */}
        <div className="p-6 bg-white shadow-md rounded-md">
          <h2 className="text-2xl font-semibold mb-2">Settings</h2>
          <p className="text-gray-700 mb-4">Set dietary restrictions and preferences.</p>
          <Link to="/settings" className="text-blue-500 hover:underline">
            Go to Settings
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
