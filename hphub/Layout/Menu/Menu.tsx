import { MenuProps } from './Menu.props';
import styles from './Menu.module.scss';
import cn from 'classnames';
import Link from 'next/link';
import { MenuItems } from '../../helpers/helpers';

export const Menu = ({ className }: MenuProps): JSX.Element => {
	return (
    <nav className={cn(className, styles.menu)}>
      <Link href={`/Test`} key={`Test1`}>
        <a className={styles.menuItem}>Test</a>
      </Link>

      {MenuItems.map((m, index) => (
        <Link href={`/${m.route}`} key={m.id+index} passHref>
          <a className={styles.menuItem}>{m.name}</a>
        </Link>
      ))}
    </nav>
  );
};
