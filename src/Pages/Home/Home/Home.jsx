
import Gallery from '../Gallery/Gallery';
import Banner from '../Banner/Banner';
import ToyCategoryTab from '../CategoryTab/ToyCategoryTab';

const Home = () => {


//   const handleTabSelect = (index) => {
//     setTabIndex(index);
//   };

//   const categories = [
//     {
//       name: 'Cars',
//       subcategories: [
//         {
//           name: 'Sports Cars',
//           products: [
//             {
//               name: 'Ferrari 488 GTB',
//               price: 49.99,
//               rating: 4.5,
//               image: 'https://via.placeholder.com/150',
//             },
//             {
//               name: 'Lamborghini Huracan',
//               price: 59.99,
//               rating: 4.8,
//               image: 'https://via.placeholder.com/150',
//             },
//             {
//               name: 'Porsche 911 GT3',
//               price: 54.99,
//               rating: 4.6,
//               image: 'https://via.placeholder.com/150',
//             },
//           ],
//         },
//         {
//           name: 'SUVs',
//           products: [
//             {
//               name: 'Jeep Wrangler',
//               price: 39.99,
//               rating: 4.2,
//               image: 'https://via.placeholder.com/150',
//             },
//             {
//               name: 'Ford Explorer',
//               price: 44.99,
//               rating: 4.4,
//               image: 'https://via.placeholder.com/150',
//             },
//             {
//               name: 'Toyota 4Runner',
//               price: 42.99,
//               rating: 4.3,
//               image: 'https://via.placeholder.com/150',
//             },
//           ],
//         },
//         {
//           name: 'Trucks',
//           products: [
//             {
//               name: 'Ford F-150',
//               price: 49.99,
//               rating: 4.5,
//               image: 'https://via.placeholder.com/150',
//             },
//             {
//               name: 'Chevrolet Silverado',
//               price: 54.99,
//               rating: 4.6,
//               image: 'https://via.placeholder.com/150',
//             },
//             {
//               name: 'Ram 1500',
//               price: 52.99,
//               rating: 4.5,
//               image: 'https://via.placeholder.com/150',
//             },
//           ],
//         },
//       ],
//     },
//   ];

  return (
    <div>
      <Banner />
     
      <Gallery />
      <ToyCategoryTab></ToyCategoryTab>
    </div>
  );
};

export default Home;
