import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Ssr({ delay }) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>SSR Page</h1>

        <p className={styles.description}>Response delay: {delay}ms</p>
      </main>
    </div>
  );
}

function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function getServerSideProps(context) {
  const { delay = 0 } = context.query;
  console.log("context.params", delay);
  if (delay) {
    await timeout(delay);
  }

  return {
    props: {
      delay: delay,
    },
  };
}
