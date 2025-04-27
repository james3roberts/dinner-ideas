// src/pages/Planner.tsx
import Navbar from '../components/Navbar';

function DinnerIdeas() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-5xl font-bold mb-4">Dinner Ideas</h1>
        <p className="text-lg">This is where you will input the information for the dinners.</p>
      </div>
    </>
  );
}

export default DinnerIdeas;
