// libs
import React from "react";
import Image from "next/image";
// others
import styles from "./styles.module.scss";

const BranchLogo = () => (
  <div className={styles["branch-logo-wrapper"]}>
    <Image
      src="https://cdn.ui.porsche.com/porsche-design-system/marque/porsche-marque-trademark.medium.min.aa801f42028b1c385a5e26ae115da598@2x.png"
      width="120px"
      height="72px"
      alt="logo-branch"
      objectFit="contain"
    />
  </div>
);

export default BranchLogo;
