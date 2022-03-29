import { SidebarProps } from './Sidebar.props';
import styles from './Sidebar.module.scss';
import cn from 'classnames';
import ArrowIcon from './Arrow.svg';

export const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
	const Houses = ['Griffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw', 'Other'];

	return(
		<div className={cn(className, styles.sidebar)}>
			{Houses.map(h => 
			<div className={styles.sidebarItem}>
				{h}
				<ArrowIcon className={cn({
					[styles.openedArrow]: false }
				)}/>
			</div>)}
		</div>
	);
};