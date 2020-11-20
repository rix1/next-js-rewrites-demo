import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
const code = `module.exports = {
  async rewrites() {
    return [
      // we need to define a no-op rewrite to trigger checking
      // all pages/static files before we attempt proxying
      {
        source: "/:path*",
        destination: "/:path*",
      },
      {
        source: "/about",
        destination: "https://46brew.app/about",
      },
      {
        source: "/:path*",
        destination:
          "https://otovoweb-rix1-test-rewr-bntg5u.herokuapp.com/:path*",
      },
    ];
  },
};
`;

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Rewrite demo time!</h1>

        <p className={styles.description}>Here's my next.config.js</p>
        <pre className={styles.code}>{code}</pre>

        <div className={styles.grid}>
          <Link href="/mypage">
            <a className={styles.card}>
              <h3>Otovoweb example &rarr;</h3>
              <p style={{ marginBottom: "2rem" }}>
                On otovo.no we use Navi-router. Navigate around and see how it
                behaves.
              </p>
              <p style={{ marginBottom: "2rem" }}>
                The main issue I see is when{" "}
                <code className={styles.code}>Link from react-navi</code> routes
                you to a link that also exist in the main application (the one
                your looking at right now). Try clicking "Contact" in the footer
                for example, and refresh the browser.
              </p>
              <p>
                For the Otovo logo in the navbar I circumvented behaviour by
                using a plain old{" "}
                <code className={styles.code}>{`<a href="/">`}</code> tag. Click
                the logo to see what happens.
              </p>
            </a>
          </Link>

          <Link href="/about">
            <a className={styles.card}>
              <h3>Next router &rarr;</h3>
              <p>
                On 46brew I use Next-router in the navigation. Try to click
                "Home" in the navbar after loading the page and see what happens
                (works as expected)
              </p>
            </a>
          </Link>
          <a href="https://github.com/rix1/46brew/blob/master/src/components/Navigation.js">
            <p>For reference: Link to 46brew Navigation.js on Github</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
