import logo from './logo_FF_white.png';
import './createaccount.css';
import './login';
import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="form">
      <header>
        <img src={logo} className="App-logo" alt="logo" width={200} height={200} />
        <h1 className='welcome_h1'>BEM VINDO AO FRIEND,</h1><h1 className='welcome_h2'>SEU AMIGO FINANCEIRO!</h1>
      </header>
      <form>
        <label id="email">
          Email:<br />
          <input type="email" name="email" required size={40} placeholder='Digite seu e-mail'/>
        </label>

        <label id="senha">
          Senha:<br />
          <input type="password" name="password" required size={40} placeholder='Crie uma senha'/>
        </label>
        <p className='temconta'>Não tem conta? | Criar uma <a to="/src/createaccount.js">aqui</a></p>

        <button type="submit">Entrar</button>
      </form>
      <footer>
        <h3>Finance Friend @ CopyRight 2023</h3>
      </footer>
    </div>
  );
}

export default Login;