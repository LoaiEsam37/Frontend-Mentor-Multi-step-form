import React from "react";
import Head from "next/head";
import { Ubuntu } from "next/font/google";
import styles from "../styles/Home.module.css";
// redux
import { useAppSelector, useAppDispatch } from "../hooks";
import { selectStepCount } from "../slices/stepCounterSlice";
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
        <div className={styles.card}>
          <div className={styles.cardSidebar}>
            <div className={styles.imgWrapper}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/bg-sidebar-desktop.svg" alt="sidebar background" />
            </div>
            <div className={styles.cardSidebarNav}>
              <div
                className={`${styles.item} ${stepCount === 1 && styles.active}`}
              >
                <p>step 1</p>
                <span>your info</span>
              </div>
              <div
                className={`${styles.item} ${stepCount === 2 && styles.active}`}
              >
                <p>step 2</p>
                <span>select plan</span>
              </div>
              <div
                className={`${styles.item} ${stepCount === 3 && styles.active}`}
              >
                <p>step 3</p>
                <span>add-ons</span>
              </div>
              <div
                className={`${styles.item} ${stepCount === 4 && styles.active}`}
              >
                <p>step 4</p>
                <span>summary</span>
              </div>
            </div>
          </div>
          <div className={styles.cardContent}>
            {stepCount === 1 && <CardStepOne dispatch={dispatch} />}
            {stepCount === 2 && <CardStepTwo dispatch={dispatch} />}
            {stepCount === 3 && <CardStepThree dispatch={dispatch} />}
            {stepCount === 4 && <CardStepFour dispatch={dispatch} />}
          </div>
        </div>
      </main>
    </>
  );
}
