const Contador = () => {
  const [contador, setContador] = React.useState(0);

  const aumentar = () => setContador(contador + 1);

  const disminuir = () => setContador(contador - 1);

  const changeColor = () => {
    if (contador < 0) {
      return "menor";
    } else if (contador == 0) {
      return "standar";
    } else return "mayor";
  };

  return (
    <div>
      {/* <h1 className={contador < 0 ? "menor" : "mayor"}>Contador: {contador}</h1> */}

      <h1>
        Contador: <span className={changeColor()}>{contador}</span>
      </h1>
      <hr />

      <button onClick={aumentar}>Aumentar</button>
      <button onClick={disminuir}>Disminuir</button>
    </div>
  );
};
