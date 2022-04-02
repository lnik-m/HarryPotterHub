import { MenuProps } from './Menu.props';
import styles from './Menu.module.scss';
import cn from 'classnames';
import Link from 'next/link';
import { MenuItems } from '../../helpers';

export const Menu = ({ className }: MenuProps): JSX.Element => {
	return (
    <nav className={cn(className, styles.menu)}>
      <Link href={`/Test`} key={`Test`}>
        <a className={styles.menuItem}>Test</a>
      </Link>

      {MenuItems.map((m) => (
        <Link href={m.route} key={m.id} passHref>
          <a className={styles.menuItem}>{m.name}</a>
        </Link>
      ))}
    </nav>
  );
};
