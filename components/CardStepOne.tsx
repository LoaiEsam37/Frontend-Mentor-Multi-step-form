import React from "react";
import styles from "../styles/CardStepOne.module.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { nextStep } from "../slices/stepCounterSlice";

function CardStepOne(Props) {
  const schema = yup.object().shape({
    name: yup.string().required("name cannot be empty"),
    email: yup
      .string()
      .email("Looks like this is not an email")
      .required("email address cannot be empty"),
    phone: yup
      .number()
      .required("phone number cannot be empty")
      .typeError("phone number is not vaild"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = () => {
    Props.dispatch(nextStep());
  };

  return (
    <div className={styles.CardStepOne}>
      <h1>Personal info</h1>
      <p>Please provide your name, email address, and phone number.</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name</label>
        <input
          type="text"
          placeholder="e.g. Stephen King"
          {...register("name")}
        />
        {errors?.name && <p>{errors.name.message.toString()}</p>}
        <label>Email Address</label>
        <input
          type="text"
          placeholder="e.g. stephenking@lorem.com"
          {...register("email")}
        />
        {errors?.email && <p>{errors.email.message.toString()}</p>}
        <label>Phone Number</label>
        <input
          type="text"
          placeholder="e.g. +1 234 567 890"
          {...register("phone")}
        />
        {errors?.phone && <p>{errors.phone.message.toString()}</p>}
        <button type="submit">Next Step</button>
      </form>
    </div>
  );
}

export default CardStepOne;
