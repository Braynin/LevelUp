// src/components/AnimatedHeadings.tsx
import React from "react";
import styles from "../modulesCSS/viewsCSS/mainIndex.module.css";

const AnimatedHeadings: React.FC = () => {
  return (
    <div className={styles["Hero-Container"]}>
      <div className={styles["Hero-Text"]}>
        <div className={styles["h1-container"]}>
          <h1 className={`${styles.h1} ${styles["animate-1"]}`}>
            Desarrollo Web
          </h1>
          <h1 className={`${styles.h1} ${styles["animate-2"]}`}>Diseño Web</h1>
        </div>
        <div className={styles["concept-container"]}>
          <p className={`${styles.concept} ${styles["animate-1"]}`}>
            Somos un equipo de expertos en desarrollo web y diseño web que se
            especializa en la creación de sitios web atractivos y funcionales
            que reflejen la identidad de tu negocio.
          </p>
          <p className={`${styles.concept} ${styles["animate-2"]}`}>
            Nuestro enfoque se basa en la creación de sitios web que reflejen la
            identidad de tu negocio y que sean fáciles de navegar y usar.
          </p>
        </div>
        <div className={styles["button-container"]}>
          <button className={`${styles.button} ${styles["animate-1"]}`}>
            Contactanos
          </button>
          <button className={`${styles.button} ${styles["animate-2"]}`}>
            Contactanos
          </button>
        </div>
      </div>

      <img
        className={styles["hero-image"]}
        src="https://via.placeholder.com/400x400"
        alt="Imagen de ejemplo"
      />
    </div>
  );
};

export default AnimatedHeadings;
