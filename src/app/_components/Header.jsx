"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../css/header.module.css";
import logo from "../images/logo.png";
import arrowDown from "../images/navArrowDown.png";

const Header = () => {
  const pathname = usePathname();
  const [visibleDropdown, setVisibleDropdown] = useState(null);
  const [closeDropdownTimer, setCloseDropdownTimer] = useState(null);

  const scrollToSection = (event, sectionId) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const productSubLinks = [
    "Integration",
    "Benefits",
    "Artificial inteligence",
    "3D Influencer",
    "Personalities",
    "Features",
    "Frequently Asked Questions",
  ];
  const pricingSubLinks = ["Join Us", "Custom Prices"];
  const resourcesSubLinks = [
    { title: "Assistance Services", path: "/pricing#custom-prices" },
    { title: "Integrations", path: "#" },
    { title: "System Status", path: "#" },
    { title: "Blog on Generic Topics", path: "/blog" },
    { title: "FAQ", path: "/product#frequently-asked-questions" },
  ];
  const solutionsSubLinks = [
    "Marketing",
    "Sales",
    "Customer support",
    "Human Resources",
    "Education and Formation",
  ];

  const blogSubLinks = [
    { title: "Chatbots Revolution", path: "chatbots-revolution" },
    {
      title: "Maximizing Customer Service",
      path: "maximizing-customer-service",
    },
    {
      title: "Revolutionizing Customer Interactions",
      path: "revolutionizing-customer-interactions",
    },
    { title: "All Blogs", path: "" },
  ];

  const subLinksMapping = {
    "/product": productSubLinks,
    "/pricing": pricingSubLinks,
    "/resources": resourcesSubLinks,
    "/solutions": solutionsSubLinks,
    "/blog": blogSubLinks,
  };

  const isActive = (path) => {
    if (path === "/blog") {
      return pathname.startsWith(path);
    }
    return pathname === path;
  };

  const handleLinkMouseEnter = (path) => {
    if (isActive(path)) {
      if (closeDropdownTimer) {
        clearTimeout(closeDropdownTimer);
        setCloseDropdownTimer(null);
      }
      setVisibleDropdown(path);
    }
  };

  const handleLinkMouseLeave = () => {
    const timer = setTimeout(() => {
      setVisibleDropdown(null);
    }, 5000);
    setCloseDropdownTimer(timer);
  };

  const handleDropdownMouseEnter = () => {
    if (closeDropdownTimer) {
      clearTimeout(closeDropdownTimer);
      setCloseDropdownTimer(null);
    }
  };

  const handleDropdownMouseLeave = () => {
    const timer = setTimeout(() => {
      setVisibleDropdown(null);
    }, 500);
    setCloseDropdownTimer(timer);
  };

  return (
    <header className={styles.container}>
      <Link href="/" className={styles.link}>
        <div className={styles.logoWrapper}>
          <Image src={logo} alt="logo" width={undefined} height={undefined} />
          <p className={`${styles.logo}`}>Sorayia</p>
        </div>
      </Link>

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
                    src={arrowDown}
                    alt="Active indicator"
                    width={16}
                    height={16}
                    className={`${styles.navIcon} ${
                      visibleDropdown === path ? styles.rotate : ""
                    }`}
                  />
                )}
                {visibleDropdown === path && (
  <div
    className={styles.dropdownContent}
    onMouseEnter={handleDropdownMouseEnter}
    onMouseLeave={handleDropdownMouseLeave}
  >
    <div className={styles.dropdownLinks}>
      {subLinksMapping[path].map((item) => {
        if (typeof item === "string") {
          // Handling string-based links (for simple text links)
          const sectionId = item.toLowerCase().replace(/ /g, "-");
          return (
            <a
              key={sectionId}
              href="#"
              onClick={(e) => scrollToSection(e, sectionId)}
              className={styles.dropdownItem}
            >
              {item}
            </a>
          );
        } else {
          // Handling object-based links (for complex links with titles and paths)
          if (path === "/blog") {
            // Special handling for blog links
            return (
              <Link
                key={item.title}
                href={`/blog/${item.path}`}
                className={styles.dropdownItem}
              >
                {item.title}
              </Link>
            );
          } else {
            // General handling for other object-based links
            // Assuming you want to direct users to a specific path without scrolling
            return (
              <Link
                key={item.title}
                href={item.path}
                className={styles.dropdownItem}
              >
                {item.title}
              </Link>
            );
          }
        }
      })}
    </div>
  </div>
)}
              </div>
            )
          )}
        </div>
      </nav>
      <div className={styles.buttonsWrapper}>
        <button className="buttonGrey buttonMargin">Login</button>
        <button className="buttonYellow buttonMargin">Sign Up</button>
      </div>
    </header>
  );
};

export default Header;
