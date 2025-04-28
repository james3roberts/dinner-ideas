// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import Planner from './pages/Planner';
import GroceryList from './pages/GroceryList';
import Settings from './pages/Settings';
import DinnerIdeas from './pages/DinnerIdeas'; // adjust path if needed

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/planner" element={<Planner />} />
        <Route path="/grocerylist" element={<GroceryList />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/DinnerIdeas" element={<DinnerIdeas />} />
      </Routes>
    </Router>
  );
}

export default App;
