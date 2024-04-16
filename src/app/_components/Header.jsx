"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import styles from "../css/header.module.css";
import logo from "../images/logo.png";

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();

  const [visibleDropdown, setVisibleDropdown] = useState(null);
  const [closeDropdownTimer, setCloseDropdownTimer] = useState(null);

  const scrollToSection = (event, path) => {
    const url = new URL(path, window.location.origin);
    const targetPathname = url.pathname;
    const hash = url.hash.substring(1);

    if (pathname === targetPathname && hash) {
      event.preventDefault();
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }

    router.push(path);
  };

  const subLinksMapping = {
    "/product": [
      { title: "Integration", path: "/product#integration" },
      { title: "Benefits", path: "/product#benefits" },
      {
        title: "Artificial Intelligence",
        path: "/product#artificial-intelligence",
      },
      { title: "3D Influencer", path: "/product#3d-influencer" },
      { title: "Personalities", path: "/product#personalities" },
      { title: "Features", path: "/product#features" },
      {
        title: "Frequently Asked Questions",
        path: "/product#frequently-asked-questions",
      },
    ],
    "/resources": [
      { title: "Partner", path: "./partner" },
      { title: "Assistance Services", path: "/pricing#custom-prices" },
      { title: "Integrations", path: "#" },
      { title: "System Status", path: "#" },
      { title: "Blog on Generic Topics", path: "/blog" },
      { title: "FAQ", path: "/product#frequently-asked-questions" },
    ],
    "/solutions": [
      { title: "Marketing", path: "/solutions#marketing" },
      { title: "Sales", path: "/solutions#sales" },
      { title: "Customer Support", path: "/solutions#customer-support" },
      { title: "Human Resources", path: "/solutions#human-resources" },
      {
        title: "Education and Formation",
        path: "/solutions#education-and-formation",
      },
    ],
  };

  const navigationItems = [
    "/product",
    "/pricing",
    "/resources",
    "/solutions",
    "/blog",
  ];

  const isActive = (path) => pathname === path || pathname.startsWith(path);

  const handleLinkMouseEnter = (path) => {
    if (closeDropdownTimer) {
      clearTimeout(closeDropdownTimer);
      setCloseDropdownTimer(null);
    }
    setVisibleDropdown(path);
  };

  const handleLinkMouseLeave = () => {
    const timer = setTimeout(() => {
      setVisibleDropdown(null);
    }, 500);
    setCloseDropdownTimer(timer);
  };

  const handleDropdownMouseEnter = () => {
    if (closeDropdownTimer) {
      clearTimeout(closeDropdownTimer);
      setCloseDropdownTimer(null);
    }
  };

  const handleDropdownMouseLeave = () => {
    if (visibleDropdown) {
      const timer = setTimeout(() => {
        setVisibleDropdown(null);
      }, 500);
      setCloseDropdownTimer(timer);
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
      className={styles.container}
    >
      <Link href="/" legacyBehavior>
        <a className={styles.link}>
          <div className={styles.logoWrapper}>
             <Image src={logo} alt="logo" width={35} height={40} /> 
            <p className={styles.logo}>Sorayia</p>
          </div>
        </a>
      </Link>

      <nav>
        <div className={styles.navWrapper}>
          {navigationItems.map((path) => {
            const hasDropdown = Boolean(subLinksMapping[path]);
            const isResources = path === "/resources";

            return (
              <div
                key={path}
                className={styles.navlinkContainer}
                onMouseEnter={() => handleLinkMouseEnter(path)}
                onMouseLeave={handleLinkMouseLeave}
              >
                <Link href={isResources ? "/partner" : path} legacyBehavior>
                  <a
                    className={`${styles.navLink} ${
                      isActive(path) ? styles.active : ""
                    }`}
                  >
                    {path.substring(1)}
                  </a>
                </Link>


                {visibleDropdown === path && hasDropdown && (
                  <div
                    className={styles.dropdownContent}
                    onMouseEnter={handleDropdownMouseEnter}
                    onMouseLeave={handleDropdownMouseLeave}
                  >
                    <div className={styles.dropdownLinks}>
                      {subLinksMapping[path]?.map((item, index) => (
                        <Link key={index} href={item.path} legacyBehavior>
                          <a
                            onClick={(e) => scrollToSection(e, item.path)}
                            className={styles.dropdownItem}
                          >
                            {item.title}
                          </a>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </nav>
      <div className={styles.buttonsWrapper}>
        <button className="buttonGrey buttonMargin">Login</button>
        <button className="buttonYellow buttonMargin">Sign Up</button>
      </div>
    </motion.header>
  );
};

export default Header;
