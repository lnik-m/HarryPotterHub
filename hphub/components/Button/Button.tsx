import cn from 'classnames';
import { ButtonProps } from './Button.props';
import styles from './Button.module.scss';
import Link from 'next/link';

export const Button = ( { children, link='#' }:ButtonProps ): JSX.Element => {

	return (
    <Link href={link}>
      <button className={cn(styles.button)}>{children}</button>
    </Link>
  );
};