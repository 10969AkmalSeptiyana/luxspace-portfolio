import Header from "components/Header";
import PageErrorMessage from "components/PageErrorMessage";
import SiteMap from "components/SiteMap";
import Footer from "components/Footer";
import Document from "components/Document";

export default function NotFound() {
  return (
    <Document>
      <Header theme="black" />
      <PageErrorMessage />
      <SiteMap />
      <Footer />
    </Document>
  );
}
