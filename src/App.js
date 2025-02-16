import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Swipe from './pages/Swipe';
import Filters from './pages/Filters';
import Library from './pages/Library';
import ViewRecipe from './pages/ViewRecipe';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Swipe />} /> {/* Swiping page */}
          <Route path="/filters" element={<Filters />} /> {/* Filters screen */}
          <Route path="/library" element={<Library />} /> {/* Saved recipes library */}
          <Route path="/recipe/:id" element={<ViewRecipe />} /> {/* View single saved recipe */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
