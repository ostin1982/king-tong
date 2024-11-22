import { memo, useState, useEffect } from "react";
import classNames from "classnames";

import GameCard from './GameCard';

const GameMain = ({information, playerData}) => {
  const [scrolling, setScrolling] = useState(false);
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    const initialItems = Array.from({ length: 7 }, (_, i) => information[i % information.length]);
    setVisibleItems(initialItems);
  }, [information]);

  const startScrolling = () => {
    if (scrolling) return; 
    setScrolling(true);

    const interval = setInterval(() => {
      setVisibleItems((prev) => {
        const newItems = [...prev.slice(1), information[Math.floor(Math.random() * information.length)]];
        return newItems;
      });
    }, 100);

    setTimeout(() => {
      clearInterval(interval);
      const randomStopIndex = Math.floor(Math.random() * information.length);
      const newItems = [...Array.from({ length: 7 }, (_, i) => information[(randomStopIndex + i) % information.length])];
      setVisibleItems(newItems);
      setScrolling(false);
    }, 1000);
  };

  return(
    <div className="game__center">
      <div className="game__jackpot">
        <div className="game__jackpot-img">
          <img src={require('../../../assets/images/crown.png')} alt="" className="img"/>
        </div>
        <p className="game__jackpot-text">{playerData && playerData.jackpot}</p>
      </div>
      <div className="game__luck">
        <div className="game__win">
          <p className="game_win-text">{playerData && playerData.win && 'WIN'}</p>
          <p className="game_win-text">{playerData && playerData.win}</p>
        </div>
        <div className="game__wheel">
          <div className="game__wheel-cards">
          {visibleItems.map((item, index) => {
            const {imageBg, imageIcon, classIcon, classZero, number} = item;
            return (
              <GameCard key={index} className={classNames(`gameCard_slot ${scrolling ? 'gameCard_scrolling' : ''}`)}>
                <div className="gameCard__bg">
                  <img src={imageBg} alt="" className="img"/>
                </div>
                <div className="gameCard__info">
                  <div className={classNames(classIcon)}>
                    <img src={imageIcon} alt="" className="img"/>
                  </div>
                  <div className="gameCard__winning">
                    <p className={classNames("gameCard__text", classZero)}>{number}</p>
                  </div>
                </div>
              </GameCard>
            )
          })}
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
      <button className="game__spin-button" onClick={startScrolling} disabled={scrolling}>
        <div className="game__spin-button-img">
          <img src={require('../../../assets/images/button.png')} alt="" className="img"/>
        </div>
        <div className="game__spin-button-block">
          <p className="game__spin-button-text">spin</p>
        </div>
      </button>
    </div>
  )
}

export default memo(GameMain);
