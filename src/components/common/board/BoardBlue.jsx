import { memo } from "react"

const BoardBlue = ({children}) => {
  return (
    <div className="board">
      <div className="board__back">
        <img className="img" src={require("../../../assets/images/board-blue.png")} alt="back" />
      </div>
      <div className="board__card board__card_everything">
        { children }
      </div>
    </div>
)};

export default memo(BoardBlue);