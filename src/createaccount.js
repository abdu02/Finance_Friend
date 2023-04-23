import logo from './logo_FF_white.png';
import './createaccount.css';
import React from "react";

function createaccount() {
  return (
    <div className="form">
      <header>
        <img src={logo} className="App-logo" alt="logo" width={200} height={200} />
        <h1 className='welcome_h1'>BEM VINDO AO FRIEND,</h1><h1 className='welcome_h2'>SEU AMIGO FINANCEIRO!</h1>
      </header>
      <form>
        <label id="name">
          Nome Completo:<br />
          <input type="text" name="name" required size={40} placeholder='Digite seu nome completo'/>
        </label>

        <label id="email">
          Email:<br />
          <input type="email" name="email" required size={40} placeholder='Digite seu e-mail'/>
        </label>

        <label id="telefone">
          Telefone:<br />
          <input type="text" name="phone" required size={40} placeholder='telefone com DDD' data-mask="(00) 00000-0000" data-mask-selectonfocus="true"/>
        </label>

        <label id="senha">
          Senha:<br />
          <input type="password" name="password" required size={40} placeholder='Crie uma senha'/>
        </label>
        <p className='temconta'>Já tem conta? | faça login <a href='/src/login.js'>aqui</a></p>

        <button type="submit">Criar Conta</button>
      </form>
      <footer>
        <h3>Finance Friend @ CopyRight 2023</h3>
      </footer>
    </div>
  );
}

export default createaccount;