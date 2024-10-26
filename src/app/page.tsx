import React from "react";
import Header from "./component/header/header";
import Hero from "./component/hero/hero";
import About from "./about/about";

export default function Home() {
  return (
    <div>
      <title>Ehtisham Portfolio</title>
      <Header />
      <main>
        <Hero />
        <About />
      </main>
    </div>
  );
}
