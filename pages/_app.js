import "../styles/globals.css";
import Layout from "../component/Layout";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [count, setCount] = useState(0);

  return (
    <Layout>
      <Component
        {...pageProps}
        count={count}
        setCount={setCount}
      />
      ;
    </Layout>
  );
}

export default MyApp;
