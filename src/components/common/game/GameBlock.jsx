import { memo } from "react";
import { Link } from "react-router-dom";

import BoardGameLeft from "../board/BoardGameLeft";
import BoardGameRight from "../board/BoardGameRight";
import GameCard from "./GameCard";

const GameBlock = () => {
  return (
    <div className="game">
      <div className="game__left">
        <div className="game__level">
          <div className="game__level-block">
            <div className="game__level-img">
              <img className="img" src={require("../../../assets/images/level.png")} alt="back" />
            </div>
            <p className="game__level-text">3</p>
          </div>
        </div>
        <BoardGameLeft className="game__board-left">
          <Link to="/" className="game__link">
            <div className="game__back-left">
              <img className="img" src={require("../../../assets/images/map.png")} alt="back" />
            </div>
            <p className="game__text">карта</p>
          </Link>
        </BoardGameLeft>
        <BoardGameLeft className="game__board-left">
          <Link to="/" className="game__link">
            <div className="game__back-left">
              <img className="img" src={require("../../../assets/images/shop.png")} alt="back" />
            </div>
            <p className="game__text">магазин</p>
          </Link>
        </BoardGameLeft>
      </div>
      <div className="game__center">
        <div className="game__jackpot">
          <div className="game__jackpot-img">
            <img src={require('../../../assets/images/crown.png')} alt="" className="img"/>
          </div>
          <p className="game__jackpot-text">90 000 000</p>
        </div>
        <div className="game__luck">
          <div className="game__win">
            <p className="game_win-text">WIN</p>
            <p className="game_win-text">124 777</p>
          </div>
          <div className="game__wheel">
            <div className="game__wheel-cards">
              <GameCard>
                <div className="gameCard__bg">
                  <img src={require('../../../assets/images/yellow-bg.png')} alt="" className="img"/>
                </div>
                <div className="gameCard__info">
                  <div className="gameCard__icon">
                    <img src={require('../../../assets/images/coin-4.png')} alt="" className="img"/>
                  </div>
                  <div className="gameCard__winning">
                    <p className="gameCard__text">1000</p>
                    <p className="gameCard__text">X</p>
                  </div>
                </div>
              </GameCard>
              <GameCard>
                <div className="gameCard__bg">
                  <img src={require('../../../assets/images/blue-bg.png')} alt="" className="img"/>
                </div>
                <div className="gameCard__info">
                  <div className="gameCard__icon">
                    <img src={require('../../../assets/images/coin-5.png')} alt="" className="img"/>
                  </div>
                  <div className="gameCard__winning">
                    <p className="gameCard__text">2000</p>
                    <p className="gameCard__text">X</p>
                  </div>
                </div>
              </GameCard>
              <GameCard>
                <div className="gameCard__bg">
                  <img src={require('../../../assets/images/win-bg.png')} alt="" className="img"/>
                </div>
                <div className="gameCard__info">
                  <div className="gameCard__icon-win">
                    <img src={require('../../../assets/images/crown-win.png')} alt="" className="img"/>
                  </div>
                </div>
              </GameCard>
              <GameCard>
                <div className="gameCard__bg">
                  <img src={require('../../../assets/images/red-bg.png')} alt="" className="img"/>
                </div>
                <div className="gameCard__info">
                  <div className="gameCard__winning">
                    <p className="gameCard__text gameCard__text_big">0</p>
                  </div>
                </div>
              </GameCard>
              <GameCard>
                <div className="gameCard__bg">
                  <img src={require('../../../assets/images/violet-bg.png')} alt="" className="img"/>
                </div>
                <div className="gameCard__info">
                  <div className="gameCard__icon">
                    <img src={require('../../../assets/images/coin-6.png')} alt="" className="img"/>
                  </div>
                  <div className="gameCard__winning">
                    <p className="gameCard__text">1000</p>
                    <p className="gameCard__text">X</p>
                  </div>
                </div>
              </GameCard>
            </div>
            <div className="game__indicator">
              <img src={require('../../../assets/images/indicator.png')} alt="" className="img"/>
            </div>
          </div>
          <div className="game__info">
            <div className="game__info-blue">
              <img src={require('../../../assets/images/blue-game-background.png')} alt="" className="img"/>
            </div>
            <div className="game__info-top">
              <div className="game__info-light">
                <img src={require('../../../assets/images/light-game-background.png')} alt="" className="img"/>
                <div className="game__data">
                  <div className="game__lightning">
                    <img src={require('../../../assets/images/purple-lightning.png')} alt="" className="img"/>
                  </div>
                  <div className="game__data-text">
                    <p className="game__data-title">X</p>
                    <p className="game__data-title">1000</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="game__middle">
              <div className="game__progress">
                <div className="game__middle-grey">
                  <img src={require('../../../assets/images/gray-game-background.png')} alt="" className="img"/>
                </div>
                <div className="game__middle-color" style={{left: "calc(-141px + 42*(141px/50))"}}>
                  <img src={require('../../../assets/images/violet-game-background.png')} alt="" className="img"/>
                </div>
              </div>
              <div className="game__middle-data">
                <p className="game__middle-text">42</p>
                <p className="game__middle-text">/</p>
                <p className="game__middle-text">50</p>
              </div>
            </div>
            <div className="game__bottom">
              <p className="game__bottom-text">5</p>
              <p className="game__bottom-text">spin  in</p>
              <p className="game__bottom-text">10:33:45</p>
            </div>
          </div>
        </div>
        <button className="game__spin-button">
          <div className="game__spin-button-img">
            <img src={require('../../../assets/images/button.png')} alt="" className="img"/>
          </div>
          <div className="game__spin-button-block">
            <p className="game__spin-button-text">spin</p>
          </div>
        </button>
      </div>
      <div className="game__right">
        <BoardGameRight className="game__board-right">
          <Link to="/settings" className="game__link">
            <div className="game__back">
              <img className="img" src={require("../../../assets/images/configuration.png")} alt="back" />
            </div>
            <p className="game__text game__text_white">настройки</p>
          </Link>
        </BoardGameRight>
        <BoardGameRight className="game__board-right">
          <Link to="/quesrs" className="game__link">
            <div className="game__back">
              <img className="img" src={require("../../../assets/images/book.png")} alt="back" />
            </div>
            <p className="game__text game__text_white">квесты</p>
          </Link>
        </BoardGameRight>
        <BoardGameRight className="game__board-right">
          <Link to="/store" className="game__link">
            <div className="game__back">
              <img className="img" src={require("../../../assets/images/raccoon.png")} alt="back" />
            </div>
            <p className="game__text game__text_white">пригласить</p>
          </Link>
        </BoardGameRight>
      </div>
    </div>
)}

export default memo(GameBlock);