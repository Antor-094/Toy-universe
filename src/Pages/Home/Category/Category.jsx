import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import SportsCars from "./SportsCars";
import OffRoadVehicles from "./OffRoadVehicles.jsx";
import EmergencyVehicles from "./EmergencyVehicles";
const Category = () => {
  const [toys, setToys] = useState([]);
  useEffect(() => {
    fetch("category.json")
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, []);
  const SportsCarToys = toys.filter((toy) => toy.category == "SportsCars");
  const OffRoadVehiclesToys = toys.filter((toy) => toy.category == "OffRoadVehicles");
  const EmergencyVehiclesToys = toys.filter(
    (toy) => toy.category == "EmergencyVehicles"
  );
  // console.log(SportsCars);
  return (
    <Tabs className="mt-20 w-[80%] mx-auto"> 
      <TabList className="text-center text-neutral border">
        <Tab>SportsCars</Tab>
        <Tab>OffRoadVehicles</Tab>
        <Tab>EmergencyVehicles</Tab>
      </TabList>

      <TabPanel>
        <div className="flex flex-wrap justify-around mt-2">
          {SportsCarToys.map((toy) => (
            <SportsCars key={toy.id} toy={toy} />
            
          ))}
        </div>
      </TabPanel>
      <TabPanel>
        <div className="flex flex-wrap justify-around mt-2">
          {OffRoadVehiclesToys.map((toy) => (
            <OffRoadVehicles key={toy.id} toy={toy} />
          ))}
        </div>
      </TabPanel>
      <TabPanel>
        <div className="flex flex-wrap justify-around mt-2">
          {EmergencyVehiclesToys.map((toy) => (
            <EmergencyVehicles key={toy.id} toy={toy} />
          ))}
        </div>
      </TabPanel>
    </Tabs>
  );
};

export default Category;
