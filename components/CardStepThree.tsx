import React, { useRef, useState } from "react";
import { selectDataObject } from "../slices/dataObjectSlice";
import { useAppSelector } from "../hooks";
import styles from "../styles/CardStepThree.module.css";
import { nextStep } from "../slices/stepCounterSlice";
import { assignObject } from "../slices/dataObjectSlice";

function CardStepThree(Props) {
  const checkboxref = useRef([]);
  const [checkedCard, setCheckedCard] = useState([]);
  const paymentOption = useAppSelector(selectDataObject)["paymentOption"];
  const onSubmit = () => {
    let services = [];
    checkedCard[0] && services.push("Online service");
    checkedCard[1] && services.push("Larger storage");
    checkedCard[2] && services.push("Customizable Profile");
    interface dataInter {
      services: string[];
    }

    const data: dataInter = {
      services: [...services],
    };

    Props.dispatch(assignObject(data));
    Props.dispatch(nextStep());
  };
  return (
    <div className={styles.CardStepThree}>
      <h1>Pick add-ons</h1>
      <p>Add-ons help enhance your gaming experience.</p>
      <div
        className={`${styles.card} ${checkedCard[0] && styles.active}`}
        onClick={() => {
          checkboxref.current[0].checked = !checkboxref.current[0].checked;
          let check = [...checkedCard];
          check[0] = checkboxref.current[0].checked;
          setCheckedCard(check);
        }}
      >
        <label className={styles.container}>
          <input
            type="checkbox"
            ref={(element) => (checkboxref.current[0] = element)}
          />
          <span className={styles.checkmark}></span>
        </label>
        <div>
          <span>Online service</span>
          <p>Access to multiplayer games</p>
        </div>
        <span>{paymentOption === "yearly" ? "+$10/yr" : "+$1/mo"}</span>
      </div>
      <div
        className={`${styles.card} ${checkedCard[1] && styles.active}`}
        onClick={() => {
          checkboxref.current[1].checked = !checkboxref.current[1].checked;
          let check = [...checkedCard];
          check[1] = checkboxref.current[1].checked;
          setCheckedCard(check);
        }}
      >
        <label className={styles.container}>
          <input
            type="checkbox"
            ref={(element) => (checkboxref.current[1] = element)}
          />
          <span className={styles.checkmark}></span>
        </label>
        <div>
          <span>Larger storage</span>
          <p>Extra 1TB of cloud save</p>
        </div>
        <span>{paymentOption === "yearly" ? "+$20/yr" : "+$2/mo"}</span>
      </div>
      <div
        className={`${styles.card} ${checkedCard[2] && styles.active}`}
        onClick={() => {
          checkboxref.current[2].checked = !checkboxref.current[2].checked;
          let check = [...checkedCard];
          check[2] = checkboxref.current[2].checked;
          setCheckedCard(check);
        }}
      >
        <label className={styles.container}>
          <input
            type="checkbox"
            ref={(element) => (checkboxref.current[2] = element)}
          />
          <span className={styles.checkmark}></span>
        </label>
        <div>
          <span>Customizable Profile</span>
          <p>Custom theme on your profile</p>
        </div>
        <span>{paymentOption === "yearly" ? "+$20/yr" : "+$2/mo"}</span>
      </div>
      <div className={styles.buttons}>
        <button onClick={() => Props.dispatch(goBack())}>Go Back</button>
        <button onClick={onSubmit}>Next Step</button>
      </div>
    </div>
  );
}

export default CardStepThree;
