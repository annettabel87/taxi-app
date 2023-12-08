import React from "react";
import styles from "./NavBar.module.scss";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { ROUTES } from "@/app/(constants)/constants";

export const NavBar = () => {
  return (
    <header className={styles.navBar}>
      <div className={styles.container}>
        <Link href={"/"} className={styles.logo}>
          <Image src="/images/icon.png" alt="me" width="50" height="50" />
        </Link>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link href={ROUTES.home}>Home</Link>
            </li>
            <li className={styles.navItem}>
              <Link href={ROUTES.history}>History</Link>
            </li>
            <li className={styles.navItem}>
              <Link href={ROUTES.help}>Help</Link>
            </li>
          </ul>
        </nav>
        <UserButton afterSignOutUrl="/" />
      </div>
    </header>
  );
};
