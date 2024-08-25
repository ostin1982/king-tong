import { memo } from "react"

const Header = () => {
  return (
    <header className="header">
      <div className="header__block">
        <div className="header__back">
          <img className="img" src={require("../../assets/images/imag-back-1.png")} alt="back" />
        </div>
        <div className="header__icon">
          <img className="img" src={require("../../assets/images/coin-1.png")} alt="back" />
        </div>
        <p className="header__text">12 444 555 555</p>
      </div>
      <div className="header__block">
        <div className="header__back">
          <img className="img" src={require("../../assets/images/imag-back-2.png")} alt="back" />
        </div>
        <div className="header__icon">
          <img className="img" src={require("../../assets/images/coin-2.png")} alt="back" />
        </div>
        <p className="header__text">555 555</p>
      </div>
      <div className="header__block">
        <div className="header__back">
          <img className="img" src={require("../../assets/images/imag-back-3.png")} alt="back" />
        </div>
        <div className="header__icon">
          <img className="img" src={require("../../assets/images/coin-3.png")} alt="back" />
        </div>
        <p className="header__text">55 555</p>
      </div>
    </header>
  )
};

export default memo(Header);
