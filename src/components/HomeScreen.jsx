import { memo, useState } from "react";

import BackMain from "./common/back/BackMain";
import Header from "./common/Header";
import GameBlock from "./common/game/GameBlock";
import ModalCode from "./common/modal/ModalCode";

const GameCardInfo = [
  {
    imageBg: require('../assets/images/yellow-bg.png'),
    imageIcon: require('../assets/images/coin-4.png'),
    number: '1000 X',
    classIcon: 'gameCard__icon',
    id: 1,
    pos: 1,
    active: true
  },
  {
    imageBg: require('../assets/images/blue-bg.png'),
    imageIcon: require('../assets/images/coin-4.png'),
    number: '2000 X',
    classIcon: 'gameCard__icon',
    id: 2,
    pos: 2,
    active: true
  },
  {
    imageBg: require('../assets/images/win-bg.png'),
    imageIcon: require('../assets/images/crown-win.png'),
    classIcon: 'gameCard__icon-win',
    id: 3,
    pos: 3,
    active: true
  },
  {
    imageBg: require('../assets/images/red-bg.png'),
    number: '0',
    classZero: 'gameCard__text_big',
    classIcon: 'gameCard__icon_none',
    id: 4,
    pos: 4,
    active: true
  },
  {
    imageBg: require('../assets/images/violet-bg.png'),
    imageIcon: require('../assets/images/coin-6.png'),
    number: '1000 X',
    classIcon: 'gameCard__icon',
    id: 5,
    pos: 5,
    active: true
  },
  {
    imageBg: require('../assets/images/yellow-bg.png'),
    imageIcon: require('../assets/images/coin-4.png'),
    number: '2500 X',
    classIcon: 'gameCard__icon',
    id: 6,
    pos: 6,
    active: false
  },
  {
    imageBg: require('../assets/images/yellow-bg.png'),
    imageIcon: require('../assets/images/coin-4.png'),
    number: '100 X',
    classIcon: 'gameCard__icon',
    id: 7,
    pos: 7,
    active: false
  },
];

const HomeScreen = () => {
  const [modalActive, setModalActive] = useState(true);

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