"use client"
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import GlobalStyles from "./components/styles/GLobalStyles";
// import { createGlobalStyle } from "styled-components";

export default function Home() {

  const [featuredProduct, setFeaturedProduct] = useState(null);

  useEffect(() => {
    fetch("/api/featured")
      .then(res => res.json())
      .then(data => setFeaturedProduct(data.featuredProduct));
  }, []);
  console.log(featuredProduct);
  // const a = featuredProduct.images;
  // console.log(a[1]);

  // console.log(featuredProduct);

  return (
    <>
      <GlobalStyles />
      <Header />
      {featuredProduct && <Hero product={featuredProduct} />}
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