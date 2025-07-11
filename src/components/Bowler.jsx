import React from 'react';

const Bowler = ({ bowler }) => {
  return (
    <div className="player-card">
      <strong>{bowler.name}</strong><br />
      Overs: {bowler.overs} | Maidens: {bowler.maidens} | Runs: {bowler.runs} | Wickets: {bowler.wickets}
    </div>
  );
};

export default Bowler;
