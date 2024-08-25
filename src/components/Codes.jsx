import { memo } from "react";

import Back from "./common/back/Back";
import Header from "./common/Header";
import ButtonHome from "./common/ButtonHome";
import CenterCodes from "./common/CenterCodes";


const Codes = () => {
  return (
    <main className="main">
      <div className="wrapper">
        <Back />
        <Header />
        <CenterCodes />
        <ButtonHome />
      </div>
    </main>
  );
}

export default memo(Codes);