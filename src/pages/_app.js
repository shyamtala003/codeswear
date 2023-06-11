import NextNProgress from "nextjs-progressbar";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import "@/styles/Home.css";
import "@/styles/Container.css";
import Cart from "@/components/Cart";

export default function App({ Component, pageProps }) {
  return (
    <>
      <NextNProgress
        color="crimson"
        startPosition={0.3}
        stopDelayMs={200}
        height={4}
        showOnShallow={true}
      />
      <Cart />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
