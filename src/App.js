// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
          <Route path="/" element={<Swipe />} />
          <Route path="/filters" element={<Filters />} />
          <Route path="/library" element={<Library />} />
          <Route path="/recipe/:id" element={<ViewRecipe />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
