import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import "@/styles/Home.css";
import "@/styles/Container.css";
import Cart from "@/components/Cart";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Cart />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
