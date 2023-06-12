import Head from "next/head";
import "../styles/root/globals.scss";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <>
      <Head>
        <title>Nostos</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Nostos is a web application that allows users to create and share their own interactive stories."
        />
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </>
  );
}
