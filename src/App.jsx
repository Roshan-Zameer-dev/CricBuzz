import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MatchCard from './components/MatchCard';
import MatchDetail from './components/MatchDetail';
import matches from './data/matches.json';
import './App.css';

const App = () => {
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
