import React, { useState } from "react";
import styles from "../styles/CardStepTwo.module.css";
import Image from "next/image";
import { goBack, nextStep } from "../slices/stepCounterSlice";
import { object } from "yup";

function CardStepTwo(Props) {
  const [choice, setChoice] = useState("");
  const [error, setError] = useState(false);
  // true = yearly, false = monthly
  const [paymentOption, setPaymentOption] = useState(false);
  const onSubmit = () => {
    if (choice === "") {
      setError(true);
    } else {
      interface dataInter {
        choice: string;
        paymentOption: string;
      }

      const data: dataInter = {
        choice: choice,
        paymentOption: paymentOption ? "yearly" : "monthly",
      };

      console.log(data);
      Props.dispatch(nextStep());
    }
  };
  return (
    <div className={styles.CardStepTwo}>
      <h1>Select your plan</h1>
      <p>You have the option of monthly or yearly billing.</p>
      <div className={styles.choices}>
        <div
          className={`${styles.card} ${
            choice === "arcade" && styles.activeCard
          }`}
          onClick={() => setChoice("arcade")}
        >
          <div className={styles.cardIcon}>
            <Image
              src="/icon-arcade.svg"
              alt="arcade icon"
              width={40}
              height={40}
            />
          </div>
          <span>Arcade</span>
          {paymentOption ? <p>$90/yr</p> : <p>$9/mo</p>}
          {paymentOption && <p>2 months free</p>}
        </div>

        <div
          className={`${styles.card} ${
            choice === "advanced" && styles.activeCard
          }`}
          onClick={() => setChoice("advanced")}
        >
          <div className={styles.cardIcon}>
            <Image
              src="/icon-advanced.svg"
              alt="advanced icon"
              width={40}
              height={40}
            />
          </div>
          <span>Advanced</span>
          {paymentOption ? <p>$120/yr</p> : <p>$12/mo</p>}
          {paymentOption && <p>2 months free</p>}
        </div>

        <div
          className={`${styles.card} ${choice === "pro" && styles.activeCard}`}
          onClick={() => setChoice("pro")}
        >
          <div className={styles.cardIcon}>
            <Image src="/icon-pro.svg" alt="pro icon" width={40} height={40} />
          </div>
          <span>Pro</span>
          {paymentOption ? <p>$150/yr</p> : <p>$15/mo</p>}
          {paymentOption && <p>2 months free</p>}
        </div>
      </div>
      {error && choice === "" && (
        <p className={styles.error}>please select an option</p>
      )}
      <div className={styles.toggler}>
        <label className={`${styles.switch} ${paymentOption && styles.true}`}>
          <input
            type="checkbox"
            onChange={(e) => setPaymentOption(e.target.checked)}
          />
          <span className={`${styles.slider} ${styles.Round}`}></span>
        </label>
      </div>
      <div className={styles.buttons}>
        <button onClick={() => Props.dispatch(goBack())}>Go Back</button>
        <button onClick={onSubmit}>Next Step</button>
      </div>
    </div>
  );
}

export default CardStepTwo;
