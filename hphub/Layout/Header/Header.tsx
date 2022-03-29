import { HeaderProps } from './Header.props';
import styles from './Header.module.scss';
import cn from 'classnames';

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {

	return(
		<div className={cn(className, styles.header)}>
			Header
		</div>
	);
};