// libs
import React from "react";
// components
import NavBarItem from "../../components/NavBarItem";
// dataSources
import navBarMenuList from "@/dataSources/navBarMenu";
// others
import styles from "./styles.module.scss";

const NavBarMenu = () => (
  <div className={styles["nav-bar-menu-wrapper"]}>
    {navBarMenuList.map(({ carSeries, src, width, height }) => (
      <NavBarItem key={carSeries} {...{ carSeries, src, width, height }} />
    ))}
  </div>
);

export default NavBarMenu;
