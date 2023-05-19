// import React from 'react';

import {  useEffect, useState } from "react";
import SinglePerson from "./SinglePerson";

const TestimonialSection = () => {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    fetch("team.json")
      .then((res) => res.json())
      .then((data) => {
        setTeams(data.team);
        console.log(teams)
      });
  }, []);
  return (
    <div className="my-12">
      <h1 className="text-4xl font-bold text-center text-[#555273]">
        Meet Our teams
      </h1>
      <div className="grid md:grid-cols-3 md:w-[90%] mx-auto p-2 gap-3">
        {teams.map(team =><SinglePerson key={team.id} team={team}></SinglePerson> )}
      </div>
    </div>
  );
};

export default TestimonialSection;
