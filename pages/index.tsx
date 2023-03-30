import React from "react";
import Head from "next/head";
import { Ubuntu } from "next/font/google";
// redux
import { useAppSelector, useAppDispatch } from "../hooks";
import { nextStep, goBack, selectStepCount } from "../slices/stepCounterSlice";
// Components
import CardStepOne from "../components/CardStepOne";
import CardStepTwo from "../components/CardStepTwo";
import CardStepThree from "../components/CardStepThree";
import CardStepFour from "../components/CardStepFour";

const ubuntu = Ubuntu({
  subsets: [
    "cyrillic",
    "cyrillic-ext",
    "greek",
    "greek-ext",
    "latin",
    "latin-ext",
  ],
  weight: ["400", "500", "700"],
});

export default function Home() {
  const stepCount = useAppSelector(selectStepCount);
  const dispatch = useAppDispatch();
  return (
    <>
      <Head>
        <title>Frontend Mentor | Multi-step form</title>
        <meta
          name="description"
          content="Frontend Mentor Multi-step form. made by LoaiEsam37"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
      </Head>
      <main>
        <div className="card">
          <div className="card__sidebar">
            <div className="img__wrapper">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/bg-sidebar-desktop.svg" alt="sidebar background" />
            </div>
          </div>
          <div className="card__content">
            <section>
              {stepCount === 1 && <CardStepOne />}
              {stepCount === 2 && <CardStepTwo />}
              {stepCount === 3 && <CardStepThree />}
              {stepCount === 4 && <CardStepFour />}
            </section>
            <section>
              <button onClick={() => dispatch(goBack())}>Go Back</button>
              <button onClick={() => dispatch(nextStep())}>Next Step</button>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
