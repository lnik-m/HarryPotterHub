import Layout from '../../Layout/Layout';
import { GetStaticProps, GetStaticPaths } from "next";
import { MenuItems } from "../../helpers";
import { CharacterProps } from '../../interfaces/house.interface';
import { useRouter } from 'next/router';

const House = ({ characters }: CharacterProps) => {
  const router = useRouter();
  const currentHouse = router.query.House;

  const getCurrentCharacters = () => {
    const currentCharacters = [];
    for (const character of characters) {
      if (character.house == currentHouse) currentCharacters.push(character);
      if (currentHouse=='Other' && character.house == '') currentCharacters.push(character);
    }
    return currentCharacters;
  };

  const currentCharacters = getCurrentCharacters();

  return (
    <Layout>
      <p>House is: {currentHouse}</p>
      {currentCharacters && currentCharacters.map((i) => <p>{i.name}</p>)}
    </Layout>
  );
};

export default House;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: MenuItems.map((m) => `/${m.route}`),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async () => {

  const res = await fetch(`http://hp-api.herokuapp.com/api/characters`);
  const characters: CharacterProps = await res.json();

  return {
    props: {
      characters,
    },
  };
};
