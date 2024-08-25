import { memo } from "react";

const BoardSand = ({children}) => {
  return (
    <div className="board">
      <div className="board__back">
        <img className="img" src={require("../../../assets/images/board-sand.png")} alt="back" />
      </div>
      <div className="board__card">
        { children }
      </div>
    </div>
)}

export default memo(BoardSand);