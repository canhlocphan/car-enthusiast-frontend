// others
import styles from "./styles.module.scss";

const PageContainer = ({ children }) => (
  <section className={styles.container}>{children}</section>
);

export default PageContainer;
