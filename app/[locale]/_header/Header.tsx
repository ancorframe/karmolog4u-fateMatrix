"use client";
import React, { useState } from "react";
import LocaleSwitcher from "./LocaleSwitcher/LocaleSwitcher";
import styles from "./header.module.css";
import Navigation from "./Navigation/Navigation";
import MobileNavigation from "./MobileNav/MobileNavigation";
import Image from "next/image";
import burgerIcon from "../../../public/assets/images/burger.svg";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className={styles.header}>
      <div className={styles.header_container}>
        <button className={styles.burger} onClick={() => setIsOpen(!isOpen)}>
          <Image
            priority
            src={burgerIcon}
            alt="Follow us on Twitter"
            className={styles.burger_icon}
          />
        </button>
        <MobileNavigation isOpen={isOpen} setIsOpen={setIsOpen} />
        <div className={styles.desktop_nav}>
          <Navigation />
        </div>
        <LocaleSwitcher />
      </div>
    </header>
  );
}

export default Header;
