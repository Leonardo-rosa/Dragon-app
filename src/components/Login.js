import React from 'react';
import './Login.css';
class Login extends React.Component {
  state = {
    email: '',
    pwd: '',
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
  };
  render() {
    return (
      <div class="formLogin">
        <h2 class="text-center">LOGIN</h2>
        <form>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              placeholder="email..."
              required
              onChange
            />
          </div>
          <div>
            <label htmlFor="pwd">Senha:</label>
            <input
              type="password"
              name="pwd"
              placeholder="password..."
              require
              onChange
            />
          </div>
          <button onSubmit>Entrar</button>
        </form>
      </div>
    );
  }
}
export default Login;
