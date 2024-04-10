'use client'

import React, {useState} from 'react'
import styles from "../css/quizForm.module.css"

const QuizForm = ({ title, options }) => {
    const [selectedOption, setSelectedOption] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      alert('Submitted response: ' + selectedOption);
    };
  
  
    return (
      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit}>
          <fieldset className={styles.fieldset}>
            <legend className={styles.legend}>{title}</legend>
            {options.map((option, index) => (
              <div
                key={index}
                className={`${styles.optionItem} ${selectedOption === option ? styles.selected : ''}`}
                onClick={() => setSelectedOption(option)}
              >
                {option}
              </div>
            ))}
            <button type="submit" className={styles.submitButton}>Submit Answer</button>
          </fieldset>
        </form>
      </div>
    );
  };
  
  export default QuizForm;
