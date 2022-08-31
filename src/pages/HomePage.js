import Header from "components/Header/Header";
import BrowseRoom from "components/HomePage/BrowseRoom";
import Hero from "components/HomePage/Hero";

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
    </>
  );
}
