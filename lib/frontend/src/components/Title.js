import React from "react";

// set the title of the dashboard
export default function Title({ titre, alternative, icone }) {
  return (
    <div className="card">
      <img
        className="iconWidg"
        src={icone}
        width="50px"
        height="50px"
        alt={alternative}
      />
      <h3>{titre}</h3>
    </div>
  );
}
