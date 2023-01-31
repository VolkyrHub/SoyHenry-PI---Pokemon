import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getPokemonsName } from "../../store/actions";
import styles from "./SearchBar.module.css";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  function handleInputChange(e) {
    e.preventDefault();
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getPokemonsName(name));
    setName("");
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Busque su pokemon aquí"
        value={name}
        onChange={(e) => handleInputChange(e)}
        className={styles.input}
      />
      <button
        type="submit"
        onClick={(e) => handleSubmit(e)}
        className={styles.button}
      >
        Buscar
      </button>
    </div>
  );
}
