import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";

import Herosection from "../component/Herosection";
import Ready_To_Dive from "../component/Ready_to_dive";
import Buyer from "../component/Buyer";

export default function Home() {
  return (
    <div >
      <Header />
      <Herosection/>
      <Ready_To_Dive/>
      <Buyer/>
      <Footer />
    </div>
  );
}
