import styles from "@/styles/Home.module.css";

import React from "react";
import Test from '@/components/Test';

export default function Home() {
  return (
    <>
      <div>
        <h1 className={styles.title}>Welcome to the Music App</h1>
        <p className={styles.description}>
          This is a simple music app built with Next.js and Supabase.
        </p>
        <div className={styles.grid}>
          <a href="/login" className={styles.card}>
            <h2>Login &rarr;</h2>
            <p>Login to your account.</p>
          </a>
          <a href="/register" className={styles.card}>
            <h2>Register &rarr;</h2>
            <p>Create a new account.</p>
          </a>
        </div>
      </div>
      <Test/>
    </>
  );
}
