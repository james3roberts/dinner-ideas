// src/pages/Planner.tsx
import Navbar from '../components/Navbar';

function Settings() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-5xl font-bold mb-4">Meal Planner</h1>
        <p className="text-lg">This is where you'll plan your weekly meals!</p>
      </div>
    </>
  );
}

export default Settings;
