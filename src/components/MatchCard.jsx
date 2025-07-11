import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CardStyle.css';

const MatchCard = ({ match }) => {
  const navigate = useNavigate();

  return (
    <div className="match-card" onClick={() => navigate(`/match/${match.id}`)}>
      <div className="match-header">
        <h2>{match.matchTitle}</h2>
        <span className="match-type">{match.matchType}</span>
      </div>
      <p className="match-meta">{match.venue} • {match.date}</p>
      <div className="team-scores">
        <div><strong>{match.teams.team1.name}</strong>: {match.teams.team1.innings.map(i => `${i.score}/${i.wickets} (${i.overs})`).join(', ')}</div>
        <div><strong>{match.teams.team2.name}</strong>: {match.teams.team2.innings.map(i => `${i.score}/${i.wickets} (${i.overs})`).join(', ')}</div>
      </div>
      <p className="match-status">{match.status}</p>
    </div>
  );
};

export default MatchCard;
