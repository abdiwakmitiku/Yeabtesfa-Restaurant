import React from "react";
import MenuCard from "./MenuCard";
import { FoodInfos } from "../Data";

function Menu() {
  return (
    <>
      <section>
        {FoodInfos.map((infos) => (
          <MenuCard data={infos} />
        ))}
      </section>
    </>
  );
}

export default Menu;
