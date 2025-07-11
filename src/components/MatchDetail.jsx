import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import matches from '../data/matches.json';
import './DetailStyle.css';

const MatchDetail = () => {
  const { id } = useParams();
  const match = matches.find(m => m.id === parseInt(id));
  const navigate = useNavigate();

  const renderInnings = (innings, teamName, opponentName) => (
    <div>
      <h3>{teamName} - {innings.inningNumber}st Innings</h3>
      <div className="score-box">{innings.score}/{innings.wickets} ({innings.overs} ov)</div>

      <h4>Batting</h4>
      <table className="score-table">
        <thead>
          <tr>
            <th>Batsman</th><th>R</th><th>B</th><th>4s</th><th>6s</th><th>SR</th><th>Dismissal</th>
          </tr>
        </thead>
        <tbody>
          {innings.batting.map((b, idx) => (
            <tr key={idx}>
              <td>{b.name}</td>
              <td>{b.runs}</td>
              <td>{b.balls}</td>
              <td>{b.fours}</td>
              <td>{b.sixes}</td>
              <td>{b.sr.toFixed(2)}</td>
              <td>{b.out}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h4>Bowling ({opponentName})</h4>
      <table className="score-table">
        <thead>
          <tr>
            <th>Bowler</th><th>O</th><th>M</th><th>R</th><th>W</th><th>Econ</th>
          </tr>
        </thead>
        <tbody>
          {innings.bowling.map((b, idx) => (
            <tr key={idx}>
              <td>{b.name}</td>
              <td>{b.overs}</td>
              <td>{b.maidens}</td>
              <td>{b.runs}</td>
              <td>{b.wickets}</td>
              <td>{b.economy.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="detail-container">
      <button onClick={() => navigate('/')} className="back-btn">← Back</button>
      <h2>{match.matchTitle}</h2>
      <p className="match-meta">{match.venue} • {match.date}</p>
      <p className="match-status">{match.status}</p>

      {match.teams.team1.innings.map((inning, idx) =>
        renderInnings(inning, match.teams.team1.name, match.teams.team2.name)
      )}
      {match.teams.team2.innings.map((inning, idx) =>
        renderInnings(inning, match.teams.team2.name, match.teams.team1.name)
      )}
    </div>
  );
};

export default MatchDetail;
