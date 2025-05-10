import React from "react";
import Logo from "../../assets/restLogo.png";
import food1 from "../../assets/Images/food1.png";
import food2 from "../../assets/Images/food2.png";
import food3 from "../../assets/Images/food3.png";
import food4 from "../../assets/Images/food4.png";
import food6 from "../../assets/Images/food6.png";
import Burger from "../../assets/Images/Burger.png";
import Tacos from "../../assets/Images/Tacos.png";
import Pizza from "../../assets/Images/Pizza.png";
import Chips from "../../assets/Images/Chips.png";
import Coffee from "../../assets/Images/Coffee.png";
import Tea from "../../assets/Images/Tea.png";
import SoftDrinks from "../../assets/Images/SoftDrinks.png";

function MenuCard({ data }) {
  const properties = Object.keys(data)
    .filter((key) => key.startsWith("Property"))
    .map((key) => data[key]);

  return (
    <div className="page">
      <header>
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
        <h1>{data.title}</h1>
      </header>

      <section className="container">
        {properties.map((property, idx) => (
          <div className="food-section" key={idx}>
            <div className="right">
              <div className="food">
                <h3>{property.type}</h3>
              </div>
              <div className="price">
                {[property.food1, property.food2, property.food3].map(
                  (food, i) =>
                    food.name && (
                      <h4 key={i}>
                        {food.name} ------ {food.price} <br />
                        {food.nameEN}
                      </h4>
                    )
                )}
              </div>
            </div>
            <div className="left">
              <div className="pic">
                <img src={property.image} alt={property.type} />
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default MenuCard;
