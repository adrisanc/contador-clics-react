import React from "react";
import "../stylesheet/Contador.css";

class ContadorClase extends React.Component {
  render() {
    return <div className="contador">{this.props.numClics}</div>;
  }
}

export default ContadorClase;
