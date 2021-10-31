import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";
import Header from "./Header";
import Footer from "./Footer";

const allCategories = items.map((item) => item.category);
const newCategories = ["all", ...new Set(allCategories)];

function App() {
  const [menuItems, setmenuItems] = useState(items);
  const [categories, setcategories] = useState([]);

  const filterItems = (category) => {
    if (category === "all") {
      setmenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setmenuItems(newItems);
  };

  return (
    <>
      <Header />
      <main>
        <section className="menu section">
          <h2 className="title">Our Menu</h2>
          <div className="underline"></div>
        </section>
        <Categories categories={newCategories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </main>
      <br />
      <Footer />
    </>
  );
}

export default App;
