import React from "react";
import { About } from "../../components/about/About";
import { Contact } from "../../components/contact/Contact";
import { Hero } from "../../components/hero/Hero";

function Home() {
  return (
    <main>
      <Hero />
      <About/>
      <Contact/>
    </main>
  );
}

export { Home };
