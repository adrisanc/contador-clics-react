import React from "react";
import '../stylesheet/Boton.css'

// normalmente se trabaja con la sintaxis de desestructuracion
class BotonClase extends React.Component {
    render() {
        return (
          <button
            className={this.props.esBotonDeClic ? "boton-clic" : "boton-reiniciar"}
            onClick={this.props.manejarClic}
          >
            {this.props.texto}
          </button>
        )
    }
}


export default BotonClase;
