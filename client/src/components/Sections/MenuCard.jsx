// import React from "react";
// import  "./Menu.module.css";

// function MenuCard({ data }) {
//   const properties = Object.keys(data)
//     .filter((key) => key.startsWith("Property"))
//     .map((key) => data[key]);

//   return (
//     <div className="page">
//       <header>
//         <div className="logo">
//           <img src={data.logo} alt="Logo" />
//         </div>
//         <h1>{data.title}</h1>
//       </header>

//       <section className="container">
//         {properties.map((property, idx) => (
//           <div className="food-section" key={idx}>
//             <div className="right">
//               <div className="food">
//                 <h3>{property.type}</h3>
//               </div>
//               <div className="price">
//                 {[property.food1, property.food2, property.food3].map(
//                   (food, i) =>
//                     food.name && (
//                       <h4 key={i}>
//                         {food.name} ------ {food.price} <br />
//                         {food.nameEN}
//                       </h4>
//                     )
//                 )}
//               </div>
//             </div>
//             <div className="left">
//               <div className="pic">
//                 <img src={property.image} alt={property.type} />
//               </div>
//             </div>
//           </div>
//         ))}
//       </section>
//     </div>
//   );
// }

// export default MenuCard;

import React from "react";
import styles from "./Menu.module.css";

function MenuCard({ data }) {
  const properties = Object.keys(data)
    .filter((key) => key.startsWith("Property"))
    .map((key) => data[key]);

  return (
    <div className={styles.page}>
      <header>
        <div className={styles.logo}>
          <img src={data.logo} alt="Logo" />
        </div>
        <h1>{data.title}</h1>
      </header>

      <section className={styles.container}>
        {properties.map((property, idx) => (
          <div key={idx} className={styles["food-section"]}>
            <div className={styles.right}>
              <div className={styles.food}>
                <h3>{property.type}</h3>
              </div>
              <div className={styles.price}>
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
            <div className={styles.left}>
              <div className={styles.pic}>
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

