import { useRouter } from 'next/router';
import Layout from '../Layout/Layout';
import { CharacterProps} from '../interfaces/house.interface';
import { GetStaticProps, GetStaticPaths } from "next";

const House = ( { characters }: CharacterProps ) => {
  const router = useRouter();
  const { house } = router.query;

  return (
    <Layout>
      <p>House is {house}</p>
      <div>
        {characters.map(i => (
        <p key={i.name}>{i.wand.length}</p>
        ))}
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("http://hp-api.herokuapp.com/api/characters");
  const characters = await res.json();

  return {
    props: {
      characters,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
		{ params: { house: 'Gryffindor' } },
		{ params: { house: 'Slytherin' } },
		{ params: { house: 'Hufflepuff' } },
		{ params: { house: 'Ravenclaw' } },
		{ params: { house: 'Other' } },
    ],
    fallback: false,
  };
};

export default House;