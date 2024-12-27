"use client"
import { useContext, useEffect } from "react";
import Hero from "./components/Hero";
import LatestProducts from "./components/LatestProducts";
import Layout from "./components/Layout";
import { CartContext } from "./components/CartContext";

export default function Home() {
  return (
    <Layout>
      {/* <Hero /> */}
      <LatestProducts />
    </Layout>
  );
}