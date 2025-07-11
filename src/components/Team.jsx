import React from 'react';
import Player from './Player.jsx';

const Team = ({ teamName, players }) => {
  return (
    <div className="team-section">
      <h3>{teamName} Batting</h3>
      {players.map((player, index) => (
        <Player key={index} player={player} />
      ))}
    </div>
  );
};

export default Team;
