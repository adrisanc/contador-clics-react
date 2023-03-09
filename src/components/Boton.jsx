import React from "react";
import '../stylesheet/Boton.css'

// normalmente se trabaja con la sintaxis de desestructuracion
const Boton = ({ texto, esBotonDeClic, manejarClic }) => {
  return (
    <button
      className={esBotonDeClic ? "boton-clic" : "boton-reiniciar"}
      onClick={manejarClic}
    >
      {texto}
    </button>
  );
};

export default Boton;
