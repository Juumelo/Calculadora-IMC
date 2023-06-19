import logo from "./logo.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="cabecalho">
        <div className="logo_cabecalho">
          <img src={logo}></img>
        </div>
        <h3 className="titulo_logo">
          Apartamentos e Kitnets. Compre, venda, alugue ou anuncie!
        </h3>
        <div className="botoes">
          <button className="button">Cadastre-se</button>
          <button className="button">Login</button>
        </div>
      </div>
      <hr className="pontilhado"></hr>
      <div className="pesquisa">
        <div className="check">
          <div className="alugar_comprar">
            <input type="checkbox"></input>
            <label>Alugar</label>

            <input type="checkbox"></input>
            <label>Comprar</label>
          </div>
          <div className="kitnet_apartamento">
            <input type="checkbox"></input>
            <label>Kitnet</label>

            <input type="checkbox"></input>
            <label>Apartamento</label>
          </div>
          <div>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
          </div>
        </div>
        <div className="busca">
          <input type="search"></input>
          <input type="search"></input>

          <button>Pesquisar</button>
        </div>
      </div>

      <hr className="pontilhado"></hr>
    </div>
  );
}

export default App;
