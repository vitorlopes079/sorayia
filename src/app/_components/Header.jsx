"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../css/header.module.css";
import logo from "../images/logo.png";
import arrowUp from "../images/navlinkIconUp.svg";

const Header = () => {
  const pathname = usePathname();
  const [visibleDropdown, setVisibleDropdown] = useState(null);
  const [closeDropdownTimer, setCloseDropdownTimer] = useState(null);

  const isActive = (path) => pathname === path;

  const handleLinkMouseEnter = (path) => {
    if (isActive(path)) {
      if (closeDropdownTimer) {
        clearTimeout(closeDropdownTimer); // Clear any pending close actions
        setCloseDropdownTimer(null);
      }
      setVisibleDropdown(path);
    }
  };

  const handleLinkMouseLeave = () => {
    const timer = setTimeout(() => {
      setVisibleDropdown(null);
    }, 5000); // Add a 500ms delay before hiding the dropdown
    setCloseDropdownTimer(timer);
  };

  const handleDropdownMouseEnter = () => {
    if (closeDropdownTimer) {
      clearTimeout(closeDropdownTimer); // Ensure the dropdown stays open if we re-enter before closing
      setCloseDropdownTimer(null);
    }
  };

  const handleDropdownMouseLeave = () => {
    const timer = setTimeout(() => {
      setVisibleDropdown(null);
    }, 500); // Consistent delay with link mouse leave for consistency
    setCloseDropdownTimer(timer);
  };

  return (
    <header className={styles.container}>
      <div className={styles.logoWrapper}>
        <Image src={logo} alt="logo" width={undefined} height={undefined} />
        <p className={`${styles.logo}`}>Sorayia</p>
      </div>
      <nav>
        <div className={styles.navWrapper}>
          {["/product", "/pricing", "/resources", "/solutions", "/blog"].map(
            (path) => (
              <div
                key={path}
                className={styles.navlinkContainer}
                onMouseEnter={() => handleLinkMouseEnter(path)}
                onMouseLeave={handleLinkMouseLeave}
              >
                <Link
                  href={path}
                  className={`${styles.navLink} ${
                    isActive(path) ? styles.active : ""
                  }`}
                >
                  {path.substring(1)}
                </Link>
                {isActive(path) && (
                  <Image
                    src={arrowUp}
                    alt="Active indicator"
                    width={16}
                    height={16}
                    className={styles.navIcon}
                  />
                )}
                {visibleDropdown === path && (
                  <div
                    className={styles.dropdownContent}
                    onMouseEnter={handleDropdownMouseEnter}
                    onMouseLeave={handleDropdownMouseLeave}
                  >
                    <div className={styles.dropdownLinks}>
                      <a href="#" className={styles.dropdownItem}>
                        Dropdown Link 1
                      </a>
                      <a href="#" className={styles.dropdownItem}>
                        Dropdown Link 2
                      </a>
                      <a href="#" className={styles.dropdownItem}>
                        Dropdown Link 3
                      </a>
                    </div>
                  </div>
                )}
              </div>
            )
          )}
        </div>
      </nav>
      <div className={styles.buttonsWrapper}>
        <button className={styles.button1}>Login</button>
        <button className={styles.button2}>Sign Up</button>
      </div>
    </header>
  );
};

export default Header;
