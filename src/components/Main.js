import React, { Component } from "react";
import api from "../service/api";

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      results: [],
      next: "",
      previous: ""
    };
  }
  style = () => {
    const style_div = () => {
      return {
        maxWidth: "700px",
        margin: "20px auto 0",
        padding: "0 20px"
      };
    };

    const style_article = () => {
      return {
        background: "#fff",
        border: "1px solid #ddd",
        borderRadius: "5px",
        padding: "20px",
        marginBottom: "20px"
      };
    };

    const style_h2 = () => {
      return {
        fontSize: "Arial",
        fontFamily: "50px"
      };
    };

    const style_strong = () => {
      return {
        fontSize: "15px",
        color: "#999",
        marginTop: "5px",
        lineHeight: "24px",
        display: "flex",
        justifyContent: "center"
      };
    };

    const style_a = () => {
      return {
        heigth: "30px",
        // // width: "80px",
        borderRadius: "32px",
        border: "2px solid #da552f",
        background: "10px",
        margin: "20px auto",
        width: "50%",
        color: "#da552f",
        fontWeigth: "bold",
        fontSize: "16px",
        textDecoration: "none",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transition: "all 0.25"
      };
    };

    const style_actions = () => {
      return {
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "20px"
      };
    };

    const style_button = () => {
      return {
        padding: "10px",
        borderRadius: "5px",
        border: "0",
        fontSize: "16px",
        color: "#fff",
        background: "#da552f"
      };
    };

    return {
      style_div: style_div,
      style_article: style_article,
      style_strong: style_strong,
      style_a: style_a,
      style_h2: style_h2,
      style_actions: style_actions,
      style_button: style_button
    };
  };

  componentDidMount() {
    this.loadPokemon();
    // axios.get(`https://pokeapi.co/api/v2/pokemon/ditto/`).then(resp => {
    //   const resultado = resp.data.abilities.filter(
    //     abilitie => abilitie.ability.name === "limber"
    //   );
    //   console.log(resultado);
    // });z
  }

  loadPokemon = async () => {
    const response = await api.get("/pokemon");

    this.setState({
      results: response.data.results,
      next: response.data.next,
      previous: response.data.previous
    });
  }; // não sobreescreve o valor do this.

  prevPage = () => {
    if (!this.state.previous) return;
    const res = this.state.previous.substring(25);
    const response = api.get(res);

    response.then(res => {
      this.setState({
        results: res.data.results,
        next: res.data.next,
        previous: res.data.previous
      });
    });
  };

  nextPage = () => {
    const res = this.state.next.substring(25);
    const response = api.get(res);
    response.then(res => {
      this.setState({
        results: res.data.results,
        next: res.data.next,
        previous: res.data.previous
      });
    });

    // this.setState({ results: response.data.results, next: response.data.next });
  };

  render() {
    const style = this.style();
    return (
      <div style={style.style_div()}>
        {this.state.results.map((result, index) => (
          <article key={index} style={style.style_article()}>
            <h2 style={style.style_h2()}>{result.name}</h2>
            <strong style={style.style_strong()}>{result.url}</strong>
            <a href="?" style={style.style_a()}>
              Acessar
            </a>
          </article>
        ))}

        <div style={style.style_actions()}>
          {this.state.previous ? (
            <button style={style.style_button()} onClick={this.prevPage}>
              Anterior
            </button>
          ) : null}

          <button style={style.style_button()} onClick={this.nextPage}>
            Próximo
          </button>
        </div>
      </div>
    );
  }
}
