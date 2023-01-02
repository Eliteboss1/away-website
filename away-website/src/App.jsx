import React from "react";
import Navigation from "./components/Navigation";
import Section from "./pages/Home/section";
import About from "./pages/Home/about";
import Service from "./pages/Home/service";
import Reviews from "./pages/Home/reviews";
import Footer from "./components/Footer";
export default function App() {
  return (
    <div>
      <Navigation />
      <About/>
      <Section />
      <Service />
      <Reviews />
      <Footer/>
    </div>
  );
}
