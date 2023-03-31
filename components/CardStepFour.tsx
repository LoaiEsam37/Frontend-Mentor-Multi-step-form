import React from "react";
import { selectDataObject } from "../slices/dataObjectSlice";
import { useAppSelector } from "../hooks";
import styles from "../styles/CardStepFour.module.css";
import { number } from "yup";
import { goBack, nextStep } from "../slices/stepCounterSlice";
function CardStepFour(Props) {
  const dataObject = useAppSelector(selectDataObject);
  const getPlanPrice = () => {
    if (dataObject?.plan === "arcade") {
      if (dataObject?.paymentOption === "yearly") return 90;
      if (dataObject?.paymentOption === "monthly") return 9;
    } else if (dataObject?.plan === "advanced") {
      if (dataObject?.paymentOption === "yearly") return 120;
      if (dataObject?.paymentOption === "monthly") return 12;
    } else if (dataObject?.plan === "pro") {
      if (dataObject?.paymentOption === "yearly") return 150;
      if (dataObject?.paymentOption === "monthly") return 15;
    }
  };
  const getServicesPrice = () => {
    let total = 0;
    dataObject?.services.map((service) => {
      if (service === "Online service") {
        if (dataObject?.paymentOption === "yearly") total += 10;
        else if (dataObject?.paymentOption === "monthly") total += 1;
      } else if (service === "Larger storage") {
        if (dataObject?.paymentOption === "yearly") total += 20;
        else if (dataObject?.paymentOption === "monthly") total += 2;
      } else if (service === "Customizable Profile") {
        if (dataObject?.paymentOption === "yearly") total += 20;
        else if (dataObject?.paymentOption === "monthly") total += 2;
      }
    });
    return total;
  };
  const getServicePrice = (service: string) => {
    if (typeof service === typeof 0) return service;
    if (service === "Online service") {
      if (dataObject?.paymentOption === "yearly") return 10;
      else if (dataObject?.paymentOption === "monthly") return 1;
    } else if (service === "Larger storage") {
      if (dataObject?.paymentOption === "yearly") return 20;
      else if (dataObject?.paymentOption === "monthly") return 2;
    } else if (service === "Customizable Profile") {
      if (dataObject?.paymentOption === "yearly") return 20;
      else if (dataObject?.paymentOption === "monthly") return 2;
    }
  };
  const onSubmit = () => {
    alert(JSON.stringify(dataObject));
    Props.dispatch(nextStep());
  };

  return (
    <div className={styles.CardStepFour}>
      <h1>Finishing up</h1>
      <p>Double-check everything looks OK before confirming.</p>
      <div className={styles.card}>
        <div className={styles.flex}>
          <div>
            <span>
              {dataObject?.plan} ({dataObject?.paymentOption})
            </span>
            <span className={styles.greyColor}>Change</span>
          </div>
          <span>
            ${getPlanPrice()}/{dataObject?.paymentOption}
          </span>
        </div>
        <hr />
        {dataObject?.services.map((service: string) => {
          return (
            <div className={styles.flex} key={service}>
              <span className={styles.greyColor}>{service}</span>
              <span>
                +${getServicePrice(service)}/
                {dataObject?.paymentOption === "yearly" ? "yr" : "mo"}
              </span>
            </div>
          );
        })}
      </div>
      <div className={styles.flex}>
        <span className={styles.greyColor}>
          total (per{" "}
          {dataObject?.paymentOption === "yearly" ? "yearly" : "monthly"})
        </span>
        <span className={styles.total}>
          ${getServicesPrice() + getPlanPrice()}/
          {dataObject?.paymentOption === "yearly" ? "yr" : "mo"}
        </span>
      </div>
      <div className={styles.buttons}>
        <button onClick={() => Props.dispatch(goBack())}>Go Back</button>
        <button onClick={onSubmit}>Next Step</button>
      </div>
    </div>
  );
}

export default CardStepFour;
