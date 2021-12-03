import React from "react";

export default function Title({ titre, alternative, icone}) {
  return (
    <div className="card">
      <img
        class="iconWidg"
        src={icone}
        width="50px"
        height="50px"
        alt={alternative}
      />
      <h3>{titre}</h3>
    </div>
  );
}