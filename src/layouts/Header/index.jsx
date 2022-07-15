// libs
import React from "react";
// components
import BranchLogo from "./mains/BranchLogo";
import NavBarMenu from "./mains/NavBarMenu";
// others
import styles from "./styles.module.scss";

const Header = () => (
  <header className={styles["header-wrapper"]}>
    <div className={styles["header-wrapper-inner"]}>
      <BranchLogo />
      <NavBarMenu />
    </div>
    <div className={styles["header-wrapper-border"]} />
  </header>
);

export default Header;
