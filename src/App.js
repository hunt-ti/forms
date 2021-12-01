import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
          <h2>Formulário de contato</h2>
        <form id="contact-form">
          <div className="form-group">
              <label htmlFor="name">Nome</label>
              <input type="text" className="form-control" />
          </div>
          <div className="form-group">
              <label htmlFor="exampleInputEmail1">E-mail</label>
              <input type="email" className="form-control" aria-describedby="emailHelp" />
          </div>
           <div className="form-group">
               <label htmlFor="message">Mensagem (Opcional)</label>
               <textarea className="form-control" rows="5"></textarea>
           </div>
          <button className="btn btn-success">Enviar</button>
        </form>
      </div>
    </div>
  );
}

export default App;
