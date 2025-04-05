import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import AboutWrome from "./components/aboutWrome";
import Table from "./components/table";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <AboutWrome /> */}
      <Table />
    </>
  );
}

export default App;
