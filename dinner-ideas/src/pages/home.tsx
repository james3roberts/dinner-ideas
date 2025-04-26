// src/pages/Home.tsx
import Navbar from '../components/Navbar';

function Home() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
        <h1 className="text-5xl font-bold text-white mb-4">Dinner Ideas</h1>
        <p className="text-lg text-white">Plan your meals. Save your favorites. Simplify grocery shopping.</p>
      </div>
    </>
  );
}

export default Home;
