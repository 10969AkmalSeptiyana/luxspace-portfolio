import ShippingDetails from "components/Cart/ShippingDetails";
import ShoppingCart from "components/Cart/ShoppingCart";
import Document from "components/Document";
import Footer from "components/Footer";
import Header from "components/Header";
import SiteMap from "components/SiteMap";
import Breadcrumb from "components/ui/Breadcrumb";

export default function Cart() {
  return (
    <Document>
      <Header theme="black" />
      <Breadcrumb
        list={[
          { url: "/", name: "Home" },
          { url: "/cart", name: "Shopping Cart" },
        ]}
      />

      <section className="md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex -mx-4 flex-wrap">
            <ShoppingCart />
            <ShippingDetails />
          </div>
        </div>
      </section>

      <SiteMap />
      <Footer />
    </Document>
  );
}
