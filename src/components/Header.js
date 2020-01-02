import React, { Component } from "react";

export default class Header extends Component {
  style = () => ({
    width: "100%",
    backgroundColor: "#da552f",
    height: "60px",
    display: "flex",
    justifyContent: "center",
    fontSize: "20px",
    color: "#FFF",
    fontWeight: 800,
    alignItems: "center"
  });
  render() {
    return (
      <div style={this.style()}>
        <h2>Lista de Pokemon</h2>
      </div>
    );
  }
}
