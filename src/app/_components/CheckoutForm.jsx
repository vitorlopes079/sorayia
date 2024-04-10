"use client";

import React, { useState } from "react";
import styles from "../css/checkoutFrom.module.css";
import Image from "next/image";
import DiscoverCard from "../images/checkout/DiscoverCard.png";
import MasterCard from "../images/checkout/MasterCard.png";
import Visa from "../images/checkout/Visa.png";
import cvcicon from "../images/checkout/cvcicon.png";

const countries = [
  { name: "United States", code: "US" },
  { name: "Canada", code: "CA" },
  { name: "United Kingdom", code: "GB" },
  // Add more countries as needed
];

const CheckoutForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    cardHolderName: "",
    cardDetails: "",
    expiryDate: "",
    cvc: "",
    country: "",
    zipCode: "",
  });
  const handleChange = (e) => {
    let { name, value } = e.target;

    if (name === "cardDetails") {
      // Formatting for card number: spaces after every 4 digits, max 16 digits
      const digitsOnly = value.replace(/\D/g, '').slice(0, 16); // Adjusted for 16 digits
      const formatted = digitsOnly.replace(/(.{4})/g, '$1 ').trim();
      value = formatted;
    } else if (name === "expiryDate") {
      // Formatting for expiry date: MM/YY
      const numbersOnly = value.replace(/\D/g, '').slice(0, 4);
      const formatted = numbersOnly.length > 2 ? `${numbersOnly.slice(0, 2)}/${numbersOnly.slice(2)}` : numbersOnly;
      value = formatted;
    }

    
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form id="creditCardForm" onSubmit={handleSubmit}>
      <div className={styles.formField}>
        <label htmlFor="email" className={styles.label}>
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className={styles.input}
        />
      </div>

      <div className={styles.formField}>
        <label htmlFor="cardHolderName" className={styles.label}>
          Name of Holder:
        </label>
        <input
          type="text"
          id="cardHolderName"
          name="cardHolderName"
          value={formData.cardHolderName}
          onChange={handleChange}
          required
          className={styles.input}
        />
      </div>

      <div className={styles.formField}>
        <label htmlFor="cardDetails" className={styles.label}>
          Credit Card Details:
        </label>
        <div className={styles.inputWithIcons}>
          <div className={styles.iconsContainer}>
            <Image src={DiscoverCard} width={48} height={48} alt="Discover" />
            <Image src={MasterCard} width={48} height={48} alt="MasterCard" />
            <Image src={Visa} width={48} height={48} alt="Visa" />
          </div>
        </div>

        <input
          type="text"
          id="cardDetails"
          name="cardDetails"
          placeholder="Card Number"
          value={formData.cardDetails}
          onChange={handleChange}
          required
          className={styles.input}
        />
        <div className={styles.cardData}>
          <input
            type="text"
            name="expiryMonth"
            placeholder="MM/YY"
            maxLength="5"
            size="5"
            value={formData.expiryMonth}
            onChange={handleChange}
            required
            className={styles.input}
          />
          <div className={styles.cvcIcon}>
            <Image src={cvcicon} width={48} height={48} alt="cvc icon" />
          </div>
          <input
            type="text"
            name="cvc"
            placeholder="CVC"
            maxLength="3"
            size="3"
            value={formData.cvc}
            onChange={handleChange}
            required
            className={styles.input}
          />
        </div>
      </div>

      <div className={styles.formField}>
        <label htmlFor="country" className={styles.label}>
          Country or Region:
        </label>
        <select
          id="country"
          name="country"
          value={formData.country}
          onChange={handleChange}
          required
          className={styles.input}
        >
          <option value="">Please select a country</option>
          {countries.map(({ name, code }) => (
            <option key={code} value={code}>
              {name}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.formField}>
        <input
          type="text"
          id="zipCode"
          name="zipCode"
          placeholder="Zip Code:"
          value={formData.zipCode}
          onChange={handleChange}
          required
          className={styles.input}
        />
      </div>

      <button type="submit" className={styles.button}>
        Subscribe
      </button>
    </form>
  );
};

export default CheckoutForm;
