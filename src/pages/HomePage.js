import Header from "components/Header/Header";
import Hero from "components/HomePage/Hero";

import useModalDOM from "helpers/hooks/useModalDOM";

export default function HomePage() {
  useModalDOM();
  return (
    <>
      <Header theme="white" position="absolute" />
      <Hero />
    </>
  );
}
