// libs
import React from "react";
import { MoreOutlined } from "@ant-design/icons";
// others
import styles from "./styles.module.scss";

const MoreMenu = () => (
  <div className={styles["more-menu-wrapper"]}>
    <MoreOutlined className={styles["more-menu-icon"]} />
    <div className={styles["more-menu-border"]} />
    <div className={styles["more-menu-overlay"]} />
  </div>
);

export default MoreMenu;
