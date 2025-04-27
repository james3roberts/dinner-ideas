// src/pages/Home.tsx
import Navbar from '../components/Navbar';

function Home() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
        <h1 className="text-5xl font-bold text-white mb-4">This is the home page. </h1>
        <p className="text-lg text-white">
          This is where everything will have a quick descripton of what is what!
        </p>
      </div>
    </>
  );
}

export default Home;
