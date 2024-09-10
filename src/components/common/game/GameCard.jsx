import { memo } from "react";
import classNames from "classnames";

const GameCard = ({children, className}) => {
  return (
    <div className={classNames("gameCard", className)}>
      {children}
    </div>
)}

export default memo(GameCard);