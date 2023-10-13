import React from "react";
import Nav from "./Nav";
import Header from "./Header";
import Services from "./Services";
import PackageData from "./PackageData";
import Packages from "./Packages";
import Pricing from "./Pricing";
import PricingData from "./PricingData";
import Why from "./Why";
import Next from "./Next";
import NextData from "./NextData";
import Newsletter from "./Newsletter";
import Footer from "./Footer";


export default function App() {
  const packageElements = PackageData.map((item) => {
    return <Packages key={item.id} {...item} />;
  });

  const pricingElements = PricingData.map((item) => {
    return <Pricing key={item.id} {...item} />;
  });

  const nextElements = NextData.map((item) => {
    return <Next key={item.id} {...item} />;
  });

  return (
    <React.StrictMode>
      <Nav />
      <Header />
      <Services />
      <section className="package-grid">{packageElements}</section>
      <section className="pricing-grid">{pricingElements}</section>
      <Why />
      <section className="next-grid">{nextElements}</section>
      <Newsletter />
      <Footer />
    </React.StrictMode>
  );
}
