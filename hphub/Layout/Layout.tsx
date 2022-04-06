import { LayoutProps } from "./Layout.props";
import styles from "./Layout.module.scss";
import { Header } from "./Header/Header";
import { Menu } from "./Menu/Menu";
import Sidebar from './Sidebar/Sidebar';

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div className={styles.layout}>
      <Header className={styles.header} />
      <Menu className={styles.menu} />
      <Sidebar className={styles.sidebar} />
      <div className={styles.body}>{children}</div>
    </div>
  );
};

export default Layout;