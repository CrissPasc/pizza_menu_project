import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // const titleStyle = {
  //   color: "red",
  //   fontSize: "30px",
  //   textTransform: "uppercase",
  // };
  // // titleStyle pentru css
  const style = {};
  return (
    <header className="header">
      {/* <h1 style={titleStyle}>Fast React Pizza Co.</h1> */}
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  );
}
// parrent
function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={10}
      />
      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, mozarella, mushrooms, and onion"
        price={12}
        photoName="pizzas/funghi.jpg"
      />
    </main>
  );
}

// child
function Pizza(props) {
  console.log(props);

  return (
    <div className="pizza">
      <img
        src={props.photoName}
        alt={props.name}
        // src="pizzas/spinaci.jpg"  alt="Pizza Spinaci" // normal way vs  with props ^
      />
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <span>{props.price + 3}</span>
      </div>
    </div>
  );
}

function Footer() {
  // modul complicat -- doar react fara JSX
  //  return React.createElement("footer", null, "We're currently open!");

  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 17;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  // alert pops up 2x because in strict mode is rendered 2x
  // if (hour >= openHour && hour <= closeHour) alert("We're currently open!");
  // else alert("Sorry, we're closed!");
  // modul JSX + JS
  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()}. We're currently open
    </footer>
  );
}
// primul HTML element named footter, al doilea pt props, al treilea = the child element (text)

// react v18
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// react before 18
// React.render(<App />, document.getElementById("root"));
