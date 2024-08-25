import { memo } from "react";

const BackMain = () => {
  return (
    <div className="back">
      <img className="img" src={require("../../../assets/images/egypt-back.png")} alt="back" />
    </div>
)};

export default memo(BackMain);