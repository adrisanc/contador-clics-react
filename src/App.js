import "./App.css";
import React from "react";
import Boton from "./components/Boton";
import Contador from "./components/Contador";
import freeCodeCampLogo from "./images/freecodecamp-logo.png";
import { useState } from "react";
import ContadorClase from "./components/ContadorClase";
import BotonClase from "./components/BotonClase";

export function App() {
  const [numClics, setnumClics] = useState(0);

  const manejarClic = () => {
    setnumClics(numClics + 1);
  };

  const reiniciarContador = () => {
    setnumClics(0);
  };

  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img
          className="freecodecamp-logo"
          src={freeCodeCampLogo}
          alt="Logo de freeCodeCamp"
        />
      </div>
      <div className="contenedor-principal">
        <h2>Componente funcional</h2>
        <Contador numClics={numClics} />
        <Boton texto="Clic" esBotonDeClic={true} manejarClic={manejarClic} />

        <Boton
          texto="Reiniciar"
          esBotonDeClic={false}
          manejarClic={reiniciarContador}
        />
      </div>
    </div>
  );
}

export class AppClase extends React.Component {
  constructor() {
    super();
    this.state = {
      numClicsClase: 0,
    };

    //permite pasar como props metodos para que funcionen los eventos, permite asociar el this del metodo con el this de la clase
    this.manejarClicClase = this.manejarClicClase.bind(this);
    this.reiniciarContador = this.reiniciarContador.bind(this);
  }

  reiniciarContador() {
    this.setState({ numClicsClase: 0 });
  }

  manejarClicClase() {
    this.setState(({ numClicsClase }) => ({
      numClicsClase: numClicsClase + 1,
    }));
  }

  render() {
    return (
      <div className="App">
        <div className="freecodecamp-logo-contenedor">
          <img
            className="freecodecamp-logo"
            src={freeCodeCampLogo}
            alt="Logo de freeCodeCamp"
          />
        </div>
        <div className="contenedor-principal">
          <h2>Componente de clase</h2>
          <ContadorClase numClics={this.state.numClicsClase} />
          <BotonClase
            texto="Clic"
            esBotonDeClic={true}
            manejarClic={this.manejarClicClase}
          />

          <BotonClase
            texto="Reiniciar"
            esBotonDeClic={false}
            manejarClic={this.reiniciarContador}
          />
        </div>
      </div>
    );
  }
}
