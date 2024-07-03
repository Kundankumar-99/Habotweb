import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Herosection from "../component/Herosection";
import Buyer from "../component/Buyer";
import Banner from "../component/Banner";
import How_it_works from "../component/How_it_works";
import Ready_To_Dive from "../component/Ready-To-Dive";


export default function Home() {
  return (
    <div>
      <Header/>
      <Herosection />
      <Ready_To_Dive/>
      <Buyer />
      <Banner />
      <How_it_works />
      <Footer />
    </div>
  );
}
