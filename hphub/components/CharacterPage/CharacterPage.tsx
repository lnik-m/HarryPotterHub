import Image from "next/image";
import styles from "./CharacterPage.module.scss";
import { CharacterPageProps } from "./CharacterPage.props";

export const CharacterPage = ({
  character,
}: CharacterPageProps): JSX.Element => {
  return (
    <div className={styles.container}>
      <h2 className={styles.name}>{character?.name} </h2>
      <ul className={styles.personalInfo}>
        {character?.actor != "" && <li>Actor: {character?.actor}</li>}
        {character?.house != "" && <li>House: {character?.house}</li>}
        {character?.species != "" && <li>Species: {character?.species}</li>}
        {character?.gender != "" && <li>Gender: {character?.gender}</li>}
        {character?.dateOfBirth != "" && (
          <li>Date of birth: {character?.dateOfBirth}</li>
        )}
        {character?.eyeColour != "" && (
          <li>Eye colour: {character?.eyeColour}</li>
        )}
        {character?.hairColour != "" && (
          <li>Hair colour: {character?.hairColour}</li>
        )}
        {character?.alive ? (
          <li>{character?.name} is alive</li>
        ) : (
          <li>{character?.name} isn't alive</li>
        )}

        {character?.ancestry != "" && <li>Status: {character?.ancestry}</li>}
        {character?.wand?.wood != "" && (
          <li>Wand's wood: {character?.wand?.wood}</li>
        )}
        {character?.wand?.core != "" && (
          <li>Wand's core: {character?.wand?.core}</li>
        )}
        {character?.wand?.length != "" && (
          <li>Wand's length: {character?.wand?.length}</li>
        )}
        {character?.patronus != "" && (
          <li>Patronus is {character?.patronus}</li>
        )}
      </ul>

      <div className={styles.photo}>
        {(character?.image != undefined && character?.image != "") ?
          <Image src={character?.image} width="300px" height="400px" />
        : <>No photo</>}
      </div>
    </div>
  );
};
