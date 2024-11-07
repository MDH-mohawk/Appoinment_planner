import React from "react";
import {Tile} from "../tile/Tile";

export const TileList = ({array}) => {
  return (
    <div>
      {array.map((item,i) => {
        return <Tile key={i} name={item.name} description={{...item}}/>
      })}
    </div>
  );
};
