import { useEffect, useState } from "react";
import Select from "./Select";
const UseEffect = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/categories", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => setCategories(data));
  }, []); // O efeito é executado apenas uma vez após a montagem
  return (
    <>
      <Select title="Categoria: " name="categories_id" options={categories} />
    </>
  );
};

export default UseEffect;
