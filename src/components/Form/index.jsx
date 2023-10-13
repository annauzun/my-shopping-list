import Button from "components/Button";
import { useState } from "react";

const products = [
  "-Выберите продукт-",
  "Картофель",
  "Морковь",
  "Арбуз",
  "Яблоки",
  "Лимон",
  "Масло сливочное",
  "Сметана",
  "Творог",
  "Сыр",
  "Сгущенка",
  "Мед",
  "Яйца",
  "Сахар ",
  "Мука ",
  "Овсяные хлопья",
  "Рис",
  "Гречка",
  "Масло оливковое",
  "Шпинат",
  "Рыба ",
  "Соль",
  "Чай ",
  "Кофе ",
  "Ягоды ",
];
const names = products.sort();
const Form = ({ addItem }) => {
  const [name, setName] = useState(names[0]);
  const [id, setId] = useState("")
  const handleClick = (event) => {
    event.preventDefault();
    const item = {
        id,
        name
    };
    addItem(item);
    setId("0");
    setName("0");
  };

  return (
    <div>
      <form className="mx-auto my-10 flex flex-wrap justify-center items-center gap-4">
        <div className="">
          <select
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="border border-solid border-gray-400 mx-4 rounded-lg text-lg px-4 py-2 shadow-md"
          >
            {names.map((name) => {
              return <option key={name}>{name}</option>;
            })}
          </select>
        </div>
        <Button
          title={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          }
          handleClick={handleClick}
          type="submit"
        />
      </form>
    </div>
  );
};

export default Form;
