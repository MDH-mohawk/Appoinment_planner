import React from "react";

export const Tile = ({name,description}) => {
  const array = Object.values(description)
  return (
    <div className="tile-container">
      <p className="tile-title">{name}</p>
      {array.map((item,i) =>
        <p  key={i} className="tile">{item}</p>
      )}
    </div>
  );
};
