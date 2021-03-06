import Layout from '../../Layout/Layout';
import { GetStaticProps, GetStaticPaths } from "next";
import { MenuItems } from "../../helpers/helpers";
import { CharacterProps } from '../../interfaces/house.interface';
import { useRouter } from 'next/router';
import Slider from '../../components/Slider/Slider';

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
      {currentHouse != "Other" && <h2>Welcome to {currentHouse}!</h2>}
      <Slider characters={currentCharacters} />
      <p>Slide to see more characters {`->`}</p>
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
