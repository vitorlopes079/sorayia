'use client'

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark as fasBookmark } from "@fortawesome/free-solid-svg-icons";
import { faBookmark as farBookmark } from "@fortawesome/free-regular-svg-icons";
import styles from "../css/post.module.css"


const SaveArticle = () => {
  const [isSaved, setIsSaved] = useState(false);

  const toggleSave = () => {
    setIsSaved(!isSaved);
  };

  
  return (
    <div>
      <p onClick={toggleSave} className={styles.saveArticle}>
        Save Article
        {isSaved ? (
          <FontAwesomeIcon icon={fasBookmark} className="bookmarkActive" size="lg" />
        ) : (
          <FontAwesomeIcon icon={farBookmark} className="bookmarkInactive" size="lg" />
        )}
      </p>
    </div>
  );
};

export default SaveArticle;