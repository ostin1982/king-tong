import { memo } from "react";
import { Link } from "react-router-dom";

import BoardGameLeft from "../board/BoardGameLeft";
import BoardGameRight from "../board/BoardGameRight";
import GameMain from "./GameMain";

const GameBlock = ({items, playerData}) => {
  return (
    <div className="game">
      <div className="game__big">
        <div className="game__big-line">
          <div className="game__level">
            <div className="game__level-block">
              <div className="game__level-img">
                <img className="img" src={require("../../../assets/images/level.png")} alt="back" />
              </div>
              <p className="game__level-text">3</p>
            </div>
          </div>
          <BoardGameRight className="game__board-right">
            <Link to="/settings" className="game__link">
              <div className="game__back">
                <img className="img" src={require("../../../assets/images/configuration.png")} alt="back" />
              </div>
              <p className="game__text game__text_white">настройки</p>
            </Link>
          </BoardGameRight>
        </div>
        <div className="game__big-line">
          <BoardGameLeft className="game__board-left">
            <Link to="/" className="game__link">
              <div className="game__back-left">
                <img className="img" src={require("../../../assets/images/map.png")} alt="back" />
              </div>
              <p className="game__text">карта</p>
            </Link>
          </BoardGameLeft>
          <BoardGameRight className="game__board-right">
            <Link to="/quesrs" className="game__link">
              <div className="game__back">
                <img className="img" src={require("../../../assets/images/book.png")} alt="back" />
              </div>
              <p className="game__text game__text_white">квесты</p>
            </Link>
          </BoardGameRight>
        </div>
        <div className="game__big-line">
          <BoardGameLeft className="game__board-left">
            <Link to="/" className="game__link">
              <div className="game__back-left">
                <img className="img" src={require("../../../assets/images/shop.png")} alt="back" />
              </div>
              <p className="game__text">магазин</p>
            </Link>
          </BoardGameLeft>
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

    <GameMain information={items} playerData={playerData}/>

    </div>
)}

export default memo(GameBlock);