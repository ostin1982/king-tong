import { memo } from "react";
import classNames from "classnames";

const BoardGameLeft = ({children, className}) => {
  return (
    <div className={classNames("board__game", className)}>
      <div className="board__back">
        <img className="img" src={require("../../../assets/images/blue-background-left.png")} alt="back" />
      </div>
      <div className="board__card-game">
        { children }
      </div>
    </div>
)}

export default memo(BoardGameLeft);