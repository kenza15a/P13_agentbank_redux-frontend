import React from "react";
import "../../Styles/main.css";
import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner/Banner";
import Feautures from "../../components/Features/Feautures";
import Footer from "../../components/Footer/Footer";
function HomePage() {
  return (
    <>
      <Navbar />
      <Banner />
      <Feautures />
      <Footer />
    </>
  );
}

export default HomePage;
