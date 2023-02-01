import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { postPokemon, getTypes } from "../../store/actions";
import NavBar from "../NavBar/NavBar";
import styles from "./Create.module.css";

function validate(input) {
  let errors = {};
  if (!input.name) {
    errors.name = "Es necesario indicar el nombre del Pokemon";
  } else if (!input.health) {
    errors.health = "Es necesario indicar la vida del Pokemon";
  } else if (!input.attack) {
    errors.attack = "Es necesario indicar el ataque del Pokemon";
  } else if (!input.defense) {
    errors.defense = "Es necesario indicar la defensa del Pokemon";
  } else if (!input.speed) {
    errors.speed = "Es necesario indicar la velocidad del Pokemon";
  } else if (!input.height) {
    errors.height = "Es necesario indicar la altura del Pokemon";
  } else if (!input.weight) {
    errors.weight = "Es necesario indicar el peso del Pokemon";
  } else if (!input.types) {
    errors.types = "Es necesario seleccionar al menos un tipo del Pokemon";
  }

  return errors;
}

export default function PokemonCreate() {
  const dispatch = useDispatch();
  const history = useHistory();
  const types = useSelector((state) => state.types);
  const [errors, setErrors] = useState({});
  const [input, setInput] = useState({
    name: "",
    health: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    types: [],
  });

  useEffect(() => {
    dispatch(getTypes());
  }, []);

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }

  function handleCheck(e) {
    if (e.target.checked) {
      console.log(e.target.name);
      setInput({
        ...input,
        types: [...input.types, e.target.name],
      });
      console.log(input.types);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(postPokemon(input));
    console.log(input);
    alert(`¡El pokemon ${input.name} se ha creado exitosamente!`);

    setInput({
      name: "",
      health: "",
      attack: "",
      defense: "",
      speed: "",
      height: "",
      weight: "",
      types: [],
    });

    history.push("/home");
  }

  return (
    <div className={styles.background}>
      <NavBar />
      <form onSubmit={(e) => handleSubmit(e)} className={styles.card}>
        <h1>Crea tu pokemon</h1>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            value={input.name}
            name="name"
            onChange={handleChange}
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>
        <div>
          <label>Vida:</label>
          <input
            type="number"
            value={input.health}
            name="health"
            onChange={handleChange}
          />
          {errors.health && <p className="error">{errors.health}</p>}
        </div>
        <div>
          <label>Ataque:</label>
          <input
            type="number"
            value={input.attack}
            name="attack"
            onChange={handleChange}
          />
          {errors.attack && <p className="error">{errors.attack}</p>}
        </div>
        <div>
          <label>Defensa:</label>
          <input
            type="number"
            value={input.defense}
            name="defense"
            onChange={handleChange}
          />
          {errors.defense && <p className="error">{errors.defense}</p>}
        </div>
        <div>
          <label>Velocidad:</label>
          <input
            type="number"
            value={input.speed}
            name="speed"
            onChange={handleChange}
          />
          {errors.speed && <p className="error">{errors.speed}</p>}
        </div>
        <div>
          <label>Altura:</label>
          <input
            type="number"
            value={input.height}
            name="height"
            onChange={handleChange}
          />
          {errors.height && <p className="error">{errors.height}</p>}
        </div>
        <div>
          <label>Peso:</label>
          <input
            type="number"
            value={input.weight}
            name="weight"
            onChange={handleChange}
          />
          {errors.weight && <p className="error">{errors.weight}</p>}
        </div>
        <div>
          <label for="url">Dirección URL de la imagen:</label>
          <input
            type="url"
            value={input.image}
            name="image"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Tipo:</label>
          <div className={styles.display}>
            <label>
              <input
                type="checkbox"
                name="normal"
                value={1}
                onChange={(e) => handleCheck(e)}
              />
              Normal
            </label>
            <label>
              <input
                type="checkbox"
                name="fighting"
                value={2}
                onChange={(e) => handleCheck(e)}
              />
              Lucha
            </label>
            <label>
              <input type="checkbox" name="flying" value="flying" />
              Volador
            </label>
            <label>
              <input type="checkbox" name="poison" value="poison" />
              Veneno
            </label>
            <label>
              <input type="checkbox" name="ground" value="ground" />
              Tierra
            </label>
          </div>
          <div className={styles.display}>
            <label>
              <input type="checkbox" name="rock" value="rock" />
              Roca
            </label>
            <label>
              <input type="checkbox" name="bug" value="bug" />
              Bicho
            </label>
            <label>
              <input type="checkbox" name="ghost" value="ghost" />
              Fantasma
            </label>
            <label>
              <input type="checkbox" name="steel" value="steel" />
              Acero
            </label>
            <label>
              <input type="checkbox" name="fire" value="fire" />
              Fuego
            </label>
          </div>
          <div className={styles.display}>
            <label>
              <input type="checkbox" name="water" value="water" />
              Agua
            </label>
            <label>
              <input type="checkbox" name="grass" value="grass" />
              Planta
            </label>
            <label>
              <input type="checkbox" name="electric" value="electric" />
              Eléctrico
            </label>
            <label>
              <input type="checkbox" name="psychic" value="psychic" />
              Psíquico
            </label>
            <label>
              <input type="checkbox" name="ice" value="ice" />
              Hielo
            </label>
          </div>
          <div className={styles.display}>
            <label>
              <input type="checkbox" name="dragon" value="dragon" />
              Dragón
            </label>
            <label>
              <input type="checkbox" name="dark" value="dark" />
              Siniestro
            </label>
            <label>
              <input type="checkbox" name="fairy" value="fairy" />
              Hada
            </label>
            <label>
              <input type="checkbox" name="unknow" value="unknow" />
              Desconocido
            </label>
            <label>
              <input type="checkbox" name="shadow" value="shadow" />
              Sombra
            </label>
          </div>
        </div>
        <button type="submit">Crear</button>
      </form>
    </div>
  );
}
