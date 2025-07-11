import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MatchCard from './components/MatchCard';
import MatchDetail from './components/MatchDetail';
import './App.css';

const App = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    fetch('/Matches.json')
      .then(res => res.json())
      .then(data => setMatches(data))
      .catch(err => console.error('Error loading matches.json:', err));
  }, []);

  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route
            path="/"
            element={
              <div className="match-list">
                <h1>Cricbuzz</h1>
                {matches.map(match => (
                  <MatchCard key={match.id} match={match} />
                ))}
              </div>
            }
          />
          <Route path="/match/:id" element={<MatchDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
