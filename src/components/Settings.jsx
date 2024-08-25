import { memo } from "react";

import Back from "./common/back/Back";
import Header from "./common/Header";
import CenterSettings from "./common/CenterSettings";
import ButtonHome from "./common/ButtonHome";


const Settings = () => {
  return (
    <main className="main">
      <div className="wrapper">
        <Back />
        <Header />
        <CenterSettings />
        <ButtonHome />
      </div>
    </main>
  );
}

export default memo(Settings);