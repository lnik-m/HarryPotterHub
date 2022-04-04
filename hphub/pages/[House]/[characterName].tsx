import { GetStaticPaths, GetStaticProps } from 'next';
import { MenuItems } from '../../helpers/helpers';
import Layout from '../../Layout/Layout';
import { useRouter } from 'next/router';
import { CharacterProps } from '../../interfaces/house.interface';

const Character = ({characters}: CharacterProps) => {
	const router = useRouter();
	const { House, characterName } = router.query;

  const currentCharacter = characters.find((c) => c.name == characterName);
  
	return (
    <Layout>
      It is a {characterName} page, house is {House}, actor is {currentCharacter?.actor}
    </Layout>
  );
};
export default Character;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [];

  for (const m of MenuItems) {
    for (const c of m.items) {
      paths.push(`/${m.route}/${c}`);
    }
  }

    return {
      paths,
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

