// libs
import React from "react";
// components
import NavBarItem from "../../components/NavBarItem";
import MoreMenu from "../../components/MoreMenu";
// dataSources
import navBarMenuList from "@/dataSources/navBarMenu";
// others
import styles from "./styles.module.scss";

const NavBarMenu = () => (
  <div className={styles["nav-bar-menu-wrapper"]}>
    <div className={styles["nav-bar-menu-wrapper-inner"]}>
      {navBarMenuList.map(({ carSeries, src, width, height }) => (
        <NavBarItem key={carSeries} {...{ carSeries, src, width, height }} />
      ))}
    </div>
    <MoreMenu />
  </div>
);

export default NavBarMenu;
