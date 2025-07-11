import React from 'react';

const Player = ({ player }) => {
  if (player.dnb) {
    return (
      <div className="player-card">
        <strong>{player.name}</strong> - <em>DNB</em>
      </div>
    );
  }

  return (
    <div className="player-card">
      <strong>{player.name}</strong><br />
      Runs: {player.runs} | Balls: {player.balls} | 4s: {player.fours} | 6s: {player.sixes}
    </div>
  );
};

export default Player;
