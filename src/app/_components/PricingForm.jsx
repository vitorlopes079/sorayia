"use client";

import React, { useState } from "react";
import styles from "../css/pricingForm.module.css";

const PricingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    message: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={styles.formContainer}
      id="custom-prices"
    >
      <div className={styles.nameAndLastname}>
        <div className={styles.inputContainer}>
          <label htmlFor="name" className={styles.labelText}>
            First Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={styles.input}
          />
        </div>
        <div className={styles.inputContainer}>
          <label className={styles.labelText} htmlFor="lastName">
            Last Name:
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className={styles.input}
          />
        </div>
      </div>

      <div className={styles.inputContainer}>
        <label className={styles.labelText} htmlFor="email">
          Email Address:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={styles.input}
        />
      </div>
      <div className={styles.inputContainer}>
        <label className={styles.labelText} htmlFor="message">
          Message:
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className={styles.textareaInput}
        />
      </div>
      <button type="submit" className="buttonYellow buttonFullWidth">
        Submit
      </button>
    </form>
  );
};

export default PricingForm;
