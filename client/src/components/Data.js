import Logo from "../../assets/restLogo.png";
import foodP1 from "../../assets/Images/food1.png";
import foodP2 from "../../assets/Images/food2.png";
import foodP3 from "../../assets/Images/food3.png";
import foodP4 from "../../assets/Images/food4.png";
import foodP6 from "../../assets/Images/food6.png";
import Burger from "../../assets/Images/Burger.png";
import Tacos from "../../assets/Images/Tacos.png";
import Pizza from "../../assets/Images/Pizza.png";
import Chips from "../../assets/Images/Chips.png";
import Coffee from "../../assets/Images/Coffee.png";
import Tea from "../../assets/Images/Tea.png";
import SoftDrinks from "../../assets/Images/SoftDrinks.png";

export const FoodInfos = [
  {
    logo: "../assets/restLogo.png",
    title: "Food-Menu",
    Property1: {
      image: foodP1,
      type: "ጥብስ/Tibs",
      food1: {
        name: "ዱለት ጥብስ 1 k.g",
        nameEN: "Minced Organ meat",
        price: "2300Birr",
      },
      food2: {
        name: "አዋዜ ጥብስ 1 k.g",
        nameEN: "Awaze paste",
        price: "2700Birr",
      },
      food3: {
        name: "ሸክላ ጥብስ 1 kg",
        nameEN: "Shekla Tibs",
        price: "2500Birr",
      },
    },
    Property2: {
      image: foodP2,
      type: "በያይነት/Beyaynet",
      food1: {
        name: "የፆም በያይነት",
        nameEN: "Vegetarian Platter",
        price: "1270Birr",
      },
      food2: {
        name: "በያይነት በስጋ",
        nameEN: "with meat",
        price: "1550Birr",
      },
      food3: {
        name: "",
        nameEN: "",
        price: "",
      },
    },
    Property3: {
      image: foodP3,
      type: "ክትፎ/Kitfo",
      food1: {
        name: "ጥሬ ክትፎ 1 k.g",
        nameEN: "Raw Kitfo",
        price: "2400Birr",
      },
      food2: {
        name: "ለብለብ ክትፎ 1 k.g",
        nameEN: "lightly cooked kitfo",
        price: "2500Birr",
      },
      food3: {
        name: "ክትፎ ጥብስ 1 k.g",
        nameEN: "Well-Done kitfo",
        price: "2700Birr",
      },
    },
    Property4: {
      image: foodP4,
      type: "ፍስክ ወጥ/Stew",
      food1: {
        name: "ዶሮ ውጥ",
        nameEN: "Chicken Stew",
        price: "1200Birr",
      },
      food2: {
        name: "ስጋ ወጥ",
        nameEN: "Beef Stew",
        price: "1000Birr",
      },
      food3: {
        name: "",
        nameEN: "",
        price: "",
      },
    },
    Property5: {
      image: foodP6,
      type: "Other Dishes",
      food1: {
        name: "ጎመን በስጋ",
        nameEN: "Cabbage with Beef",
        price: "950Birr",
      },
      food2: {
        name: "ሽሮ ወጥ",
        nameEN: "Shiro Stew",
        price: "450Birr",
      },
      food3: {
        name: "ፍርፍር በስጋ",
        nameEN: "Firfir With Beef",
        price: "700Birr",
      },
    },
  },
  {
    logo: "../assets/restLogo.png",
    title: "Fast-Foods",
    Property1: {
      image: Burger,
      type: "በርገር/Burger",
      food1: {
        name: "እስፔሻል በርገር",
        nameEN: "Special Burger",
        price: "650Birr",
      },
      food2: {
        name: "ቺዝ በርገር",
        nameEN: "Cheese Burger",
        price: "600Birr",
      },
      food3: {
        name: "ቢፍ በርገር",
        nameEN: "Beef Burger",
        price: "700Birr",
      },
    },
    Property2: {
      image: Tacos,
      type: "ታኮስ/Tacos",
      food1: {
        name: "ቢሪያ ታኮስ",
        nameEN: "Birria Tacos",
        price: "650Birr",
      },
      food2: {
        name: "የአትክልት ታኮስ",
        nameEN: "Veggie Tacos",
        price: "650Birr",
      },
      food3: {
        name: "የስጋ ታኮስ",
        nameEN: "Meat Tacos",
        price: "700Birr",
      },
    },
    Property3: {
      image: Pizza,
      type: "ፒዛ/Pizza",
      food1: {
        name: "እስፔሻል ፒዛ",
        nameEN: "Special Pizza",
        price: "750Birr",
      },
      food2: {
        name: "ቺዝ ፒዛ",
        nameEN: "Cheese Pizza",
        price: "650Birr",
      },
      food3: {
        name: "የፆም ቱና ፒዛ",
        nameEN: "Fasting Tuna Pizza",
        price: "600Birr",
      },
    },
    Property4: {
      image: Chips,
      type: "Other Fastfoods",
      food1: {
        name: "እስፔሻል ችብስ",
        nameEN: "Special Chips",
        price: "250Birr",
      },
      food2: {
        name: "ሻውራማ ሳንዱች",
        nameEN: "Shawarma Sandwich",
        price: "600Birr",
      },
      food3: {
        name: "የዶሮ እግር",
        nameEN: "Chicken Leg",
        price: "700Birr",
      },
    },
  },
  {
    logo: "../assets/restLogo.png",
    title: "Hot-Drinks",
    Property1: {
      image: Coffee,
      type: "ቡና/Coffee",
      food1: {
        name: "ጥቁር ቡና",
        nameEN: "Black Coffee",
        price: "50Birr",
      },
      food2: {
        name: "ካፑቺኖ",
        nameEN: "Cappuccino",
        price: "65Birr",
      },
      food3: {
        name: "ማኪያቶ",
        nameEN: "Makiato",
        price: "60Birr",
      },
    },
    Property2: {
      image: Tea,
      type: "ሻይ/Tea",
      food1: {
        name: "ሻይ",
        nameEN: "Tea",
        price: "40Birr",
      },
      food2: {
        name: "ሞሪንጋ ሻይ",
        nameEN: "Moringa Tea",
        price: "55Birr",
      },
      food3: {
        name: "የቀሽር ሻይ",
        nameEN: "Ginger Tea",
        price: "50Birr",
      },
    },
    Property3: {
      image: SoftDrinks,
      type: "Others",
      food1: {
        name: "ወተት",
        nameEN: "Milk",
        price: "50Birr",
      },
      food2: {
        name: "ቡና & ሻይ እስፕሪስ",
        nameEN: "Coffee & Tea Sprice",
        price: "60Birr",
      },
      food3: {
        name: "የለውዝ ሻይ",
        nameEN: "Nut Tea",
        price: "65Birr",
      },
    },
  },
];
