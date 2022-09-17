import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addRequest } from "../../features/requestSlice";
import "./reques.css";
import Headerform from "./headerform";
import Header from "../../components/Header/Header";

const RequestForm = () => {
  const dispatch = useDispatch();

  const [car, setCar] = useState("");
  const [user, setUser] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [kg, setKg] = useState("");
  const [price, setPrice] = useState("");
  const [step, setStep] = useState(0);

  const handleStep = () => {
    setStep(step);
  };

  const handleCar = (e) => {
    setCar(e.target.value);
  };
  const handleUser = (e) => {
    setUser(e.target.value);
  };
  const handlePhone = (e) => {
    setPhone(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleKg = (e) => {
    setKg(e.target.value);
  };
  const handlePrice = (e) => {
    setPrice(e.target.value);
  };

  const onStepChange = () => {
    setStep(step + 1);
  };
  const offStepChange = () => {
    setStep(step - 1);
  };

  const handleAddRequest = () => {
    console.log(car, user, phone, email, kg, price);
    dispatch(addRequest({ car, user, kg, price }));
  };

  return (
	<>
	<Header/>
	<div className="requestbody">
      <Headerform step={step} onStepChange={onStepChange} />
      <div className="form-stepper">
        <div className="onboarding__right">
          {
            /** When the step is 0 , show main screen */
            step === 0 && (
              <div className="first-step">
                <h2>Заполните все поля заявки</h2>
                <p></p>
                <div>
                </div>
              </div>
            )
          }
          {
            /** if the stepper is higher than 0, render stepper */
            
          }
        </div>

        <div className="form-stepper__body">
          {step === 1 && (
            <div className="form-stepper__step1">
              <h2>Заявка на перевозку</h2>
              <div className="input-group">
                <label htmlFor="fullname">Ваше имя</label>
                <input
                  value={user}
                  type="text"
                  name="fullname"
                  onChange={handleUser}
                />
              </div>

              <div className="input-group">
                <label htmlFor="email">Email</label>
                <input
                  value={email}
                  type="email"
                  required
                  name="email"
                  onChange={handleEmail}
                />
              </div>
              <div className="input-group">
                <label htmlFor="password">Телефон</label>
                <input
                  value={phone}
                  type="password"
                  required
                  name="password"
                  onChange={handlePhone}
                />
              </div>
            </div>
          )}
          {/* Background form i.e step 2 */}
          {step === 2 && (
            <div className="form-stepper__step2">
              <h2>Background</h2>
              <div className="input-group">
                <label htmlFor="jobtitle">
                  Введите маршрут и массу груза
                  <h1>Масса груза</h1>
                </label>

                <input
                  value={kg}
                  type="text"
                  name="jobtitle"
                  onChange={handleKg}
                />
              </div>
            </div>
          )}

          {/* Final  form i.e step 3 */}
          {step === 3 && (
            <div className="form-stepper__step3">
              <h2>Подтверждение заявки</h2>
            </div>
          )}
        </div>
        <div className="form-stepper__action">
          {step > 1 && (
            <button
              className="btn btn-secondary"
              onClick={() => offStepChange()}
            >
              Назад
            </button>
          )}

          {step < 3 ? (
            <button
              className="btn btn-primary"
              onClick={() => onStepChange()}
            >
              Далее
            </button>
          ) : step === 3 ? (
            <button className="btn btn-primary" onClick={handleAddRequest}>
              Отправить
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
	</>
  );
};
export default RequestForm;
