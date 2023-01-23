import React from "react";
import * as alertify from "alertifyjs";
import "alertifyjs/build/css/alertify.css";

import RightSideComponentCSS from "./RightSideComponent.module.css";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { cardActions } from "../../Redux/cardSlice";
import { cardInfoActions } from "../../Redux/cardInfoSlice";
import { submitActions } from "../../Redux/submitSlice";
import SubmitPage from "./SubmitPage";
import Input from "../UI/Input/Input";
function RightSideComponent() {
  const isSubmitted = useSelector((state) => state.submit.isSubmitted);

  const styled = RightSideComponentCSS;
  const isFrontSide = useSelector((state) => state.card.isFrontSide);
  const dispatch = useDispatch();
  const cardHolderName = useSelector((state) => state.cardInfo.cardHolderName);
  const cardNumber = useSelector((state) => state.cardInfo.cardNumber);
  const expDateMonth = useSelector((state) => state.cardInfo.cardExpDateMonth);
  const expDateYear = useSelector((state) => state.cardInfo.cardExpDateYear);
  const cardCvc = useSelector((state) => state.cardInfo.cardCvc);

  // Submit Action

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      cardNumber.length !== 16 ||
      cardHolderName.length < 4 ||
      expDateMonth > 12 ||
      cardCvc < 100 ||
      expDateYear < 22
    ) {
      alertify.error("Please provide valid information.");
    } else {
      dispatch(submitActions.submitAction());
    }
  };

  const handleChange = (e) => {
    let notWordRegex = /[^A-Za-z ]/g;
    let numberRegex = /[^0-9]/g;
    if (
      e.currentTarget.id === "cardHolderName" &&
      e.currentTarget.value.match(notWordRegex) === null
    ) {
      dispatch(cardInfoActions.assignCardHolderName(e.currentTarget.value));
    } else if (
      e.currentTarget.id === "cardNumber" &&
      e.currentTarget.value.match(numberRegex) === null
    ) {
      dispatch(cardInfoActions.assignCardNumber(e.currentTarget.value));
    } else if (
      e.currentTarget.id === "cardCvc" &&
      e.currentTarget.value.match(numberRegex) === null
    ) {
      dispatch(cardInfoActions.assignCardCvc(e.currentTarget.value));
    } else if (
      e.currentTarget.id === "expDateM" &&
      e.currentTarget.value.match(numberRegex) === null
    ) {
      dispatch(cardInfoActions.assignCardExpDateMonth(e.currentTarget.value));
    } else if (
      e.currentTarget.id === "expDateY" &&
      e.currentTarget.value.match(numberRegex) === null
    ) {
      dispatch(cardInfoActions.assignCardExpDateYear(e.currentTarget.value));
    }
  };
  const rotateCard = () => {
    dispatch(cardActions.startRotation());

    setTimeout(() => {
      dispatch(cardActions.turn());
    }, 300);
    setTimeout(() => {
      dispatch(cardActions.endRotation());
    }, 600);
  };

  return (
    <div className={styled.container}>
      {isSubmitted && <SubmitPage />}

      {!isSubmitted && (
        <form onSubmit={handleSubmit} className={styled.inputForm}>
          <Input
            onFocus={() => {
              !isFrontSide && rotateCard();
            }}
            onChange={handleChange}
            value={cardHolderName}
            type="holderName"
            labelText="CARDHOLDER NAME"
          />
          <Input
            value={cardNumber}
            onChange={handleChange}
            onFocus={() => {
              !isFrontSide && rotateCard();
            }}
            type="cardNumber"
            labelText="CARD NUMBER"
          />
          <div className={styled.inputForm_row}>
            <Input
              onChange={handleChange}
              type="date"
              value1={expDateMonth}
              value2={expDateYear}
              onFocus={() => {
                !isFrontSide && rotateCard();
              }}
              labelText="EXP.DATE (MM / YY)"
            />
            <Input
              value={cardCvc}
              onChange={handleChange}
              type="cvc"
              onFocus={() => {
                isFrontSide && rotateCard();
              }}
              labelText="CVC"
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Confirm
          </motion.button>
        </form>
      )}
    </div>
  );
}

export default RightSideComponent;
