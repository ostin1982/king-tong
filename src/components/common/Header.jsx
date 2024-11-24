import { memo } from "react"

const Header = ({playerData}) => {
  return (
    <header className="header">
      <div className="header__block header__block_right">
        <div className="header__back">
          <img className="img" src={require("../../assets/images/imag-back-1.png")} alt="back" />
        </div>
        <div className="header__icon">
          <img className="img" src={require("../../assets/images/coin-1.png")} alt="back" />
        </div>
        <p className="header__text">{playerData === null ? '0' : playerData && playerData.coin}</p>
      </div>
      <div className="header__block header__block_center">
        <div className="header__back">
          <img className="img" src={require("../../assets/images/imag-back-2.png")} alt="back" />
        </div>
        <div className="header__icon">
          <img className="img" src={require("../../assets/images/coin-2.png")} alt="back" />
        </div>
        <p className="header__text">{playerData === null ? '0' : playerData && playerData.spin}</p>
      </div>
      <div className="header__block header__block_left">
        <div className="header__back">
          <img className="img" src={require("../../assets/images/imag-back-3.png")} alt="back" />
        </div>
        <div className="header__icon">
          <img className="img" src={require("../../assets/images/coin-3.png")} alt="back" />
        </div>
        <p className="header__text">{playerData === null ? '0' : playerData && playerData.ton}</p>
      </div>
    </header>
  )
};

export default memo(Header);
