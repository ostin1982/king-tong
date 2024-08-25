import { memo } from "react";

const GameCard = ({children, className}) => {
  return (
    <div className="gameCard">
      {children}
    </div>
)}

export default memo(GameCard);