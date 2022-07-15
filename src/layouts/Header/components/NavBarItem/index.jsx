// libs
import React from "react";
import Image from "next/image";
// others
import styles from "./styles.module.scss";

const NavBarItem = ({ carSeries, src, width, height }) => (
  <div className={styles["nav-bar-item-wrapper"]}>
    <div className={styles["nav-bar-item-wrapper-inner"]}>
      <div className={styles["nav-bar-item-image"]}>
        <Image
          alt={carSeries}
          objectFict="ontain"
          {...{ src, width, height }}
        />
      </div>
      <div className={styles["nav-bar-item-text"]}>{carSeries}</div>
    </div>
    <div className={styles["nav-bar-item-border"]} />
    <div className={styles["nav-bar-item-overlay"]} />
  </div>
);

export default NavBarItem;
