import React from "react";
import "react-credit-cards-2/lib/styles.scss";
import Cards from "react-credit-cards-2";
import { useState } from "react";

import {
    formatCreditCardNumber,
    formatCVC,
    formatExpirationDate,
  } from "./utils";

const Card = () => {

  const [cvc, setCvc] = useState("");
  const [expiry, setExpiry] = useState("");
  const [focus, setFocus] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("4455 **** **** ****");

  const handleSubmit = () => {
    setCvc("");
    setExpiry("");
    setFocus("");
    setName("");
    setNumber("");
  };


 const handleInputChange = ({ target }) => {
    if (target.name === "number") {
      target.value = formatCreditCardNumber(target.value);
      setNumber(target.value);
    } else if (target.name === "expiry") {
      target.value = formatExpirationDate(target.value);
      setExpiry(target.value);
    } else if (target.name === "cvc") {
      target.value = formatCVC(target.value);
      setCvc(target.value);
    } else if (target.name === "name") {
        setName(target.value) 
    }
};

  return (
    <div>
      <Cards
        cvc={cvc}
        expiry={expiry}
        focused={focus}
        name={name}
        number={number}
      />
      <div>
      <form>
        <div>
        <input
          type="tel"
          name="number"
          placeholder="0000 0000 0000 0000"
          value={number}
          maxLength={20}
          onChange={handleInputChange}
          onFocus={(e) => setFocus(e.target.name)}
          onClick={() => setNumber('')}
        />
        <input
          type="text"
          name="name"
          required
          placeholder="Your Name Here"
          value={name}
          maxLength={25}
          onChange={handleInputChange}
          onFocus={(e) => setFocus(e.target.name)}
        /> </div>
        <input
          type="text"
          name="expiry"
          placeholder="MM/YY"
          maxLength={6}
          pattern="\d\d/\d\d"
          value={expiry}
          required
          onChange={handleInputChange}
          onFocus={(e) => setFocus(e.target.name)}
        />
        <input
          type="tel"
          name="cvc"
          pattern="\d{3,4}"
          placeholder="CVC"
          value={cvc}
          required={true}
          maxLength={3}
          onChange={handleInputChange}
          onFocus={(e) => setFocus(e.target.name)}
        />
      </form>
      <button onClick={() => handleSubmit()}>Pay</button>
      </div>
    </div>
  );
};

export default Card;
