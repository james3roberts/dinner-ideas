// src/pages/Planner.tsx
import Navbar from '../components/navbar';

function GroceryList() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-5xl font-bold mb-4">Grocery List</h1>
        <p className="text-lg">This is where you'll find the shopping list. </p>
      </div>
    </>
  );
}

export default GroceryList;
