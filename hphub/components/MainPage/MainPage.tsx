
import { MainPageProps } from './MainPage.props';
import styles from './MainPage.module.scss';
import { Button } from '../Button/Button';

export const MainPage = ( { className, ...props }:MainPageProps ): JSX.Element => {
	const text = `Nice to see you here! This is a place that 
				is surrounded by magic. Here you can find out 
				which house you belong to. Or maybe you are a Muggle?`;

	return (
		<div className={styles.main}>
			<p className={styles.text}>{text}</p>
			<Button link='Test'>START TEST</Button>
		</div>
	);
};