import React from "react";
import MenuCard from "./MenuCard";
import { FoodInfos } from "../Data";


function Menu() {
  return (
    <section className="menu-section">
      {FoodInfos.map((infos, index) => (
        <MenuCard key={index} data={infos} />
      ))}
    </section>
  );
}

export default Menu;
