import { useState } from "react";
import Header from "components/Header";
import Footer from "components/Footer";
import Item from "components/Item";
import Form from "components/Form";

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Молоко",
      isChecked: 'boolean'
    },
    {
      id: 2,
      name: "Йогурт",
      isChecked: 'boolean'
    },
    {
      id: 3,
      name: "Лук",
      isChecked: 'boolean'
    },
    {
      id: 4,
      name: "Капуста",
      isChecked: 'boolean'
    },
    {
      id: 5,
      name: "Яблоки",
      isChecked: 'boolean'
    },
  ]);

  const addItem = (item) => {
    const newItems = [...items, item];
    setItems(newItems);
  };

  const deleteItem = (id) => {
    const filteredItems = items.filter((item) => item.id !== id);
    setItems(filteredItems);
  };

  return (
    <div className="mx-auto max-w-screen-md max-h-screen">
      <Header />
      <Form addItem={addItem} />
      <div className="my-10">
        {items.length === 0 && (
          <div className="flex flex-col items-center justify-center text-gray-400 text-4xl font-thin text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-14 h-14"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
            <p>Список покупок пуст</p>
          </div>
        )}
        {items.length > 0 &&
          items.map((item) => {
            return (
              <Item
                key={item.id}
                item={item}
                addItem={addItem}
                deleteItem={deleteItem}
              />
            );
          })}
      </div>
      <Footer count={items.length} />
    </div>
  );
}

export default App;
