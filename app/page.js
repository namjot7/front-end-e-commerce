"use client"
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import GlobalStyles from "./components/styles/GlobalStyles";
import LatestProducts from "./components/LatestProducts";
// import { createGlobalStyle } from "styled-components";

export default function Home() {


  return (
    <>
      <GlobalStyles />
      <Header />
      {/* <Hero /> */}
      <LatestProducts />
    </>
  );
}

// const GlobalStyles = createGlobalStyle`
//   body{
//     font-family: "Afacad Flux", serif;
//     color: white;
//     background-color: #000;
//     font-size: 16px;
//   }
//   *{
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
//   }
// `;