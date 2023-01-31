import React from "react";
import styles from "./Pagination.module.css";

export default function Pagination({
  pokemonsPerPage,
  allPokemons,
  pagination,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(allPokemons / pokemonsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className={styles.container}>
        {pageNumbers &&
          pageNumbers.map((number) => (
            <li key={number} className={styles.pagination}>
              <a onClick={() => pagination(number)}>{number}</a>
            </li>
          ))}
      </ul>
    </nav>
  );
}
