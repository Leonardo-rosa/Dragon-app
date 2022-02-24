import React from 'react';
import './Editar.css';

class Editar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dragonLoad: false,
      dragon: [],
    };
  }
  trocaValor = (e) => {
    const state = this.state.dragon;
    state[e.target.name] = e.target.value;
    this.setState({ dragon: state });
  };

  enviarDados = (e) => {
    e.preventDefault();
    console.log('formulario enviado');

    const { id, name, type } = this.state.dragon;
    console.log(id);
    console.log(name);
    console.log(type);
    var dadosEnviar = { id: id, name: name, type: type };

    fetch(
      'http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/' +
        this.props.match.params.id,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dadosEnviar),
      },
    )
      .then((resposta) => resposta.json())
      .then((dragonsResposta) => {
        console.log(dragonsResposta);
        this.props.history.push('/');
      })
      .catch(console.log);
  };

  componentDidMount() {
    fetch(
      'http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/' +
        this.props.match.params.id,
      {
        method: 'PUT',
      },
    )
      .then((resposta) => resposta.json())
      .then((dragonsResposta) => {
        // console.log(dragonsResposta);
        this.setState({
          dragonLoad: true,
          dragon: dragonsResposta,
        });
      })
      .catch(console.log);
  }

  render() {
    const { dragonLoad, dragon } = this.state;
    if (!dragonLoad) {
      return <div>Carregando.......</div>;
    } else {
      return (
        <div>
          <article className="cardDragon">
            <header>
              <h2> Dragon #{dragon.id}</h2>
            </header>
            <div className="card-container">
              <form onSubmit={this.enviarDados}>
                <div className="wrapperfORM">
                  <div>
                    <label>Nome</label>
                    <input
                      type="text"
                      onChange={this.trocaValor}
                      name="name"
                      id="name"
                      value={dragon.name}
                    />
                  </div>
                  <div>
                    <label>Tipo</label>
                    <input
                      type="text"
                      onChange={this.trocaValor}
                      name="type"
                      id="type"
                      value={dragon.type}
                    />
                  </div>
                  <div>
                    <input type="submit" value="Atualizar" />
                  </div>
                </div>
              </form>
            </div>
          </article>
        </div>
      );
    }
  }
}
export default Editar;
