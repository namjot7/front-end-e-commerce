"use client"
import Hero from "./components/Hero";
import LatestProducts from "./components/LatestProducts";
import Layout from "./components/Layout";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <LatestProducts />
    </Layout>
  );
}