// import React, { useEffect } from "react";
// import styles from "./Menu.module.css";

// function MenuCard({ data }) {
//   const properties = Object.keys(data)
//     .filter((key) => key.startsWith("Property"))
//     .map((key) => data[key]);

//   let flip = true;

//   return (
//     <div className={styles.page}>
//       <header>
//         <div className={styles.logo}>
//           <img src={data.logo} alt="Logo" />
//         </div>
//         <h1>{data.title}</h1>
//         <div className={styles.title} />
//       </header>

//       <section className={styles.container}>
//         {properties.map((property, idx) => {
//           let content;

//           if (flip) {
//             content = (
//               <div key={idx} className={styles["food-section"]}>
//                 <div className={styles.right}>
//                   <div className={styles.food}>
//                     <h3>{property.type}</h3>
//                   </div>
//                   <div className={styles.price}>
//                     {[property.food1, property.food2, property.food3].map(
//                       (food, i) =>
//                         food.name && (
//                           <h4 key={i}>
//                             {food.name} ----{" "}
//                             <span className={styles.Fprice}>{food.price}</span>
//                             <br />
//                             <span className={styles.nameEN}>{food.nameEN}</span>
//                           </h4>
//                         )
//                     )}
//                   </div>
//                 </div>
//                 <div className={styles.left}>
//                   <div className={styles.pic}>
//                     <img src={property.image} alt={property.type} />
//                   </div>
//                 </div>
//               </div>
//             );
//           } else {
//             content = (
//               <div key={idx} className={styles["food-section"]}>
//                 <div className={styles.left}>
//                   <div className={styles.pic}>
//                     <img src={property.image} alt={property.type} />
//                   </div>
//                 </div>
//                 <div className={styles.right}>
//                   <div className={styles.food}>
//                     <h3>{property.type}</h3>
//                   </div>
//                   <div className={styles.price}>
//                     {[property.food1, property.food2, property.food3].map(
//                       (food, i) =>
//                         food.name && (
//                           <h4 key={i}>
//                             {food.name} ----{" "}
//                             <span className={styles.Fprice}>{food.price}</span>
//                             <br />
//                             <span className={styles.nameEN}>{food.nameEN}</span>
//                           </h4>
//                         )
//                     )}
//                   </div>
//                 </div>
//               </div>
//             );
//           }

//           flip = !flip; 
//           return content;
//         })}
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

  let flip = true;

  return (
    <div className={styles.page}>
      <header>
        <div className={styles.logo}>
          <img src={data.logo} alt="Logo" />
        </div>
        <h1>{data.title}</h1>
        <div className={styles.title} />
      </header>

      <section className={styles.container}>
        {properties.map((property, idx) => {
          const leftContent = (
            <div className={styles.left}>
              <div className={styles.pic}>
                <img src={property.image} alt={property.type} />
              </div>
            </div>
          );

          const rightContent = (
            <div className={styles.right}>
              <div className={styles.food}>
                <h3>{property.type}</h3>
              </div>
              <div className={styles.price}>
                {[property.food1, property.food2, property.food3].map(
                  (food, i) =>
                    food.name && (
                      <h4 key={i}>
                        {food.name} ----{" "}
                        <span className={styles.Fprice}>{food.price}</span>
                        <br />
                        <span className={styles.nameEN}>{food.nameEN}</span>
                      </h4>
                    )
                )}
              </div>
            </div>
          );

          const section = (
            <div key={idx} className={styles["food-section"]}>
              {flip ? (
                <>
                  {rightContent}
                  {leftContent}
                </>
              ) : (
                <>
                  {leftContent}
                  {rightContent}
                </>
              )}
            </div>
          );

          flip = !flip;
          return section;
        })}
      </section>
    </div>
  );
}

export default MenuCard;
