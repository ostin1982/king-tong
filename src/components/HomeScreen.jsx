import { memo, useState } from "react";

import BackMain from "./common/back/BackMain";
import Header from "./common/Header";
import GameBlock from "./common/game/GameBlock";
import ModalCode from "./common/modal/ModalCode";

const HomeScreen = () => {
  const [modalActive, setModalActive] = useState(true);

  return (
    <main className="main" >
      <div className="wrapper wrapper_start">
        <BackMain />
        <Header />
        <GameBlock />
      </div>
      <ModalCode active={modalActive} setActive={setModalActive}/>
    </main>
  );
}

export default memo(HomeScreen);