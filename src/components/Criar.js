import React from 'react';
import './Criar.css';

class Criar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      tipo: '',
    };
  }
  trocaValor = (e) => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState({ state });
  };
  enviarDados = (e) => {
    e.preventDefault();
    const { nome, tipo } = this.state;

    var dadosEnviar = { name: nome, type: tipo };

    fetch('http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dadosEnviar),
    })
      .then((resposta) => resposta.json())
      .then((dragonsResposta) => {
        console.log(dragonsResposta);
        this.props.history.push('/');
      })
      .catch(console.log);
  };

  render() {
    const { nome, tipo } = this.state;
    return (
      <div className="card">
        <div className="card-header">
          <h2>Criar Dragão</h2>
        </div>
        <div className="card-body">
          <form onSubmit={this.enviarDados}>
            <div className="wrapperfORM">
              <div>
                <label for="">Nome:</label>
                <input
                  type="text"
                  onChange={this.trocaValor}
                  name="nome"
                  id="nome"
                  value={nome}
                  required="required"
                />
              </div>
              <div>
                <label for="">Tipo:</label>
                <input
                  type="text"
                  onChange={this.trocaValor}
                  name="tipo"
                  id="tipo"
                  value={tipo}
                  required="required"
                />
              </div>
              <div>
                <input type="submit" value="Criar" />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default Criar;
