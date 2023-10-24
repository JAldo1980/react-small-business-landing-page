import React, { useState } from "react";
import Nav from "./Nav";
import Header from "./Header";
import Services from "./Services";
import LinkedinPackageData from "./LinkedinPackageData";
import LinkedInPricing from "./LinkedInPricing";
import WebPricing from "./WebPricing";
import WebsitePackageData from "./WebsitePackageData";
import Why from "./Why";
import Next from "./Next";
import NextData from "./NextData";
import Newsletter from "./Newsletter";
import Footer from "./Footer";
import ServiceHead from "./ServiceHead";
import PackageHead from "./PackageHead";
import NextHead from "./NextHead";
import OrderBtn from "./OrderBtn";

export default function App() {
  const [isActive, setIsActive] = useState(false); //

  const LinkedInElements = LinkedinPackageData.map((item) => {
    return <LinkedInPricing key={item.id} {...item} />;
  });

  const WebElements = WebsitePackageData.map((item) => {
    return <WebPricing key={item.id} {...item} />;
  });

  const nextElements = NextData.map((item) => {
    return <Next key={item.id} {...item} />;
  });

  return (
    <React.StrictMode>
      <Nav />

      <Header isActive={isActive} />
      <ServiceHead />
      <Services />
      <PackageHead />
      <section className="package-grid">{LinkedInElements}</section>
      <OrderBtn />
      <section className="pricing-grid">{WebElements}</section>
      <OrderBtn />
      <Why />
      <NextHead />
      <section className="next-grid">{nextElements}</section>
      <Newsletter />
      <Footer />
    </React.StrictMode>
  );
}
