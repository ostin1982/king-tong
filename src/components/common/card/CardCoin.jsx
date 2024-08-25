import { memo } from "react";
import classNames from "classnames";

const CardCoin = ({children, className}) => {
  return (
    <div className="card">
      <div className="card__back">
        <img className="img" src={require("../../../assets/images/card-coin.png")} alt="back" />
      </div>
      <div className={classNames("card__main", className)}>
        { children }
      </div>
    </div>
)}

export default memo(CardCoin);