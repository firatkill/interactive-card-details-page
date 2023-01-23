import React from "react";
import InputCSS from "./Input.module.css";

function Input(props) {
  const styled = InputCSS;

  return (
    <div className={styled.inputGroup}>
      <label>{props.labelText}</label>
      {props.type === "cardNumber" && (
        <input
          required
          id="cardNumber"
          value={props.value}
          onChange={props.onChange}
          onFocus={props.onFocus}
          type="text"
          maxLength="16"
          placeholder="CARD NUMBER"
        ></input>
      )}
      {props.type === "date" && (
        <div className={styled.row}>
          <input
            required
            value={props.value1}
            id="expDateM"
            onChange={props.onChange}
            onFocus={props.onFocus}
            maxLength="2"
            placeholder="MM"
            type="text"
          />
          <input
            required
            value={props.value2}
            id="expDateY"
            onChange={props.onChange}
            onFocus={props.onFocus}
            maxLength="2"
            type="text"
            placeholder="YY"
          />
        </div>
      )}
      {props.type === "cvc" && (
        <input
          required
          value={props.value}
          id="cardCvc"
          onChange={props.onChange}
          onFocus={props.onFocus}
          placeholder="e.g. 123"
          type="text"
          maxLength="3"
        ></input>
      )}
      {props.type === "holderName" && (
        <input
          required
          value={props.value}
          id="cardHolderName"
          onChange={props.onChange}
          onFocus={props.onFocus}
          type="text"
          placeholder="CARDHOLDER'S NAME"
        ></input>
      )}
      {props.type === "submit" && <button>CONFIRM</button>}
    </div>
  );
}

export default Input;
