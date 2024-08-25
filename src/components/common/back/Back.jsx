import { memo } from "react";

const Back = () => {
  return (
    <div className="back">
      <img className="img" src={require("../../../assets/images/back.png")} alt="back" />
    </div>
)}

export default memo(Back);