import { useState } from "react";
import BurgerIcon from "./burger.svg";
import CloseIcon from "./ChevronRight.svg";
import cn from "classnames";
import styles from "./Sidebar.module.scss";
import { SidebarProps } from "./Sidebar.props";
import { MenuItems } from "../../helpers/helpers";
import Link from 'next/link';

const Sidebar = ({ className }: SidebarProps): JSX.Element => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  return (
    <>
      <BurgerIcon onClick={() => setIsOpened(!isOpened)} />

      <div
        className={cn(styles.sidebar, {
          [styles.opened]: isOpened,
          [styles.closed]: !isOpened,
        })}
      >
        <div className={styles.top}>
          <CloseIcon onClick={() => setIsOpened(!isOpened)} />
        </div>
        <div className={styles.menu}>
          <nav>
            <Link href={`/`} key={`Main0`}>
              <a className={styles.menuItem}>Main</a>
            </Link>

            <Link href={`/Test`} key={`Test1`}>
              <a className={styles.menuItem}>Test</a>
            </Link>

            {MenuItems.map((m, index) => (
              <Link href={`/${m.route}`} key={m.id+index} passHref>
                <a
                  className={styles.menuItem}
                  onClick={() => setIsOpened(!isOpened)}
                >
                  {m.name}
                </a>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
