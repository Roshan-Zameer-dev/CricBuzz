import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MatchCard from '../src/components/MatchCard.jsx';
import MatchDetail from '../src/components/MatchDetail.jsx';
import matches from '../src/data/Matches.json';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              {matches.map(match => (
                <MatchCard key={match.id} match={match} />
              ))}
            </div>
          }
        />
        <Route path="/match/:id" element={<MatchDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
