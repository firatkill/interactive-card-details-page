import React, { useState } from "react";
import { motion } from "framer-motion";
import { useSelector, useDispatch, useClass } from "react-redux";
import { cardActions } from "../../../Redux/cardSlice";
import CardCSS from "./Card.module.css";
function Card() {
  const styled = CardCSS;

  const dispatch = useDispatch();
  const isFrontSide = useSelector((state) => state.card.isFrontSide);
  const isRotating = useSelector((state) => state.card.isRotating);

  const cardHolderName = useSelector((state) => state.cardInfo.cardHolderName);
  const cardNumber = useSelector((state) => state.cardInfo.cardNumber);
  const cardExpDateMonth = useSelector(
    (state) => state.cardInfo.cardExpDateMonth
  );
  const cardExpDateYear = useSelector(
    (state) => state.cardInfo.cardExpDateYear
  );
  const cardCvc = useSelector((state) => state.cardInfo.cardCvc);
  // Card Exp Date Functions

  //Card CVC Functions
  let cardCVCUpdated = cardCvc.split("");
  for (let i = 0; i < 3 - cardCvc.length; i++) {
    cardCVCUpdated.push("*");
  }

  // card Number Functions
  let cardNumberUpdated = cardNumber.split("");

  for (let i = 0; i < 16 - cardNumber.length; i++) {
    cardNumberUpdated.push("*");
  }
  cardNumberUpdated.splice(4, 0, " ");
  cardNumberUpdated.splice(9, 0, " ");
  cardNumberUpdated.splice(14, 0, " ");

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
    <div
      className={`${styled.cardContainer} ${isRotating && styled.active}`}
      onClick={rotateCard}
    >
      {isFrontSide && (
        <div className={styled.frontSide}>
          <div className={styled.circleHolder}>
            <div className={styled.bigCircle}></div>
            <div className={styled.smallCircle}></div>
          </div>
          <p className={styled.cardNumber}>{cardNumberUpdated}</p>
          <div className={styled.cardFooter}>
            <p className={styled.cardHolder}>
              {cardHolderName === "" ? "**********" : cardHolderName}
            </p>
            <p className={styled.expDate}>
              {`${cardExpDateMonth} / ${cardExpDateYear}`}
            </p>
          </div>
        </div>
      )}
      {!isFrontSide && (
        <div className={styled.backSide}>
          <div className={styled.line}></div>
          <div className={styled.cvvline}>
            <p>{cardCVCUpdated.join("")}</p>
          </div>
          <div className={styled.smallWords}>
            <div className={styled.smallWords_first4}>
              <div className={styled.smallWords_1}></div>
              <div className={styled.smallWords_2}></div>
              <div className={styled.smallWords_3}></div>
              <div className={styled.smallWords_4}></div>
            </div>
            <div className={styled.smallWords_second4}>
              <div className={styled.smallWords_5}></div>
              <div className={styled.smallWords_6}></div>
              <div className={styled.smallWords_11}></div>
              <div className={styled.smallWords_12}></div>
            </div>
            <div className={styled.smallWords_last4}>
              <div className={styled.smallWords_9}></div>
              <div className={styled.smallWords_10}></div>
              <div className={styled.smallWords_11}></div>
              <div className={styled.smallWords_12}></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Card;
