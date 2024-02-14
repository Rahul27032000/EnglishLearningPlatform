// components/Navbar.tsx
import React from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Navbar: React.FC = () => {
  return (
    <div className={styles.navbar}>
      <div>
        <span className={styles.logo}>ELP</span>
      </div>
      <ul className={styles.navLinks}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/games">Games</Link>
        </li>
        <li>
          <Link href="/rooms">Rooms</Link>
        </li>
      </ul>
      <div className={styles.rightLinks}>
        <Link href="/login">Login</Link>
        <Link href="/signup">Sign Up</Link>
      </div>
    </div>
  );
};

export default Navbar;
