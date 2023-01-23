import React from "react";
import SubmitPageCSS from "./SubmitPage.module.css";
import { AiOutlineCheck } from "react-icons/ai";
function SubmitPage() {
  const styled = SubmitPageCSS;
  const clickHandler = () => {
    window.location.reload();
  };
  return (
    <div className={styled.submitPageContainer}>
      <div className={styled.checkCircle}>
        <AiOutlineCheck className={styled.checkIcon} />
      </div>
      <h1 className={styled.header}>THANK YOU!</h1>
      <p className={styled.paragraph}>We've added your card details.</p>
      <button onClick={clickHandler} className={styled.button}>
        Continue
      </button>
    </div>
  );
}

export default SubmitPage;
