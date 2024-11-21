import { memo, useState, useEffect } from "react";

import BackMain from "./common/back/BackMain";
import Header from "./common/Header";
import GameBlock from "./common/game/GameBlock";
import ModalCode from "./common/modal/ModalCode";
import axios from 'axios'

const HOST = "http://localhost:10000"
const BASE_URL = HOST + "/api/v1"

const GameCardInfo = [
  {
    imageBg: require('../assets/images/yellow-bg.png'),
    imageIcon: require('../assets/images/coin-4.png'),
    number: '1000 X',
    classIcon: 'gameCard__icon',
    id: 1,
    pos: 1,
    active: true,
  },
  {
    imageBg: require('../assets/images/blue-bg.png'),
    imageIcon: require('../assets/images/coin-4.png'),
    number: '2000 X',
    classIcon: 'gameCard__icon',
    id: 2,
    pos: 2,
    active: true,
  },
  {
    imageBg: require('../assets/images/win-bg.png'),
    imageIcon: require('../assets/images/crown-win.png'),
    classIcon: 'gameCard__icon-win',
    id: 3,
    pos: 3,
    active: true,
  },
  {
    imageBg: require('../assets/images/red-bg.png'),
    number: '0',
    classZero: 'gameCard__text_big',
    classIcon: 'gameCard__icon_none',
    id: 4,
    pos: 4,
    active: true,
  },
  {
    imageBg: require('../assets/images/violet-bg.png'),
    imageIcon: require('../assets/images/coin-6.png'),
    number: '1000 X',
    classIcon: 'gameCard__icon',
    id: 5,
    pos: 5,
    active: true,
  },
  { 
    imageBg: require('../assets/images/yellow-bg.png'),
    imageIcon: require('../assets/images/coin-4.png'),
    number: '500 X',
    classIcon: 'gameCard__icon',
    id: 6,
    pos: 6,
    active: false,
  },
  {
    imageBg: require('../assets/images/yellow-bg.png'),
    imageIcon: require('../assets/images/coin-4.png'),
    number: '2500 X',
    classIcon: 'gameCard__icon',
    id: 7,
    pos: 7,
    active: false,
  },
];

const HomeScreen = () => {
  
  const [modalActive, setModalActive] = useState(true);

  useEffect(() => {

    let authDtoRequest = {
                  data: "user=%7B%22id%22%3A308131758%2C%22first_name%22%3A%22ALEX%22%2C%22last_name%22%3A%22IVANNIKOV.PRO%22%2C%22username%22%3A%22ivannikovPro%22%2C%22language_code%22%3A%22ru%22%2C%22allows_write_to_pm%22%3Atrue%7D&chat_instance=-1857114464680496286&chat_type=private&auth_date=1716232213&hash=7d31991a605ab5e265b40ebbccc09c28bfb59366d2ac5cee9ca288c24a2ed3c3",
                  promo: "RHCDD"
              };

    axios.post(BASE_URL + '/auth', authDtoRequest, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      console.log(response);
      if (response.data.active === true) setModalActive(false);
    })
    .catch((error) => {
      console.log(error);
    });
  }, []);

  return (
    <main className="main" >
      <div className="wrapper wrapper_start">
        <BackMain />
        <Header />
        <GameBlock items={GameCardInfo} />
      </div>
      <ModalCode active={modalActive} setActive={setModalActive}/>
    </main>
  );
}

export default memo(HomeScreen);