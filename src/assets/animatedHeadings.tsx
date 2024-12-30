// src/components/AnimatedHeadings.tsx
import React from "react";
import styles from "../modulesCSS/viewsCSS/mainIndex.module.css";

const AnimatedHeadings: React.FC = () => {
  return (
    <div className={styles["Hero-Container"]}>
      <h1 className={`${styles.h1} ${styles["h1-animate-1"]}`}>
        Desarrollo Web
      </h1>
      <h1 className={`${styles.h1} ${styles["h1-animate-2"]}`}>Diseño Web</h1>
    </div>
  );
};

export default AnimatedHeadings;
