import { memo } from "react";
import classNames from "classnames";

const CardStore = ({children}) => {
  return (
    <div className="card">
      <div className="card__back">
        <img className="img" src={require("../../../assets/images/card-mushrooms.png")} alt="back" />
      </div>
      <div className={classNames("card__main", classNames)}>
        { children }
      </div>
    </div>
)}

export default memo(CardStore);