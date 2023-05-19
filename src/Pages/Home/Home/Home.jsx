
import Gallery from '../Gallery/Gallery';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import ServicesDetails from '../ExtraSection1/ServicesDetails';

const Home = () => {

  return (
    <div>
      <Banner />
     
      <Gallery />
      <Category></Category>
      <ServicesDetails></ServicesDetails>
    </div>
  );
};

export default Home;
