import { MenuProps } from './Menu.props';
import styles from './Menu.module.scss';
import cn from 'classnames';
import Link from 'next/link';

export const Menu = ({ className }: MenuProps): JSX.Element => {
	const MenuItems = ['Test', 'Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw', 'Other'];

	return (
    <nav className={cn(className, styles.menu)}>
      {MenuItems.map((m) => (
        <Link href={m} key={m}>
          <a className={styles.menuItem}>{m}</a>
        </Link>
      ))}
    </nav>
  );
};
