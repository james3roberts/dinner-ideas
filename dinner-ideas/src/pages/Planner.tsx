// src/pages/Planner.tsx
import Navbar from '../components/Navbar';

function Planner() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-5xl font-bold mb-4"> Planner</h1>
        <p className="text-lg">This is where the saved dinners will be. </p>
      </div>
    </>
  );
}

export default Planner;
