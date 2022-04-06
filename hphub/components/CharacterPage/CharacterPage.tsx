import Image from 'next/image';
import styles from "./CharacterPage.module.scss";
import { CharacterPageProps } from "./CharacterPage.props";

export const CharacterPage = ({character}: CharacterPageProps): JSX.Element => {
  return (
    <>
      <div className={styles.name}>{character?.name} </div>
      <ul className={styles.info}>
        <li>{character?.actor}</li>
        <li>{character?.house != "" && character?.house}</li>
        {character?.patronus?.trim() == "" ? (
          <li>No patronus</li>
        ) : (
          <li>Patronus is {character?.patronus}</li>
        )}
      </ul>
      {character?.image?.trim() == "" ? (
        <Image src={character?.image} width="300px" height="400px" />
      ) : (
        <div>no photo</div>
      )}
    </>
  );
};