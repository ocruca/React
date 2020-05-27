import React, { useState } from "react";
import "./styles.css";

export default function App() {
  // ENTRADA, RODANDO, FIM
  let [estado, setEstado] = useState("ENTRADA");

  // palpite
  let [palpite, setPalpite] = useState(150);
  let [numPalpites, setNumPalpites] = useState(1);

  let [min, setMin] = useState(0);
  let [max, setMax] = useState(300);

  const iniciarJogo = () => {
    setEstado("RODANDO");
    setMin(0);
    setMax(300);
    setNumPalpites(1);
    setPalpite(150);
  };
  if (estado === "ENTRADA") {
    return (
      <div className="App">
        <button onClick={iniciarJogo}>Comece a jogar</button>
      </div>
    );
  }

  const randomInt = (min, max) => {
    return min + Math.floor((max - min) * Math.random());
  };
  const menor = () => {
    setNumPalpites(numPalpites + 1);
    let max = palpite - 1;
    setMax(max);
    // const proxPalpite = (palpite - min) / 2 + min;
    setPalpite(randomInt(min, max));
  };
  const maior = () => {
    setNumPalpites(numPalpites + 1);
    let min = palpite + 1;
    setMin(min);
    // const proxPalpite = (max - palpite) / 2 + palpite;
    setPalpite(randomInt(min, max));
  };
  const acertou = () => {
    setEstado("FIM");
  };
  if (min === max) {
    acertou();
  }
  if (estado === "FIM") {
    return (
      <div className="App">
        <p>
          Acertei o numero {palpite} com {numPalpites} chutes
        </p>
        <button onClick={iniciarJogo}>Reiniciar</button>
      </div>
    );
  }
  return (
    <div className="App">
      <p>O numero é {palpite}?</p>
      <br />
      <hr />
      <p className="Debug">
        Min:{min} -- Max:{max}
      </p>
      <br />
      <button onClick={menor}>Menor</button>
      <button onClick={acertou} id="acertou">
        Acertou
      </button>
      <button onClick={maior}>Maior</button>
    </div>
  );
}
