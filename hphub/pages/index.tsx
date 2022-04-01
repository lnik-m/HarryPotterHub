import { MainPage } from '../components';
import { withLayout } from '../Layout/Layout';

const Home = () => {
  return (
    <>
      <MainPage />
    </>
  );
};

export default withLayout(Home);