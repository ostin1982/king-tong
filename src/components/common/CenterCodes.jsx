import { memo } from "react";

import BoardSandSmall from "./board/BoardSandSmall";

const CenterCodes = () => {
  return (
    <div className="center">
      <h1 className="center__title">activation codes</h1>
      <div className="center__walls">
        <BoardSandSmall>
          <p class="board__text-small">49t567 (23)</p>
          <div class="board__img-squares">
            <img className="img" src={require("../../assets/images/squares.png")} alt="" />
          </div>
        </BoardSandSmall>
        <BoardSandSmall>
          <p class="board__text-small">49t567 (23)</p>
          <div class="board__img-squares">
            <img className="img" src={require("../../assets/images/squares.png")} alt="" />
          </div>
        </BoardSandSmall>
      </div>
    </div>
)}

export default memo(CenterCodes);