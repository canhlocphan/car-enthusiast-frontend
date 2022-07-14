// libs
import React from "react";
import Image from "next/image";
// others
import styles from "./styles.module.scss";

const NavBarItem = ({ carSeries, src, width, height }) => (
  <div className={styles["nav-bar-item-wrapper"]}>
    <div className={styles["nav-bar-item-wrapper-inner"]}>
      <Image alt={carSeries} objectFit="contain" {...{ src, width, height }} />
      <div className={styles["nav-bar-item-text"]}>{carSeries}</div>
    </div>
    <div className={styles["nav-bar-item-border"]} />
  </div>
);

export default NavBarItem;
