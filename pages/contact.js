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

export default function Contact() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hello I'm the contact page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Hello I'm the contact page</h1>

        <p className={styles.description}>
          You probably came here from otovoweb.xy/contact after refreshing?
          That's unfortunate...
        </p>
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
