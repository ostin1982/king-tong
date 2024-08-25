import { memo } from "react";
import { Link } from "react-router-dom"

const ButtonHome = () => {
  return (
    <Link to="/">
      <div className="button-home">
        <img className="img" src={require("../../assets/images/button-home.png")} alt="back" />
      </div>
    </Link>
)}

export default memo(ButtonHome);