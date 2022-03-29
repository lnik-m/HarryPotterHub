import { HeaderProps } from './Header.props';
import styles from './Header.module.scss';
import cn from 'classnames';
import HPLogo from './HPlogo.svg';
import MenuLogo from './Menu.svg';
import Link from 'next/link';

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {

	return(
		<div className={cn(className, styles.header)}>
			<Link href='/'>
				<HPLogo />
			</Link>

			<MenuLogo className={styles.menu} />
		</div>
	);
};