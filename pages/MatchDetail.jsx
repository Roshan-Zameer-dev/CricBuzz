import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import matchData from '../data/matches.json';

const MatchDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const match = matchData.find(m => m.id.toString() === id);

  if (!match) return <div>Match not found</div>;

  return (
    <div className="p-4">
      <button onClick={() => navigate(-1)} className="text-blue-500 mb-4">← Back</button>
      <h2 className="text-xl font-bold">{match.matchTitle}</h2>
      <p>{match.venue} • {match.date}</p>
      <p className="text-green-600 font-semibold">{match.status}</p>

      {/* Loop through team innings */}
      {['team1', 'team2'].map((teamKey, teamIdx) => (
        <div key={teamKey}>
          <h3 className="mt-6 font-bold text-lg">{match.teams[teamKey].name}</h3>
          {match.teams[teamKey].innings.map((inning, idx) => (
            <div key={idx} className="mb-4 p-3 bg-gray-100 rounded-lg">
              <h4 className="font-semibold mb-2">{idx + 1} Innings: {inning.score}/{inning.wickets} ({inning.overs} overs)</h4>
              
              <p className="font-semibold">Batting:</p>
              <ul className="text-sm mb-2">
                {inning.batting.map((player, i) => (
                  <li key={i}>
                    {player.name} - {player.runs}({player.balls}) - {player.out}
                  </li>
                ))}
              </ul>

              <p className="font-semibold">Bowling:</p>
              <ul className="text-sm">
                {inning.bowling.map((bowler, i) => (
                  <li key={i}>
                    {bowler.name} - {bowler.overs} overs, {bowler.runs} runs, {bowler.wickets} wickets
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MatchDetail;
