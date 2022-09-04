import Clients from "components/HomePage/Clients";
import Footer from "components/Footer";
import Header from "components/Header";
import BrowseRoom from "components/HomePage/BrowseRoom";
import Hero from "components/HomePage/Hero";
import JustArrived from "components/HomePage/JustArrived";
import SiteMap from "components/SiteMap";

import useModalDOM from "helpers/hooks/useModalDOM";
import useScrollAnchor from "helpers/hooks/useScrollAnchor";

export default function HomePage() {
  useModalDOM();
  useScrollAnchor();

  return (
    <>
      <Header theme="white" position="absolute" />
      <Hero />
      <BrowseRoom />
      <JustArrived />
      <Clients />
      <SiteMap />
      <Footer />
    </>
  );
}
