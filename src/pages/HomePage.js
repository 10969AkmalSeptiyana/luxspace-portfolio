import Clients from "components/HomePage/Clients";
import Footer from "components/Footer";
import Header from "components/Header";
import BrowseRoom from "components/HomePage/BrowseRoom";
import Hero from "components/HomePage/Hero";
import JustArrived from "components/HomePage/JustArrived";
import SiteMap from "components/SiteMap";
import Document from "components/Document";

export default function HomePage() {
  return (
    <Document>
      <Header theme="white" position="absolute" />
      <Hero />
      <BrowseRoom />
      <JustArrived />
      <Clients />
      <SiteMap />
      <Footer />
    </Document>
  );
}
