import { memo } from "react";

import CardStore from "./card/CardStore";
import CardCoin from "./card/CardCoin";

const CenterStore = () => {
  return (
    <div className="spins">
      <div className="spins__block">
          <h1 className="spins__title">Spins</h1>
        <div className="spins__box">
          <CardStore >
            <p className="card__spin">25</p>
            <div className="card_bottom">
              <p className="card__extra">25 extra</p>
              <div className="card__stars">
                <p className="card__star">50</p>
                <div className="card__img">
                  <img src={require("../../assets/images/star.png")} alt="" className="img"/>
                </div>
              </div>
            </div>
          </CardStore>
          <CardStore >
            <p className="card__spin">70</p>
              <div className="card_bottom">
                <p className="card__extra">25 extra</p>
                <div className="card__stars">
                  <p className="card__star">500</p>
                  <div className="card__img">
                    <img src={require("../../assets/images/star.png")} alt="" className="img"/>
                  </div>
                </div>
              </div>
          </CardStore>
          <CardStore >
          <p className="card__spin">70</p>
              <div className="card_bottom">
                <p className="card__extra">25 extra</p>
                <div className="card__stars">
                  <p className="card__star">5000</p>
                  <div className="card__img">
                    <img src={require("../../assets/images/star.png")} alt="" className="img"/>
                  </div>
                </div>
              </div>
          </CardStore>
          <CardStore >
            <p className="card__spin">25</p>
            <div className="card_bottom">
              <p className="card__extra">25 extra</p>
              <div className="card__stars">
                <p className="card__star">50</p>
                <div className="card__img">
                  <img src={require("../../assets/images/star.png")} alt="" className="img"/>
                </div>
              </div>
            </div>
          </CardStore>
          <CardStore >
            <p className="card__spin">70</p>
              <div className="card_bottom">
                <p className="card__extra">25 extra</p>
                <div className="card__stars">
                  <p className="card__star">500</p>
                  <div className="card__img">
                    <img src={require("../../assets/images/star.png")} alt="" className="img"/>
                  </div>
                </div>
              </div>
          </CardStore>
          <CardStore >
          <p className="card__spin">200</p>
              <div className="card_bottom">
                <p className="card__extra">25 extra</p>
                <div className="card__stars">
                  <p className="card__star">50 000</p>
                  <div className="card__img">
                    <img src={require("../../assets/images/star.png")} alt="" className="img"/>
                  </div>
                </div>
              </div>
          </CardStore>
        </div>
      </div>
      <div className="spins__block">
          <h1 className="spins__title">Coins</h1>
        <div className="spins__box">
          <CardCoin className="card__main_gap" >
            <p className="card__coins">70k</p>
            <div className="card__stars">
              <p className="card__star">50</p>
              <div className="card__img">
                <img src={require("../../assets/images/star.png")} alt="" className="img"/>
              </div>
            </div>
          </CardCoin>
          <CardCoin className="card__main_gap" >
            <p className="card__coins">70k</p>
            <div className="card__stars">
              <p className="card__star">50</p>
              <div className="card__img">
                <img src={require("../../assets/images/star.png")} alt="" className="img"/>
              </div>
            </div>
          </CardCoin>
          <CardCoin className="card__main_gap" >
            <p className="card__coins">70k</p>
            <div className="card__stars">
              <p className="card__star">50</p>
              <div className="card__img">
                <img src={require("../../assets/images/star.png")} alt="" className="img"/>
              </div>
            </div>
          </CardCoin>
          <CardCoin className="card__main_gap" >
            <p className="card__coins">70k</p>
            <div className="card__stars">
              <p className="card__star">50</p>
              <div className="card__img">
                <img src={require("../../assets/images/star.png")} alt="" className="img"/>
              </div>
            </div>
          </CardCoin>
          <CardCoin className="card__main_gap" >
            <p className="card__coins">70k</p>
            <div className="card__stars">
              <p className="card__star">50</p>
              <div className="card__img">
                <img src={require("../../assets/images/star.png")} alt="" className="img"/>
              </div>
            </div>
          </CardCoin>
          <CardCoin className="card__main_gap" >
            <p className="card__coins">70k</p>
            <div className="card__stars">
              <p className="card__star">50</p>
              <div className="card__img">
                <img src={require("../../assets/images/star.png")} alt="" className="img"/>
              </div>
            </div>
          </CardCoin>
        </div>
      </div>
      
    </div>
)}

export default memo(CenterStore);