import Link from 'next/link';
import React from "react";
import { Character } from '../../../interfaces/house.interface';
import styles from "./Slide.module.scss";
import Image from 'next/image';

const Slide = ({ name, house, image }: Character) => {
  const path = house == "" ? `/Other/${name}` : `/${house}/${name}`;
  return (
    <Link href={path}>
      <div className={styles.container}>
        {image != undefined && image != "" && (
          <div className={styles.image}>
            <Image src={image} width='300' height='400'/>
          </div>
        )}
        <div className={styles.name}>{name}</div>
      </div>
    </Link>
  );
};

export default Slide;
