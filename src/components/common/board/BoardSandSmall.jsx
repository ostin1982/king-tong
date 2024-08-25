import { memo } from "react";

const BoardSandSmall = ({children}) => {
  return (
    <div className="board__small">
      <div className="board__back">
        <img className="img" src={require("../../../assets/images/board-sand-small.png")} alt="back" />
      </div>
      <div className="board__card">
        { children }
      </div>
    </div>
)}

export default memo(BoardSandSmall);