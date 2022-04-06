import { HeaderProps } from './Header.props';
import styles from './Header.module.scss';
import cn from 'classnames';
import HPLogo from './HPlogo.svg';
import Link from 'next/link';

export const Header = ({ className }: HeaderProps): JSX.Element => {

	return(
		<div className={cn(className, styles.header)}>
			<Link href='/'>
				<HPLogo className={styles.logo} />
			</Link>
		</div>
	);
};