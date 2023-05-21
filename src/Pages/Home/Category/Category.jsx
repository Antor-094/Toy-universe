import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import SportsCars from "./SportsCars";
import OffRoadVehicles from "./OffRoadVehicles.jsx";
import EmergencyVehicles from "./EmergencyVehicles";
import AOS from "aos";
import "aos/dist/aos.css";

const Category = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      delay: 200,
      offset: 120,
    });
  }, []);

  const [toys, setToys] = useState([]);
  useEffect(() => {
    fetch("https://toy-universe-server-liart.vercel.app/allToy")
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, []);

  const toyComponents = {
    SportsCars: SportsCars,
    OffRoadVehicles: OffRoadVehicles,
    EmergencyVehicles: EmergencyVehicles,
  };

  const [showAll, setShowAll] = useState(false);

  const handleToggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div>
      <h1 className="text-center font-bold text-3xl text-[#1F2937]">See Toys By Category</h1>
      <Tabs className="mt-20 w-[80%] mx-auto min-h-[400px]" data-aos="zoom-in-up">
      <TabList className="text-center text-neutral border">
        {Object.keys(toyComponents).map((category) => (
          <Tab key={category}>{category}</Tab>
        ))}
      </TabList>

      {Object.keys(toyComponents).map((category) => {
        const filteredToys = toys.filter((toy) => toy.category === category);
        const showLimited = showAll ? filteredToys.length : 3;
        const displayedToys = filteredToys.slice(0, showLimited);

        return (
          <TabPanel key={category}>
            <div className="grid md:grid-cols-3 gap-3 justify-around mt-2">
              {displayedToys.map((toy) => {
                const ToyComponent = toyComponents[category];
                return <ToyComponent key={toy._id} toy={toy} />;
              })}
            </div>
            {filteredToys.length > 3 && (
              <div className="text-center mt-4">
                <button
                  className="text-white bg-[#1F2937] hover:bg-[#555273] py-2 px-2 rounded-md"
                  onClick={handleToggleShowAll}
                >
                  {showAll ? "See Less" : "See More"}
                </button>
              </div>
            )}
          </TabPanel>
        );
      })}
    </Tabs>
    </div>
  );
};

export default Category;
