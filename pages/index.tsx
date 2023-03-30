import React from "react";
import { Ubuntu } from "next/font/google";
import Head from "next/head";
import "@/styles/Home.module.css";
import CardStepOne from "../components/CardStepOne";

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
              <img src="/bg-sidebar-desktop.svg" />
            </div>
          </div>
          <div className="card__content">
            <CardStepOne />
          </div>
        </div>
      </main>
    </>
  );
}
