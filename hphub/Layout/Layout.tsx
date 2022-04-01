import { LayoutProps } from './Layout.props';
import styles from './Layout.module.scss';
import cn from 'classnames';
import { Header } from './Header/Header';
import { Menu } from './Menu/Menu';
import { FunctionComponent } from 'react';

const Layout = ({ children }: LayoutProps): JSX.Element => {
	
	return(
		<div className={styles.layout}>
			<Header className={styles.header} />
			<Menu className={styles.menu} />
			<div className={styles.body}>
				{children}
			</div>
		</div>
	);
};

export const withLayout =<T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
	return function withLayoutComponent(props: T): JSX.Element {
		return (
			<Layout>
				<Component {...props} />
			</Layout>
		);
	};
};