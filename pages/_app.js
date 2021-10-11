import Layout from "../components/Layout";
import { NavCalcul } from "../context/context";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <NavCalcul>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </NavCalcul>
  );
}

export default MyApp;
