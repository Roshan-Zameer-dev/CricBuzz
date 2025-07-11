import React from 'react';
import { useNavigate } from 'react-router-dom';
import matchData from '../data/matches.json';

const MatchList = () => {
  const navigate = useNavigate();

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">🏏 Cricket Matches</h2>
      {matchData.map((match, index) => (
        <div
          key={index}
          onClick={() => navigate(`/match/${match.id}`)}
          className="cursor-pointer p-4 bg-white rounded-lg shadow-md mb-4 hover:shadow-lg"
        >
          <h3 className="font-semibold">{match.matchTitle}</h3>
          <p>{match.venue} • {match.date}</p>
          <p className="text-sm text-green-600">{match.status}</p>
        </div>
      ))}
    </div>
  );
};

export default MatchList;
