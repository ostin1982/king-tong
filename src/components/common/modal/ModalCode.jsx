import { memo, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import AppConfig from "../../config/AppConfig";

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

  const [inputs, setInputs] = useState(['', '', '', '', '']); 

  const handleChange = (index, value) => {
    const newInputs = [...inputs];
    newInputs[index] = value.toUpperCase();
    setInputs(newInputs);
  };

  const handleSubmit = async() => {
    const promoCode = inputs.join('')
    let authDtoRequest = {
      data: "user=%7B%22id%22%3A308131758%2C%22first_name%22%3A%22ALEX%22%2C%22last_name%22%3A%22IVANNIKOV.PRO%22%2C%22username%22%3A%22ivannikovPro%22%2C%22language_code%22%3A%22ru%22%2C%22allows_write_to_pm%22%3Atrue%7D&chat_instance=-1857114464680496286&chat_type=private&auth_date=1716232213&hash=7d31991a605ab5e265b40ebbccc09c28bfb59366d2ac5cee9ca288c24a2ed3c3",
      promo: promoCode
  };

    try {
      const response = await axios.post(AppConfig.BASE_URL + '/auth', authDtoRequest, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      console.log("active -> " + response.data.active);
      if (response.data.active === true) {
        setActive(false);
        if (response.data.token !== null && response.data.token !== "") {
          localStorage.setItem('jwt-token', response.data.token)
        };
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={active === 'false' ? "modal active" : "modal"} >
      <div className="modal__card" onClick={event => event.stopPropagation()}>
        <div className="modal__bg">
          <img className="img" src={require("../../../assets/images/bg-modal.png")} alt="" />
        </div>
        <div className="modal__info">
          <h2 className="modal__title">activate you account</h2>
          <form className="modal__form">
            <div className="modal__form-block">
              <div className="modal__form-input">
                <input className="modal__input" type="text" maxLength="1" placeholder="A" 
                  onInput={event => {
                    handleChange(0, event.target.value);
                    jumpInput(event.target)}
                }/>
                <input className="modal__input" type="text" maxLength="1" placeholder="3" 
                  onInput={event => {
                    handleChange(1, event.target.value);
                    jumpInput(event.target)}
                }/>
                <input className="modal__input" type="text" maxLength="1" placeholder="5" 
                  onInput={event => {
                    handleChange(2, event.target.value);
                    jumpInput(event.target)}
                }/>
                <input className="modal__input" type="text" maxLength="1" placeholder="2" 
                  onInput={event => {
                    handleChange(3, event.target.value);
                    jumpInput(event.target)}
                }/>
                <input className="modal__input" type="text" maxLength="1" placeholder="1" 
                  onInput={event => {
                    handleChange(4, event.target.value);
                    jumpInput(event.target)}
                }/>
              </div>
            <p className="modal__form-text">you can get the activation code in our official channel or from friends</p>
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
              <Link className="modal__button" onClick={() => {
                  handleSubmit()
                }
              }>            
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