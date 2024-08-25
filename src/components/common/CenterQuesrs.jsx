import { memo } from "react";
import { Link } from "react-router-dom";

import BoardSand from "./board/BoardSand";
import BoardBlue from "./board/BoardBlue";

const CenterQuesrs = () => {
  return (
    <div className="center">
      <h1 className="center__title">Quests</h1>
      <div className="center__walls">
        <BoardSand>
          <div className="board__left">
            <img className="img" src={require("../../assets/images/telegram.png")} alt="back" />
          </div>
          <div className="board__center">
            <p className="board__text board__text_white">Subscribe to king tong twitter</p>
            <p className="board__text board__text_blue">+50 spins</p>
          </div>
          <Link to="/" className="board__right">
            <div className="board__back-small">
              <img className="img" src={require("../../assets/images/btn-green.png")} alt="back" />
            </div>
            <div className="board__in-button">
              <p className="board__text_green">claim</p>
            </div>
          </Link>
        </BoardSand>
        <BoardSand>
          <div className="board__left">
            <img className="img" src={require("../../assets/images/x.png")} alt="back" />
          </div>
          <div className="board__center">
            <p className="board__text board__text_white">Subscribe to king tong twitter</p>
            <p className="board__text board__text_blue">+50 spins</p>
          </div>
          <Link to="/" className="board__right">
            <div className="board__back-small">
              <img className="img" src={require("../../assets/images/btn-blue.png")} alt="back" />
            </div>
            <div className="board__in-button">
              <p className="board__text_cyan">start</p>
            </div>
          </Link>
        </BoardSand>
        <BoardSand>
          <div className="board__left">
            <img className="img" src={require("../../assets/images/telegram.png")} alt="back" />
          </div>
          <div className="board__center">
            <p className="board__text board__text_white">Subscribe to king tong twitter</p>
            <p className="board__text board__text_blue">+50 spins</p>
          </div>
          <div className="board__right">
            <div className="board__back-small">
              <img className="img" src={require("../../assets/images/btn-gray.png")} alt="back" />
            </div>
            <div className="board__in-button board__in-button_round">
              <div className="board__round"></div>
              <div className="board__round"></div>
              <div className="board__round"></div>
            </div>
          </div>
        </BoardSand>
        <BoardBlue>
          <div className="board__left">
            <img className="img" src={require("../../assets/images/telegram.png")} alt="back" />
          </div>
          <div className="board__center">
            <p className="board__text board__text_white">Subscribe to king tong twitter</p>
            <p className="board__text board__text_blue">+50 spins</p>
          </div>
          <div className="board__right board__right_check">
            <div className="board__check">
              <img className="img" src={require("../../assets/images/check.png")} alt="back" />
            </div>
          </div>
        </BoardBlue>
      </div>
    </div>
)};

export default memo(CenterQuesrs);