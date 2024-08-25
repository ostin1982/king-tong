import { memo } from "react";
import { Link } from "react-router-dom";

const ModalCode = ({active, setActive}) => {

  const jumpInput = (x) => {
    const ml = ~~x.getAttribute('maxlength');
    
    if(ml && x.value.length >= ml) {
      do {
        x = x.nextSibling;
      }
      while(x && !(/text/.test(x.type)));

      if(x && /text/.test(x.type)) {
        x.focus();
      }
    }
  }

  return (
    <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)} >
      <div className="modal__card" onClick={event => event.stopPropagation()}>
        <div className="modal__bg">
          <img className="img" src={require("../../../assets/images/bg-modal.png")} alt="" />
        </div>
        <div className="modal__info">
          <h2 className="modal__title">activate you account</h2>
          <form className="modal__form">
            <div className="modal__form-block">
              <div className="modal__form-input">
                <input className="modal__input" type="text" maxlength="1" placeholder="A" onInput={event => jumpInput(event.target)}/>
                <input className="modal__input" type="text" maxlength="1" placeholder="3" onInput={event => jumpInput(event.target)}/>
                <input className="modal__input" type="text" maxlength="1" placeholder="5" onInput={event => jumpInput(event.target)}/>
                <input className="modal__input" type="text" maxlength="1" placeholder="2" onInput={event => jumpInput(event.target)} />
                <input className="modal__input" type="text" maxlength="1" placeholder="1" onInput={event => jumpInput(event.target)} />
              </div>
            <p className="modal__fornm-text">you can get the activation code in our official channel or from friends</p>
            </div>
            <div className="modal__form-box">
              <div className="modal__form-social">
                <p className="modal__fornm-text">our social</p>
                <div className="modal__social">
                  <Link to="/" className="modal__social-link">
                    <img className="img" src={require("../../../assets/images/telegram-modal.png")} alt="" />
                  </Link>
                  <Link to="/" className="modal__social-link">
                    <img className="img" src={require("../../../assets/images/telegram-modal-2.png")} alt="" />
                  </Link>
                  <Link to="/" className="modal__social-link">
                    <img className="img" src={require("../../../assets/images/x-modal.png")} alt="" />
                  </Link>
                </div>
              </div>
              <Link className="modal__button" onClick={() => setActive(false)}>            
                <div className="modal__back-small">
                  <img className="img" src={require("../../../assets/images/btn-green.png")} alt="back" />
                </div>
                <div className="modal__in-button">
                  <p className="modal__text_green">ok</p>
                </div>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
)}

export default memo(ModalCode);