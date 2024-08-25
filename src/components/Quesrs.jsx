import { memo } from "react";

import Back from "./common/back/Back";
import Header from "./common/Header";
import CenterQuesrs from "./common/CenterQuesrs";
import ButtonHome from "./common/ButtonHome";


const Quests = () => {
  return (
    <main className="main">
      <div className="wrapper">
        <Back />
        <Header />
        <CenterQuesrs />
        <ButtonHome />
      </div>
    </main>
  );
}

export default memo(Quests);