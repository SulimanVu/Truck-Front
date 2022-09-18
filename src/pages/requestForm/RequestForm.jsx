import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRequest } from "../../features/requestSlice";
import "./reques.css";
import Headerform from "./headerform";
import Map from "../../components/Map/Map";
import { useParams } from "react-router-dom";
import { fetchUser } from "../../features/userSlice";
import { fetchCar } from "../../features/carSlice";

const RequestForm = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
    dispatch(fetchCar());
  }, [dispatch]);

  const cars = useSelector((state) => state.car.car);
  const route = useSelector((state) => state.request.mapRoute);
  const { id } = useParams();

  const theUser = useSelector((state) =>
    state.user.users.filter((item) => {
      return id === item._id;
    })
  );

  const [car, setCar] = useState("");
  const [user, setUser] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [kg, setKg] = useState("");
  const [price, setPrice] = useState("");
  const [step, setStep] = useState(0);

  const handleCar = (id) => {
    setCar(id);
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
    setPrice(e.target.value * 100);
  };

  const onStepChange = () => {
    setStep(step + 1);
  };
  const offStepChange = () => {
    setStep(step - 1);
  };

  const handleAddRequest = () => {
    const km = (route.summary.totalDistance / 1000).toFixed(1);

    const waypoint1 = JSON.parse(route.waypoint1);
    const waypoint2 = JSON.parse(route.waypoint2);

    const latLngFrom = waypoint1.latLng;
    const from = waypoint1.name;
    const latLngTo = waypoint2.latLng;
    const to = waypoint2.name;

    dispatch(
      addRequest({
        car,
        user: theUser[0]._id,
        kg,
        price,
        latLngFrom,
        latLngTo,
        from,
        to,
        km,
      })
    );
  };

  return (
    <>
      <div className="requestbody">
        <Headerform step={step} onStepChange={onStepChange} />
        <div className="form-stepper">
          <div className="onboarding__right">
            {
              /** When the step is 0 , show main screen */
              step === 0 && (
                <div className="first-step">
                  <div className="cars_div">
                    <h2>Выберите приглядевшуюся вам машину</h2>
                  </div>
                  <div className="cars_map">
                    {cars.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className="car"
                          onClick={() => handleCar(item._id)}
                        >
                          {item.model}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )
            }
            {/** if the stepper is higher than 0, render stepper */}
          </div>

          <div className="form-stepper__body">
            {step === 1 && (
              <div className="form-stepper__step1">
                <h2>Заявка на перевозку</h2>
                <div className="input-group">
                  <label htmlFor="fullname">Ваше имя</label>
                  <input
                    disabled={true}
                    value={user}
                    type="text"
                    placeholder={theUser[0].name}
                    name="fullname"
                    onChange={handleUser}
                  />
                </div>

                <div className="input-group">
                  <label htmlFor="email">Email</label>
                  <input
                    disabled={true}
                    value={email}
                    type="email"
                    required
                    name="email"
                    placeholder={theUser[0].mail}
                    onChange={handleEmail}
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="password">Телефон</label>
                  <input
                    disabled={true}
                    value={phone}
                    type="password"
                    required
                    name="password"
                    placeholder={theUser[0].phone}
                    onChange={handlePhone}
                  />
                </div>
              </div>
            )}
            {/* Background form i.e step 2 */}
            {step === 2 && (
              <div className="form-stepper__step2">
                <div className="txt">Введите маршрут и массу груза</div>
                <Map />
                <div className="input-group">
                  <h3>Масса груза :</h3>

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
            {step > 0 && (
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
              <button
                className="btn btn-primary sign"
                onClick={()=>handleAddRequest()}
              >
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
