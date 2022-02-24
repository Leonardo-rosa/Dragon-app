import React from 'react';
import { Link } from 'react-router-dom';
import './Listar.css';

class Listar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dragoesLoad: false, dragoes: [] };
  }
  deleteDragons = (id) => {
    fetch('http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/' + id, {
      method: 'DELETE',
    })
      .then((resposta) => resposta.json())
      .then((dragonsResposta) => {
        this.loadDragons();
      })
      .catch(console.log);
  };
  loadDragons() {
    fetch('http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon')
      .then((resposta) => resposta.json())
      .then((dragonsResposta) => {
        this.setState({ dragoesLoad: true, dragoes: dragonsResposta });
      })
      .catch(console.log);
  }
  componentDidMount() {
    this.loadDragons();
  }
  render() {
    const { dragoesLoad, dragoes } = this.state;
    if (!dragoesLoad) {
      return <div className="text-center">Carregando.......</div>;
    } else {
      return (
        <section className="secListDagon">
          <header>
            <h2>Lista de Dragões!</h2>
            <Link className="btn-create" to={'/criar'}>
              Adicionar
            </Link>
          </header>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Data Criação</th>
                  <th>Nome</th>
                  <th>Tipo</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {dragoes.map((dragao) => (
                  <tr key={dragao.id}>
                    <td>{dragao.createdAt}</td>
                    <td>{dragao.name}</td>
                    <td>{dragao.type}</td>
                    <td>
                      <Link className="btn" to={'/Single/' + dragao.id}>
                        Ver
                      </Link>
                      <Link className="btn" to={'/editar/' + dragao.id}>
                        Editar
                      </Link>
                      <button
                        className="btn"
                        onClick={() => this.deleteDragons(dragao.id)}
                      >
                        Deletar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      );
    }
  }
}
export default Listar;
