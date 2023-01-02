import React from "react";
import Navigation from "./components/Navigation";
import Section from "./pages/Home/section";
import Service from "./pages/Home/service";
import Reviews from "./pages/Home/reviews";
export default function App() {
  return (
    <div>
      <Navigation />
      <Section />
      <Service />
      <Reviews />
    </div>
  );
}
