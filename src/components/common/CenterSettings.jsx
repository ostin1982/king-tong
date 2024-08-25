import { memo } from "react";
import { Link } from "react-router-dom";

import Music from '../../assets/images/icon/music.svg';
import Sound from '../../assets/images/icon/sound.svg';
import Garbage from '../../assets/images/icon/garbage-barrels.svg';
import BoardSandSmall from "./board/BoardSandSmall";

const CenterSettings = () => {
  return (
    <div className="center">
      <div className="settings">
        <div className="settings__main">
          <p className="center__title">settings</p>
          <div className="settings__top">
            <div className="settings__top-item">
              <div className="settings__info">
                <div className="settings__image">
                  <img src={Music} alt="" className="img"/>
                </div>
                <p className="center__title">music</p>
              </div>
              <div class="toggle-button-cover">
                <div class="button-cover">
                  <div class="button b2 switch">
                    <input type="checkbox" class="checkbox" />
                    <div class="knobs">
                      <span></span>
                    </div>
                    <div class="layer"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="settings__top-item">
              <div className="settings__info">
                <div className="settings__image">
                  <img src={Sound} alt="" className="img"/>
                </div>
                <p className="center__title">sound</p>
              </div>
              <div class="toggle-button-cover">
                <div class="button-cover">
                  <div class="button b2 switch">
                    <input type="checkbox" class="checkbox" />
                    <div class="knobs">
                      <span></span>
                    </div>
                    <div class="layer"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="settings__block">
          <p className="center__title">Language:</p>
          <div className="settings__radio">
            <label className="custom-label"> 
              <input type="radio" id="1" name="interest" value="coding" className="custom-input"/>
              <span className="text-label">Russian</span>
            </label>
            <label className="custom-label"> 
              <input type="radio" id="2" name="interest" value="coding" className=" custom-input"/>
              <span className="text-label">English</span>
            </label>
          </div>
        </div>
        <div className="settings__block">
          <p className="center__title">Wallets:</p>
          <div className="settings__board">
            <BoardSandSmall>
              <div className="settings__big">
                <div className="settings__left">
                  <img className="img" src={require("../../assets/images/wallet.png")} alt="back" />
                </div>
                <div className="settings__center">
                  <p className="settings__text">у вас нет привязанных кошельков</p>
                </div>
              </div>
              <Link to="/" className="setting__right">
                <div className="setting__back-small">
                  <img className="img" src={require("../../assets/images/btn-green.png")} alt="back" />
                </div>
                <div className="setting__in-button">
                  <p className="setting__text_green">claim</p>
                </div>
              </Link>
            </BoardSandSmall>
            <BoardSandSmall>
              <div className="settings__big">
                <div className="settings__left">
                    <img className="img" src={require("../../assets/images/wallet.png")} alt="back" />
                  </div>
                  <div className="settings__center">
                    <p className="settings__text-big">Wallet</p>
                  </div>
                </div>
                <Link to="/" className="setting__right">
                  <div className="setting__back-garbage">
                    <img className="img" src={Garbage} alt="back" />
                  </div>
                </Link>
            </BoardSandSmall>
          </div>
        </div>
      </div>
    </div>
)}

export default memo(CenterSettings);