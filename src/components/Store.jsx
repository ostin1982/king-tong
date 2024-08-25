import { memo } from "react";

import Back from "./common/back/Back";
import Header from "./common/Header";
import ButtonHome from "./common/ButtonHome";
import CenterStore from "./common/CenterStore";


const Store = () => {
  return (
    <main className="main">
      <div className="wrapper">
        <Back />
        <Header />
        <CenterStore />
        <ButtonHome />
      </div>
    </main>
  );
}

export default memo(Store);